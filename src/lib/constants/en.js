import salesforce_logo from '../../assets/icons/Salesforce/Salesforce_idN3OdcTG__1.png';
import airtable_logo from '../../assets/icons/Airtable/Airtable_idbbncOsuL_1.png';
import amplitude_logo from '../../assets/icons/Amplitude/Amplitude_ida8NYsPJK_1.png';
import databricks_logo from '../../assets/icons/Databricks/Databricks_idF4fnHpaJ_1.png';
import figma_logo from '../../assets/icons/Figma/Figma_Symbol_1.png';
import hubspot_logo from '../../assets/icons/HubSpot/HubSpot_Symbol_3.png';
import intercom_logo from '../../assets/icons/Intercom/Intercom_idJtqMxXFx_1.png';
import linear_logo from '../../assets/icons/Linear/Linear_Symbol_4.png';
import looker_logo from '../../assets/icons/Looker/Looker_idKkHKXysy_1.png';
import mixpanel_logo from '../../assets/icons/Mixpanel/Mixpanel_Symbol_1.png';
import notion_logo from '../../assets/icons/Notion/Notion_Symbol_4.png';
import pipedrive_logo from '../../assets/icons/Pipedrive/Pipedrive_id-7ejZnwv_1.png';
import segment_logo from '../../assets/icons/Segment/Segment_Symbol_7.png';
import shopify_logo from '../../assets/icons/Shopify-com/Shopify-com_Symbol_4.png';
import slack_logo from '../../assets/icons/Slack/Slack_Symbol_2.png';
import snowflake_logo from '../../assets/icons/Snowflake/Snowflake_idCkdSg0B6_1.png';
import stripe_logo from '../../assets/icons/Stripe/Stripe_Icon_3.jpeg';
import tableau_logo from '../../assets/icons/Tableau/Tableau_idW4GZaB-5_1.png';
import twilio_logo from '../../assets/icons/Twilio/Twilio_idseuPD28S_1.png';
import zapier_logo from '../../assets/icons/Zapier/idgA2tQJF0_1782231759824.jpeg';


// Hero Section
const HERO_CONTENT = {
  meta: "B2B operating infrastructure / 2026 / 정밀한 시스템",
  title: ["Scale", "Without", "Drag"],
  cta_text: "Northstar turns fragmented growth operations into one precise revenue system: tighter workflows, cleaner \ndata, faster decisions.",
  button_text: ["Simlutate Scale", "View Method"]
}

// About Section
const ABOUT_CONTENT = {
  founder_description: "Former operating partner and systems architect for B2B scale-ups across SEA and the US.",
  about_title: `Built by operators who prefer <span className="text-signal">systems</span> over spectacle.`,
  about_description: ["Northstar was founded to help ambitious B2B companies cross the messy middle: the stage where dashboards \n multiply, leadership rhythm breaks, and every team invents its own version of truth.", "Our collaborators combine revenue operations, analytics engineering, venture operating experience, and \nproduct systems design. The result is a practical operating layer that looks simple because the complexity \nis handled underneath."],
  collaborators_title: "Collaborators",
  collaborators: ["Data Architects / 데이터", "GTM Operators / 실행", "Venture Partners / 투자", "RevOps Leads / 수익"],
  about_stats: [
    ["42", "Scale systems shipped"],
    ["$1.2B", "Pipeline modeled"],
    ["14", "Markets supported"]
  ]
}

// Features Section
const FEATURES_CONTENT = {
  features_meta: "Features / operating clarity / 구조",
  features_title: `A strict system for teams outgrowing <span className="text-signal">improvisation.</span>`,
  features: [
    {
      kicker: "01 / Data / 데이터",
      title: "Clean decision layers",
      body: "Normalize product, CRM, billing, and success data into one operating model with executive-grade visibility."
    },
    {
      kicker: "02 / Workflow / 흐름",
      title: "Revenue motion design",
      body: "Map the handoffs, rules, and automations that remove drag between sales, onboarding, and expansion."
    },
    {
      kicker: "03 / Control / 통제",
      title: "Scale governance",
      body: "Build lightweight rituals and metrics so teams can move faster without burying leadership in noise."
    }
  ]
}

// Integrations Section
const INTEGRATIONS_CONTENT = {
  top_integrations: [
    { name: 'Salesforce', color: 'bg-blue-500', letter: 'S', image: salesforce_logo },
    { name: 'Stripe', color: 'bg-violet-500', letter: 'S', image: stripe_logo },
    { name: 'HubSpot', color: 'bg-orange-500', letter: 'H', image: hubspot_logo },
    { name: 'Slack', color: 'bg-emerald-500', letter: 'S', image: slack_logo },
    { name: 'Pipedrive', color: 'bg-green-500', letter: 'P', image: pipedrive_logo },
    { name: 'Segment', color: 'bg-sky-500', letter: 'S', image: segment_logo },
    { name: 'Notion', color: 'bg-neutral-800', letter: 'N', image: notion_logo },
    { name: 'Mixpanel', color: 'bg-purple-500', letter: 'M', image: mixpanel_logo },
    { name: 'Linear', color: 'bg-indigo-500', letter: 'L', image: linear_logo },
    { name: 'Shopify', color: 'bg-green-600', letter: 'S', image: shopify_logo },
    { name: 'Zapier', color: 'bg-orange-400', letter: 'Z', image: zapier_logo },
    { name: 'Figma', color: 'bg-pink-500', letter: 'F', image: figma_logo },
    { name: 'Tableau', color: 'bg-blue-700', letter: 'T', image: tableau_logo },
  ],
  bottom_integrations: [
    { name: 'Intercom', color: 'bg-blue-600', letter: 'I', image: intercom_logo },
    { name: 'HubSpot', color: 'bg-orange-500', letter: 'H', image: hubspot_logo },
    { name: 'Pipedrive', color: 'bg-green-500', letter: 'P', image: pipedrive_logo },
    { name: 'Airtable', color: 'bg-blue-400', letter: 'A', image: airtable_logo },
    { name: 'Mixpanel', color: 'bg-purple-500', letter: 'M', image: mixpanel_logo },
    { name: 'Tableau', color: 'bg-blue-700', letter: 'T', image: tableau_logo },
    { name: 'Amplitude', color: 'bg-indigo-600', letter: 'A', image: amplitude_logo },
    { name: 'Looker', color: 'bg-amber-500', letter: 'L', image: looker_logo },
    { name: 'Zapier', color: 'bg-orange-400', letter: 'Z', image: zapier_logo },
    { name: 'Tableau', color: 'bg-blue-700', letter: 'T', image: tableau_logo },
    { name: 'Snowflake', color: 'bg-sky-400', letter: 'S', image: snowflake_logo },
    { name: 'Databricks', color: 'bg-red-500', letter: 'D', image: databricks_logo },
    { name: 'Twilio', color: 'bg-red-600', letter: 'T', image: twilio_logo },
  ],
  featured_integrations: [
    {
      name: 'Salesforce',
      category: 'CRM',
      categoryKr: '고객관리',
      description: 'Sync deals, contacts, and pipeline stages in real-time.',
      color: 'bg-blue-500',
      letter: 'S',
    },
    {
      name: 'Stripe',
      category: 'Billing',
      categoryKr: '결제',
      description: 'Pull MRR, churn, and expansion revenue automatically.',
      color: 'bg-violet-500',
      letter: 'S',
    },
    {
      name: 'HubSpot',
      category: 'Marketing',
      categoryKr: '마케팅',
      description: 'Connect attribution data to revenue outcomes.',
      color: 'bg-orange-500',
      letter: 'H',
    },
    {
      name: 'Slack',
      category: 'Communication',
      categoryKr: '커뮤니케이션',
      description: 'Get daily operating signals in your team channel.',
      color: 'bg-emerald-500',
      letter: 'S',
    },
    {
      name: 'Segment',
      category: 'Data',
      categoryKr: '데이터',
      description: 'Ingest product usage events and map to accounts.',
      color: 'bg-sky-500',
      letter: 'S',
    },
    {
      name: 'Notion',
      category: 'Workspace',
      categoryKr: '워크스페이스',
      description: 'Embed live operating dashboards in your docs.',
      color: 'bg-neutral-800',
      letter: 'N',
    },
  ],
  integrations_meta: "Integrations / 통합",
  integrations_title: `Works with the tools \n<br /><span className="text-charcoal/30">you already use.</span>`,
  short_description: "Deep integrations with the most popular B2B software, CRMs, and \noperational tools your team relies on.",
  stats_row_data: [
    { value: '40+', label: 'Native integrations' },
    { value: '<2h', label: 'Setup time' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '2.4M', label: 'Records synced daily' },
  ],
  CTA: {
    title: `Don&apos;t see your stack? \n<br /> <span className="text-signal">We&apos;ll build the connector.</span>`,
    short_description: "Enterprise tier includes custom integration development. We&apos;ve built \nconnectors for 40+ tools and counting.",
    button_text: "Request Integration",
    span_text: "Average build time: 2 weeks"
  }
}

// Simulation Section
const SIMULATION_CONTENT = {
  graph_data: {
    seed: {
      label: 'Seed',
      revenue: 1.8,
      revenueDisplay: '$1.8M',
      cycle: 41,
      retention: 86,
      bars: [34, 42, 49, 57, 64],
      note: 'Replace founder-led reporting with a shared revenue cockpit.',
      stage: 'Early Traction',
      team: '5-15 people',
    },
    growth: {
      label: 'Growth',
      revenue: 8.6,
      revenueDisplay: '$8.6M',
      cycle: 29,
      retention: 91,
      bars: [46, 58, 67, 76, 84],
      note: 'Standardize expansion signals and capacity planning across teams.',
      stage: 'Scaling Phase',
      team: '20-80 people',
    },
    enterprise: {
      label: 'Enterprise',
      revenue: 24,
      revenueDisplay: '$24M',
      cycle: 18,
      retention: 96,
      bars: [62, 70, 79, 86, 94],
      note: 'Operate with controls, auditability, and board-ready forecasting.',
      stage: 'Market Leader',
      team: '100+ people',
    },
  },
  steps: [
    {
      num: '01',
      title: 'Connect',
      titleKr: '연결',
      desc: 'Plug in your CRM, billing, and data sources in minutes.',
      icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
    },
    {
      num: '02',
      title: 'Model',
      titleKr: '모델링',
      desc: 'Northstar maps your operating layer and surfaces gaps.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    },
    {
      num: '03',
      title: 'Scale',
      titleKr: '확장',
      desc: 'Execute with clarity. Every team moves on the same signal.',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    },
  ],
  guide_panel: {
    sub_title: "How it works / 작동 방식",
    title: `Three steps to \n<br /> operating clarity.`,
    short_description: "Northstar compresses the messy middle into a repeatable system.",
    button_text: "Start your simulation →"
  },
  simulator_meta: "Scale simulator / 성장 신호",
  simulator_title: `Model the next \n<br /> operating layer.`,
  short_description: "Select a stage to see how Northstar transforms your operating \nmetrics. Watch the numbers evolve in real-time.",
}

// Pricing Section
const PRICING_CONTENT = {
  plans: [
    {
      id: 'foundation',
      label: 'Foundation',
      labelKr: '기초',
      tagline: 'For teams finding product-market fit.',
      price: '$2,400',
      priceNumeric: 2400,
      period: 'Per month',
      note: 'Billed annually. Monthly option at $2,900.',
      cta: 'Start Foundation',
      popular: false,
      features: [
        'Revenue cockpit (single source of truth)',
        'CRM + billing integration (up to 3)',
        'Monthly operating review',
        'Pipeline quality score',
        'Email support',
        '1 operator seat included',
      ],
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    },
    {
      id: 'growth',
      label: 'Growth',
      labelKr: '성장',
      tagline: 'For scaling teams that need systems.',
      price: '$6,800',
      priceNumeric: 6800,
      period: 'Per month',
      note: 'Most popular for Series A–B companies.',
      cta: 'Start Growth',
      popular: true,
      features: [
        'Everything in Foundation, plus:',
        'Unlimited integrations',
        'Weekly operating reviews',
        'Scale simulator access',
        'GTM + RevOps playbooks',
        'Dedicated operator pod (2)',
        'Slack connect channel',
        'Board-ready forecasting',
      ],
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    },
    {
      id: 'scale',
      label: 'Scale',
      labelKr: '확장',
      tagline: 'For teams crossing the $10M ARR mark.',
      price: '$14,500',
      priceNumeric: 14500,
      period: 'Per month',
      note: 'Built for multi-team coordination.',
      cta: 'Start Scale',
      popular: false,
      features: [
        'Everything in Growth, plus:',
        'Multi-team operating layer',
        'Capacity planning module',
        'Expansion signal detection',
        'Custom KPI dashboards',
        'Dedicated operator pod (4)',
        'Quarterly strategy offsite',
        'Audit trail & compliance',
      ],
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    },
    {
      id: 'enterprise',
      label: 'Enterprise',
      labelKr: '엔터프라이즈',
      tagline: 'For market leaders with complex operations.',
      price: 'Custom',
      priceNumeric: null,
      period: 'Tailored engagement',
      note: 'Board-level partnerships only.',
      cta: 'Contact Sales',
      popular: false,
      features: [
        'Everything in Scale, plus:',
        'Full operating system design',
        'Embedded operator team',
        'Data residency options',
        'SSO & advanced security',
        'Custom SLAs & reporting',
        'Executive business reviews',
        'Early access to beta features',
        'Dedicated success manager',
      ],
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    },
  ],
  faqs: [
    {
      q: 'Do you replace our CRM, BI, or internal tooling?',
      a: 'No. Northstar sits above your existing stack as the operating layer. We integrate with your CRM, billing, and data sources — we don\'t ask you to rip and replace.',
    },
    {
      q: 'How long does a typical engagement take?',
      a: 'Foundation tier: 2 weeks to first operating view. Growth tier: 30-day sprint to full system. Scale & Enterprise: phased rollout over 60–90 days.',
    },
    {
      q: 'Can collaborators or investors join the workstream?',
      a: 'Yes. Growth tier and above include investor-ready dashboards. Enterprise tier supports board portal access with role-based permissions.',
    },
    {
      q: 'What stage of company is Northstar built for?',
      a: 'We work best with B2B teams between early traction and enterprise scale: enough motion to create operational complexity, but still enough leverage to redesign the system.',
    },
  ],
  pricing_meta: "Pricing & Packaging / 가격 및 패키지",
  pricing_title: `Transparent pricing. \n<br /> <span className="text-white/40">No surprises at scale.</span>`,
  short_description: "Choose the operating layer that matches your stage. Start lean, \nscale without friction. Every plan includes a 30-day implementation \nsprint.",
  note: ["Annual billing · Save 20%", "All plans · 30-day sprint included"],
  pricing_card: {
    popular_text: "Most Popular",
    features: "Features"
  },
  bottom_cta: {
    title: "Not sure which tier fits?",
    description: `Book a free 30-minute systems audit. We&apos;ll map your current \noperating layer and recommend the right starting point.`,
    button_text: "Book Free Audit",
  },
  faq_section: {
    sub_title: "Questions / 질문",
    title: "Questions before the first system map."
  }
}

// Steps Section
const STEPS_CONTENT = {
  steps: [
    {
      num: '01',
      title: 'Connect your stack.',
      titleKr: '스택 연결',
      subtitle: 'Plug in your existing tools in minutes.',
      description:
        'Northstar integrates with your CRM, billing, and data sources without rip-and-replace. We read your existing data to build the operating view.',
      features: [
        'Native integrations with 40+ tools',
        'Setup in under 2 hours',
        'No data migration required',
        'Real-time sync across systems',
      ],
      visual: {
        label: 'Connection Layer',
        labelKr: '연결 계층',
        items: [
          { name: 'Salesforce', status: 'Connected', color: 'bg-blue-500' },
          { name: 'Stripe', status: 'Connected', color: 'bg-violet-500' },
          { name: 'HubSpot', status: 'Syncing', color: 'bg-orange-500' },
          { name: 'Slack', status: 'Connected', color: 'bg-emerald-500' },
        ],
      },
    },
    {
      num: '02',
      title: 'Model your operations.',
      titleKr: '운영 모델링',
      subtitle: 'See the system behind the noise.',
      description:
        'Northstar maps your revenue motion, surfaces gaps, and builds a shared operating view. Every team moves on the same signal.',
      features: [
        'Revenue cockpit dashboard',
        'Pipeline quality scoring',
        'Expansion signal detection',
        'Board-ready forecasting',
      ],
      visual: {
        label: 'Operating Model',
        labelKr: '운영 모델',
        metrics: [
          { label: 'ARR', value: '$8.6M', change: '+24%' },
          { label: 'Velocity', value: '4.8x', change: '+12%' },
          { label: 'Retention', value: '91%', change: '+5%' },
        ],
      },
    },
    {
      num: '03',
      title: 'Scale without drag.',
      titleKr: '확장',
      subtitle: 'Execute with clarity at every stage.',
      description:
        'From Series A to IPO, Northstar grows with you. Tighter workflows, cleaner data, faster decisions. The operating layer your next stage already requires.',
      features: [
        'Multi-team coordination',
        'Capacity planning module',
        'Audit trail & compliance',
        'Embedded operator team',
      ],
      visual: {
        label: 'Scale Engine',
        labelKr: '확장 엔진',
        stages: [
          { name: 'Seed', arr: '$1.8M', active: false },
          { name: 'Growth', arr: '$8.6M', active: true },
          { name: 'Scale', arr: '$24M', active: false },
          { name: 'Enterprise', arr: 'Custom', active: false },
        ],
      },
    },
  ],
  steps_meta: "How it works / 작동 방식",
  steps_count: "Steps",
}

// Testimonials Section
const TESTIMONIALS_CONTENT = {
  testimonials: [
    {
      quote:
        "Northstar gave our leadership team a single operating view without forcing every department into a heavy platform migration.",
      name: "Maya Santoso",
      role: "COO, Ledgerbase"
    },
    {
      quote:
        "The work felt closer to architecture than consulting. Every metric, ritual, and workflow had a clear reason to exist.",
      name: "Daniel Cho",
      role: "Partner, Meridian Ventures"
    },
    {
      quote:
        "We reduced decision latency in expansion planning from weeks to days. The system is sharp, minimal, and usable.",
      name: "Leila Hart",
      role: "VP Revenue, AtlasOps"
    }
  ],
  testimonials_meta: "Testimonials / field notes",
  testimonials_title: "Proof from teams operating under pressure.",
}

// QNA Section
const QNA_CONTENT = {
  questions: [
    {
      question: "What stage of company is Northstar built for?",
      answer:
        "We work best with B2B teams between early traction and enterprise scale: enough motion to create operational complexity, but still enough leverage to redesign the system."
    },
    {
      question: "Do you replace our CRM, BI, or internal tooling?",
      answer:
        "No. The work starts by connecting and clarifying what already exists. Replacement only happens when a tool is actively blocking the operating model."
    },
    {
      question: "How long does a typical engagement take?",
      answer:
        "Most first systems are designed and implemented in six to ten weeks, followed by an operating cadence where we refine dashboards, workflows, and decision rituals."
    },
    {
      question: "Can collaborators or investors join the workstream?",
      answer:
        "Yes. We often work with operating partners, analytics engineers, RevOps leads, and executive sponsors so the system survives beyond the project."
    }
  ],
  qna_meta: "QNA / operating fit",
  qna_title: "Questions before the first system map.",
}

// CTA Section
const CTA_CONTENT = {
  cta_meta: "Final call / board-ready operations",
  cta_title: `Build the operating system your next stage already requires.`,
  description: `Start with a <span className="text-amber-400 font-semibold">45-minute</span>{' '} \nsystems audit. We map the friction, identify the fastest leverage, \nand define the first implementation sprint.`,
  button_text: "Book Audit",
  trust_indicators: ["3 slots left", "Q3 2026"]
}

// Footer Section
const FOOTER_CONTENT = {
  navigation_links: [
    { href: '#platform', label: 'Platform' },
    { href: '#about', label: 'About' },
    { href: '#method', label: 'Method' },
    { href: '#simulator', label: 'Scale Simulator' },
    { href: '#qna', label: 'QNA' },
  ],
  footer_description: "Infrastructure strategy, data systems, and operational design for \nB2B teams moving from traction to scale.",
  info_column: "Selective partnerships for venture-backed B2B operators, funds, \nand GTM teams.",
  back_text: "Back to top",
  footer_quotes: "Built with precision · Designed for scale"
}

export {
  HERO_CONTENT,
  ABOUT_CONTENT,
  FEATURES_CONTENT,
  INTEGRATIONS_CONTENT,
  SIMULATION_CONTENT,
  PRICING_CONTENT,
  STEPS_CONTENT,
  TESTIMONIALS_CONTENT,
  QNA_CONTENT,
  CTA_CONTENT,
  FOOTER_CONTENT,
}