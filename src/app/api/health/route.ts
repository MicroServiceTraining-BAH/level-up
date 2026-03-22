import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type CheckResult = {
  ok: boolean;
  message: string;
};

async function checkEnvVars(): Promise<CheckResult> {
  const required = ['RESEND_API_KEY'];
  const missing = required.filter((k) => !process.env[k]);
  if (missing.length > 0) {
    return { ok: false, message: `Missing env vars: ${missing.join(', ')}` };
  }
  return { ok: true, message: 'All required env vars present' };
}

async function checkResend(): Promise<CheckResult> {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.domains.list();
    if (error) return { ok: false, message: `Resend API error: ${error.message}` };
    const verified = data?.data?.some((d) => d.name === 'lvluplocal.co' && d.status === 'verified');
    if (!verified) return { ok: false, message: 'lvluplocal.co domain not verified in Resend' };
    return { ok: true, message: 'Resend API reachable, domain verified' };
  } catch (err) {
    return { ok: false, message: `Resend check threw: ${String(err)}` };
  }
}

export async function GET() {
  const [envCheck, resendCheck] = await Promise.all([checkEnvVars(), checkResend()]);

  const checks = {
    env: envCheck,
    resend: resendCheck,
  };

  const allOk = Object.values(checks).every((c) => c.ok);

  return NextResponse.json(
    { ok: allOk, timestamp: new Date().toISOString(), checks },
    { status: allOk ? 200 : 503 }
  );
}
