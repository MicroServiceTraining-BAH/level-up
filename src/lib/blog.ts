export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'cta'; text: string; label: string; href: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  content: ContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-rank-cleaning-business',
    title: 'How to Rank Your Cleaning Business on Google (2025 Guide)',
    description:
      'A step-by-step guide to getting your cleaning business in front of local customers actively searching on Google - without spending a fortune on ads.',
    date: '2025-03-10',
    category: 'Local SEO',
    readTime: '7 min read',
    content: [
      {
        type: 'p',
        text: 'If you run a cleaning business in Northern Virginia, you already know how competitive the market is. Every neighborhood has multiple cleaning companies competing for the same customers. The businesses that win aren\'t always the best - they\'re the ones that show up first on Google when someone types "house cleaning near me."',
      },
      {
        type: 'p',
        text: 'This guide walks you through exactly how to rank your cleaning business on Google - step by step, no tech background needed.',
      },
      {
        type: 'h2',
        text: 'Why Google Rankings Matter for Cleaning Businesses',
      },
      {
        type: 'p',
        text: 'Over 90% of people searching for a local service never scroll past the first page of Google results. If you\'re not visible there, you don\'t exist to most potential customers. More specifically, the "Local Pack" - that map with three business listings at the top of search results - captures the majority of clicks for local searches.',
      },
      {
        type: 'p',
        text: 'The good news: local SEO is one of the most cost-effective marketing channels available to small businesses. Unlike paid ads, a well-optimized listing keeps working for you 24/7 without ongoing spend.',
      },
      {
        type: 'h2',
        text: 'Step 1: Claim and Optimize Your Google Business Profile',
      },
      {
        type: 'p',
        text: 'Your Google Business Profile (GBP) is the single most important asset for local SEO. It\'s what powers the map listings and the local pack. If you haven\'t claimed yours, do it right now at business.google.com.',
      },
      {
        type: 'h3',
        text: 'Key things to optimize on your GBP:',
      },
      {
        type: 'ul',
        items: [
          'Business name - use your real, consistent business name (no keyword stuffing)',
          'Primary category - choose "House Cleaning Service" or "Janitorial Service" as appropriate',
          'Service areas - list every city and neighborhood you serve in Northern Virginia',
          'Business description - naturally include keywords like "residential cleaning in [city]" and "commercial cleaning [city]"',
          'Photos - upload at least 10 high-quality photos of your team, equipment, and completed jobs',
          'Services section - list every specific service you offer (deep clean, move-out cleaning, recurring maintenance, etc.)',
          'Hours - keep them accurate and up to date',
        ],
      },
      {
        type: 'h2',
        text: 'Step 2: Build a Website That Google Can Read',
      },
      {
        type: 'p',
        text: 'Your Google Business Profile is critical, but a professional website gives Google (and customers) much more confidence in your business. A website also lets you target dozens of keywords that your GBP alone can\'t capture.',
      },
      {
        type: 'h3',
        text: 'What your cleaning business website needs for SEO:',
      },
      {
        type: 'ul',
        items: [
          'A clear H1 heading that includes your primary keyword and city (e.g., "Professional Cleaning Services in Stafford, VA")',
          'Unique pages for each major service you offer - not everything crammed onto one page',
          'Location pages if you serve multiple cities across Northern Virginia',
          'Fast load time - Google uses page speed as a ranking factor, especially on mobile',
          'Schema markup - code that tells Google your business name, address, service area, and reviews',
          'Clear contact information and a phone number that clicks to call on mobile',
        ],
      },
      {
        type: 'h2',
        text: 'Step 3: Get More Google Reviews (The Right Way)',
      },
      {
        type: 'p',
        text: 'Reviews are one of the strongest local ranking signals Google uses. Businesses with more frequent, recent, high-quality reviews consistently outrank those without them.',
      },
      {
        type: 'p',
        text: 'The most effective way to get reviews is simple: ask every happy customer. After you complete a job, send a follow-up text or email with a direct link to your Google review page. Make it as easy as possible - if they have to search for you, most won\'t bother.',
      },
      {
        type: 'ul',
        items: [
          'Ask within 24 hours of the completed job while satisfaction is highest',
          'Respond to every review - positive and negative - professionally and promptly',
          'Never buy fake reviews - Google detects and penalizes this',
          'Aim for at least 1–2 new reviews per month consistently',
        ],
      },
      {
        type: 'h2',
        text: 'Step 4: Use Local Keywords Throughout Your Content',
      },
      {
        type: 'p',
        text: 'Local keywords are phrases your potential customers actually type into Google. For a cleaning business in Northern Virginia, these include:',
      },
      {
        type: 'ul',
        items: [
          '"house cleaning Stafford VA"',
          '"cleaning service near Woodbridge"',
          '"deep cleaning Fredericksburg"',
          '"move out cleaning Manassas"',
          '"residential cleaning Northern Virginia"',
        ],
      },
      {
        type: 'p',
        text: 'Include these naturally in your page titles, headings, body content, and image alt text. Don\'t stuff keywords unnaturally - write for humans first, and Google will reward you for it.',
      },
      {
        type: 'h2',
        text: 'Step 5: Build Local Citations',
      },
      {
        type: 'p',
        text: 'A citation is any online mention of your business name, address, and phone number (NAP). Consistent citations across directories signal to Google that your business is legitimate and established.',
      },
      {
        type: 'ul',
        items: [
          'Yelp',
          'Bing Places',
          'Apple Maps',
          'Facebook Business',
          'Angi (formerly Angie\'s List)',
          'HomeAdvisor',
          'Thumbtack',
          'Better Business Bureau',
        ],
      },
      {
        type: 'p',
        text: 'The key is consistency - your business name, address, and phone number must be identical across every listing. Even small variations (Street vs. St., for example) can dilute your ranking signals.',
      },
      {
        type: 'h2',
        text: 'How Long Does It Take to Rank?',
      },
      {
        type: 'p',
        text: 'Local SEO is not instant. Realistically, you should expect to see meaningful movement in your rankings within 3–6 months of consistent effort. Some competitive markets may take longer. The businesses that win in local search are the ones that treat SEO as an ongoing investment, not a one-time task.',
      },
      {
        type: 'p',
        text: 'The best time to start was six months ago. The second best time is today.',
      },
      {
        type: 'cta',
        text: 'Want us to handle all of this for your cleaning business? We build SEO-optimized websites and local marketing systems for service businesses across Northern Virginia.',
        label: 'Get a Free SEO Audit',
        href: '/booking',
      },
    ],
  },
  {
    slug: 'why-youre-not-showing-on-google-maps',
    title: "Why Your Business Isn't Showing Up on Google Maps",
    description:
      'The most common reasons local businesses get buried in Google Maps - and the exact fixes you can implement today to start appearing in front of local customers.',
    date: '2025-03-24',
    category: 'Google Maps',
    readTime: '6 min read',
    content: [
      {
        type: 'p',
        text: 'You\'ve heard it a hundred times: "Get on Google Maps and customers will find you." So you created a Google Business Profile, filled in the basics, and waited. Months later, you\'re still not showing up when people search for businesses like yours. What gives?',
      },
      {
        type: 'p',
        text: 'The reality is that simply having a Google Business Profile isn\'t enough. Google Maps rankings are competitive, and there are specific signals Google looks for before it decides to show your business to searchers. Here are the most common reasons you\'re not showing up - and what to do about it.',
      },
      {
        type: 'h2',
        text: 'Reason 1: Your Profile Is Incomplete',
      },
      {
        type: 'p',
        text: 'Google wants to show users the most useful, accurate results. If your profile is missing information - no photos, no description, incomplete hours, no services listed - Google treats it as less trustworthy than a fully filled-out competitor profile.',
      },
      {
        type: 'ul',
        items: [
          'Add at least 10 photos (exterior, interior, team, work samples)',
          'Write a complete business description with natural keyword usage',
          'List every service you offer in the Services section',
          'Add your business hours and keep them current',
          'Verify your business if you haven\'t already',
        ],
      },
      {
        type: 'h2',
        text: 'Reason 2: Your Service Area Is Wrong or Missing',
      },
      {
        type: 'p',
        text: 'If you\'re a service-area business (you go to the customer, rather than customers coming to you), you need to set up your service area in Google Business Profile correctly. Many businesses either skip this step or set it too narrow - only listing their city when they actually serve the whole region.',
      },
      {
        type: 'p',
        text: 'For a Northern Virginia business, you should add every city and county you serve: Stafford, Fredericksburg, Woodbridge, Manassas, Arlington, Alexandria, Fairfax, and any other areas where you do work. The more specific you are, the better Google can match you to searches in those areas.',
      },
      {
        type: 'h2',
        text: 'Reason 3: You Have No Reviews (or Stopped Getting Them)',
      },
      {
        type: 'p',
        text: 'Google Maps uses reviews as a major ranking signal - both the number of reviews and how recently you received them. A business with 50 reviews but none in the past year will often rank below a business with 20 reviews and one from last week.',
      },
      {
        type: 'p',
        text: 'Google interprets recent activity as a signal that your business is active and customers are engaged. Build a consistent system for requesting reviews after every completed job.',
      },
      {
        type: 'h2',
        text: 'Reason 4: Your NAP Information Is Inconsistent',
      },
      {
        type: 'p',
        text: 'NAP stands for Name, Address, and Phone number. When Google cross-references your business across the web, it\'s looking for consistency. If your business name appears as "ABC Plumbing" on your website, "A.B.C. Plumbing LLC" on Yelp, and "ABC Plumbing Services" on your Facebook page, Google gets confused about whether these are the same business.',
      },
      {
        type: 'ul',
        items: [
          'Use the exact same business name everywhere online',
          'Use the same phone number format (XXX-XXX-XXXX vs (XXX) XXX-XXXX - pick one)',
          'If you move or change your number, update every single listing',
          'Audit your citations on Yelp, Bing, Facebook, Apple Maps, and industry directories',
        ],
      },
      {
        type: 'h2',
        text: 'Reason 5: Your Website Isn\'t Backing Up Your GBP',
      },
      {
        type: 'p',
        text: 'Your Google Business Profile and your website work together. Google looks at your website to verify and reinforce what your GBP says. If your website doesn\'t mention the cities you serve, doesn\'t include schema markup, or loads slowly - it weakens your local rankings even if your GBP is perfect.',
      },
      {
        type: 'h3',
        text: 'What your website needs to support your Maps ranking:',
      },
      {
        type: 'ul',
        items: [
          'Your city and service area mentioned naturally in your content',
          'LocalBusiness schema markup with your name, address, phone, and service area',
          'Fast page speed - under 3 seconds on mobile',
          'A mobile-friendly design (over 70% of local searches happen on phones)',
          'Consistent NAP information matching your GBP exactly',
        ],
      },
      {
        type: 'h2',
        text: 'Reason 6: The Search Is Outside Your Service Area',
      },
      {
        type: 'p',
        text: 'Google Maps rankings are heavily influenced by proximity - where the searcher is located relative to your business address or service area. If someone is searching from a city you haven\'t listed in your service area, you simply won\'t appear.',
      },
      {
        type: 'p',
        text: 'This is why setting up comprehensive service areas in your Google Business Profile is so important for businesses that cover multiple cities across Northern Virginia.',
      },
      {
        type: 'h2',
        text: 'Reason 7: Your Profile Was Penalized or Suspended',
      },
      {
        type: 'p',
        text: 'Google can suspend profiles that violate their guidelines - keyword stuffing in your business name, fake reviews, mismatched addresses, or multiple profiles for the same location are common causes. If you\'re not showing up at all, check whether your profile is suspended in your Google Business Profile dashboard.',
      },
      {
        type: 'h2',
        text: 'The Bottom Line',
      },
      {
        type: 'p',
        text: 'Google Maps rankings come down to three core factors: relevance (does your business match what the searcher wants?), distance (are you in their area?), and prominence (does Google trust that you\'re a real, active, well-regarded business?). Every fix above improves one or more of these factors.',
      },
      {
        type: 'p',
        text: 'The businesses showing up in the top three map results for any given search have invested in all three. The ones invisible on maps have neglected at least one.',
      },
      {
        type: 'cta',
        text: 'We help Northern Virginia businesses fix their local SEO from the ground up - website, Google Business Profile, and everything in between.',
        label: 'Get a Free Local SEO Audit',
        href: '/booking',
      },
    ],
  },
  {
    slug: 'seo-vs-ads-local-business',
    title: 'SEO vs. Paid Ads: What\'s Better for Local Businesses?',
    description:
      'Breaking down the real difference between SEO and Google Ads for small local businesses in 2025 - including which one is right for your situation.',
    date: '2025-04-01',
    category: 'Strategy',
    readTime: '8 min read',
    content: [
      {
        type: 'p',
        text: 'If you\'re a local business trying to get more customers online, you\'ve almost certainly heard both pitches: "You need to run Google Ads" and "You need to invest in SEO." Both channels can generate real results. But they work very differently, they cost very differently, and they\'re right for very different situations.',
      },
      {
        type: 'p',
        text: 'Here\'s an honest breakdown of both - what they are, how they work, what they cost, and which one makes more sense for your business right now.',
      },
      {
        type: 'h2',
        text: 'What Is SEO?',
      },
      {
        type: 'p',
        text: 'Search Engine Optimization (SEO) is the process of improving your website and online presence so that Google shows you higher in organic (non-paid) search results. For local businesses, this includes optimizing your website, your Google Business Profile, and building signals across the web that tell Google your business is relevant, trusted, and active in your area.',
      },
      {
        type: 'p',
        text: 'SEO is not something you pay Google for. You invest in the work - either your own time or hiring someone like us - and Google rewards that work with rankings.',
      },
      {
        type: 'h2',
        text: 'What Are Paid Ads?',
      },
      {
        type: 'p',
        text: 'Google Ads (formerly AdWords) let you pay to appear at the top of search results for specific keywords. You set a budget, choose your keywords, write your ads, and pay Google each time someone clicks. The moment you stop paying, you disappear from results.',
      },
      {
        type: 'p',
        text: 'For local service businesses, Google Local Services Ads (LSAs) are often a better fit than traditional Google Ads - they show up above everything else, show your reviews, and you only pay when someone calls you directly from the ad.',
      },
      {
        type: 'h2',
        text: 'How They Compare: The Key Differences',
      },
      {
        type: 'h3',
        text: 'Cost',
      },
      {
        type: 'p',
        text: 'SEO has a higher upfront cost in time and money - building a solid SEO foundation takes months. But once you\'re ranking, traffic is essentially free. Paid ads have a lower barrier to entry but an ongoing cost: you pay for every single click, every single day. For competitive service categories in Northern Virginia, Google Ads can run $15–$50+ per click. If your conversion rate is 10%, that\'s $150–$500 per lead.',
      },
      {
        type: 'h3',
        text: 'Speed',
      },
      {
        type: 'p',
        text: 'Paid ads win on speed. You can be at the top of Google tomorrow if you\'re willing to pay. SEO typically takes 3–6 months to show meaningful results, and 12+ months to reach full competitive strength. For a brand-new business that needs customers now, ads may bridge the gap while SEO compounds.',
      },
      {
        type: 'h3',
        text: 'Trust and Click-Through Rate',
      },
      {
        type: 'p',
        text: 'Organic search results are trusted more than ads by most users. Studies consistently show that a significant portion of searchers skip the ads entirely and go straight to organic results. A business ranking organically is seen as more legitimate than one that\'s paying for placement. That said, top-of-page ad placement still captures meaningful traffic - especially for users in a buying mindset.',
      },
      {
        type: 'h3',
        text: 'Longevity',
      },
      {
        type: 'p',
        text: 'SEO compounds over time. A page that earns strong rankings today will often hold those rankings for months or years with minimal additional investment. Ads provide no such equity - the moment your budget runs out, you vanish. Businesses that rely entirely on paid traffic are perpetually dependent on that spend.',
      },
      {
        type: 'h2',
        text: 'When to Choose SEO',
      },
      {
        type: 'ul',
        items: [
          'You\'re building a long-term business and want sustainable, compounding growth',
          'You can afford to wait 3–6 months before seeing major results',
          'Your budget is limited and you need the best return on investment over 12–24 months',
          'You serve a specific geographic area and want to dominate local search results',
          'You want to build brand authority, not just buy attention',
        ],
      },
      {
        type: 'h2',
        text: 'When to Choose Paid Ads',
      },
      {
        type: 'ul',
        items: [
          'You just launched your business and need customers immediately',
          'You\'re in a highly competitive market and SEO will take too long',
          'You want to test a new service or market before committing to long-term SEO',
          'You have a specific promotion or seasonal offer with a short window',
          'Your margins are high enough to absorb the cost per lead',
        ],
      },
      {
        type: 'h2',
        text: 'The Honest Answer: Both',
      },
      {
        type: 'p',
        text: 'For most established local businesses in Northern Virginia, the smartest strategy is to use both - but in a specific order and proportion. Start with SEO as your foundation. Build a strong website, optimize your Google Business Profile, and create content that targets local keywords. Layer in paid ads strategically when you need a volume boost or want to test new markets.',
      },
      {
        type: 'p',
        text: 'The businesses that consistently dominate local search aren\'t choosing between SEO and ads. They\'re using SEO to build an asset that generates free leads over time, and using ads to amplify results when it makes financial sense.',
      },
      {
        type: 'h2',
        text: 'What About Social Media Ads?',
      },
      {
        type: 'p',
        text: 'Facebook and Instagram ads can work for local businesses, but they\'re fundamentally different from Google - you\'re interrupting people who weren\'t searching for you, rather than showing up for people actively looking. For most local service businesses, Google SEO and Google Ads will outperform social media ads on a cost-per-customer basis.',
      },
      {
        type: 'h2',
        text: 'The Bottom Line for Local Businesses',
      },
      {
        type: 'p',
        text: 'SEO is the better long-term investment for almost every local service business. It builds equity, compounds over time, and captures customers at the exact moment they\'re searching for what you offer. Paid ads are a useful accelerant - but they\'re a tap, not a well. Turn them off and the water stops flowing.',
      },
      {
        type: 'p',
        text: 'If you\'re starting from scratch in Northern Virginia, the most impactful thing you can do is build a strong SEO foundation now. Every month you wait is a month your competitors are pulling further ahead in the rankings.',
      },
      {
        type: 'cta',
        text: 'Ready to build your SEO foundation? We help local businesses across Northern Virginia rank on Google with professional websites and local SEO - starting with a free audit.',
        label: 'Book Your Free Audit',
        href: '/booking',
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
