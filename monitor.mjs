/**
 * LevelUp Local — Site Monitor
 *
 * Checks every critical feature of the site and sends an alert email
 * via Resend if anything is broken.
 *
 * Usage:
 *   RESEND_API_KEY=re_xxx SITE_URL=https://lvluplocal.co node monitor.mjs
 *
 * In GitHub Actions this runs automatically on a schedule (see .github/workflows/monitor.yml).
 * Set RESEND_API_KEY and SITE_URL as repository secrets/vars.
 */

const SITE_URL = process.env.SITE_URL || "https://lvluplocal.co";
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const ALERT_RECIPIENTS = [
  "Jcphilipps@lvluplocal.co",
  "g.cajigas@lvluplocal.co",
];

if (!RESEND_API_KEY) {
  console.error("❌ RESEND_API_KEY is not set");
  process.exit(1);
}

// ─── Checks ───────────────────────────────────────────────────────────────────

const PAGES = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/booking", label: "Booking" },
];

async function checkPage(path, label) {
  const url = `${SITE_URL}${path}`;
  try {
    const res = await fetch(url, {
      method: "GET",
      signal: AbortSignal.timeout(10_000),
    });
    if (res.ok) return { ok: true, label, message: `${res.status} OK` };
    return { ok: false, label, message: `${res.status} ${res.statusText}` };
  } catch (err) {
    return { ok: false, label, message: `Request failed: ${err.message}` };
  }
}

async function checkHealthEndpoint() {
  const url = `${SITE_URL}/api/health`;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10_000) });
    const json = await res.json();
    if (res.ok && json.ok)
      return {
        ok: true,
        label: "Health API",
        message: "All server checks passed",
        detail: json.checks,
      };
    return {
      ok: false,
      label: "Health API",
      message: "One or more server checks failed",
      detail: json.checks,
    };
  } catch (err) {
    return {
      ok: false,
      label: "Health API",
      message: `Request failed: ${err.message}`,
    };
  }
}

async function checkContactFormApi() {
  const url = `${SITE_URL}/api/contact`;
  try {
    // Send with missing fields — should get 400, not 500
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
      signal: AbortSignal.timeout(10_000),
    });
    if (res.status === 400)
      return {
        ok: true,
        label: "Contact Form API",
        message: "API reachable and validating correctly",
      };
    return {
      ok: false,
      label: "Contact Form API",
      message: `Unexpected status ${res.status} (expected 400 for empty payload)`,
    };
  } catch (err) {
    return {
      ok: false,
      label: "Contact Form API",
      message: `Request failed: ${err.message}`,
    };
  }
}

// ─── Alert Email ──────────────────────────────────────────────────────────────

async function sendAlertEmail(failures) {
  const failureRows = failures
    .map(
      (f) => `
      <tr>
        <td style="padding:10px 12px;border-bottom:1px solid #2a2a2a;color:#ff6b6b;font-weight:600;">${f.label}</td>
        <td style="padding:10px 12px;border-bottom:1px solid #2a2a2a;color:#ccc;font-size:13px;">${f.message}</td>
      </tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:sans-serif;background:#0d0d0d;color:#fff;padding:32px;border-radius:12px;max-width:600px;margin:0 auto;">
      <h2 style="color:#ff6b6b;margin-top:0;">⚠️ LevelUp Local — Site Alert</h2>
      <p style="color:#aaa;font-size:14px;">The automated monitor detected <strong style="color:#fff;">${failures.length} failing check${failures.length > 1 ? "s" : ""}</strong> on <a href="${SITE_URL}" style="color:#00c2ff;">${SITE_URL}</a>.</p>

      <table style="width:100%;border-collapse:collapse;margin:20px 0;border:1px solid #2a2a2a;border-radius:8px;overflow:hidden;">
        <thead>
          <tr style="background:#1a1a1a;">
            <th style="padding:10px 12px;text-align:left;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:#888;">Check</th>
            <th style="padding:10px 12px;text-align:left;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:#888;">Details</th>
          </tr>
        </thead>
        <tbody>${failureRows}</tbody>
      </table>

      <p style="color:#aaa;font-size:13px;">Common causes:</p>
      <ul style="color:#aaa;font-size:13px;line-height:1.8;">
        <li>Resend API key expired or revoked → <a href="https://resend.com/api-keys" style="color:#00c2ff;">resend.com/api-keys</a></li>
        <li>Domain verification lapsed → <a href="https://resend.com/domains" style="color:#00c2ff;">resend.com/domains</a></li>
        <li>App crashed or deployment failed</li>
        <li>A page was accidentally deleted or returns an error</li>
      </ul>

      <p style="color:#555;font-size:12px;margin-top:24px;">Sent by the LevelUp Local automated monitor · ${new Date().toUTCString()}</p>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "LevelUp Monitor <contact@lvluplocal.co>",
      to: ALERT_RECIPIENTS,
      subject: `🚨 [LevelUp Local] ${failures.length} check${failures.length > 1 ? "s" : ""} failing`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Failed to send alert email: ${err}`);
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function run() {
  console.log(`\n🔍 LevelUp Local Monitor — ${new Date().toISOString()}`);
  console.log(`   Target: ${SITE_URL}\n`);

  const pageChecks = await Promise.all(
    PAGES.map((p) => checkPage(p.path, p.label)),
  );
  const [healthCheck, contactCheck] = await Promise.all([
    checkHealthEndpoint(),
    checkContactFormApi(),
  ]);

  const allChecks = [...pageChecks, healthCheck, contactCheck];

  for (const check of allChecks) {
    const icon = check.ok ? "✅" : "❌";
    console.log(`${icon} ${check.label.padEnd(20)} ${check.message}`);
    if (check.detail) {
      for (const [key, val] of Object.entries(check.detail)) {
        const sub = check.detail[key];
        console.log(`   ${sub.ok ? "✓" : "✗"} ${key}: ${sub.message}`);
      }
    }
  }

  const failures = allChecks.filter((c) => !c.ok);

  if (failures.length === 0) {
    console.log("\n✅ All checks passed.\n");
    return;
  }

  console.log(
    `\n❌ ${failures.length} check(s) failed. Sending alert email...\n`,
  );

  try {
    await sendAlertEmail(failures);
    console.log("📧 Alert email sent to:", ALERT_RECIPIENTS.join(", "));
  } catch (err) {
    console.error("Failed to send alert email:", err.message);
    process.exit(2);
  }

  process.exit(1);
}

run();
