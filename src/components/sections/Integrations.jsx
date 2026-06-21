'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const integrations = [
  {
    id: 1,
    company: 'Salesforce',
    category: 'CRM',
    categoryKr: '고객관리',
    description: 'Sync deals, contacts, and pipeline stages in real-time. Northstar reads your Salesforce data to build the operating view.',
    status: 'Native',
    color: 'bg-blue-500',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    metrics: ['2.4M records synced', 'Real-time', '99.9% uptime'],
  },
  {
    id: 2,
    company: 'Stripe',
    category: 'Billing',
    categoryKr: '결제',
    description: 'Pull MRR, churn, and expansion revenue automatically. Northstar models your revenue trajectory from Stripe events.',
    status: 'Native',
    color: 'bg-violet-500',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    metrics: ['$847M processed', 'Daily sync', 'Auto-categorize'],
  },
  {
    id: 3,
    company: 'HubSpot',
    category: 'Marketing + CRM',
    categoryKr: '마케팅',
    description: 'Connect attribution data to revenue outcomes. See which campaigns actually drive pipeline, not just clicks.',
    status: 'Native',
    color: 'bg-orange-500',
    icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 16a6 6 0 110-12 6 6 0 010 12z',
    metrics: ['Campaign ROI', 'Lead scoring', 'Funnel mapping'],
  },
  {
    id: 4,
    company: 'Slack',
    category: 'Communication',
    categoryKr: '커뮤니케이션',
    description: 'Get daily operating signals in your team channel. Alerts on pipeline changes, deal stalls, and metric anomalies.',
    status: 'Native',
    color: 'bg-emerald-500',
    icon: 'M4 12a2 2 0 114 0 2 2 0 01-4 0zm12 0a2 2 0 114 0 2 2 0 01-4 0zM12 4a2 2 0 110 4 2 2 0 010-4zm0 12a2 2 0 110 4 2 2 0 010-4z',
    metrics: ['Daily digests', 'Alert routing', 'Thread context'],
  },
  {
    id: 5,
    company: 'Segment',
    category: 'Data Infrastructure',
    categoryKr: '데이터',
    description: 'Ingest product usage events and map them to accounts. Northstar turns behavioral data into expansion signals.',
    status: 'Native',
    color: 'bg-sky-500',
    icon: 'M4 6h16M4 12h16M4 18h16',
    metrics: ['Event streams', 'Account mapping', 'Usage scoring'],
  },
  {
    id: 6,
    company: 'Notion',
    category: 'Workspace',
    categoryKr: '워크스페이스',
    description: 'Embed live operating dashboards in your Notion docs. Board reviews and team updates stay current automatically.',
    status: 'Native',
    color: 'bg-neutral-800',
    icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
    metrics: ['Embedded views', 'Auto-refresh', 'Permission sync'],
  },
  {
    id: 7,
    company: 'Linear',
    category: 'Engineering',
    categoryKr: '엔지니어링',
    description: 'Connect roadmap velocity to revenue impact. See which features drive retention and expansion.',
    status: 'Native',
    color: 'bg-indigo-500',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    metrics: ['Feature impact', 'Sprint velocity', 'Retention correlation'],
  },
  {
    id: 8,
    company: 'Shopify',
    category: 'Commerce',
    categoryKr: '커머스',
    description: 'For B2B commerce teams. Track order velocity, cohort LTV, and repeat purchase patterns at scale.',
    status: 'Native',
    color: 'bg-green-600',
    icon: 'M3 3h18v18H3zM3 9h18M9 21V9',
    metrics: ['Order velocity', 'Cohort LTV', 'Repeat rate'],
  },
];

const timelineMilestones = [
  { position: 0, label: 'Connect', labelKr: '연결', desc: 'Plug in your stack' },
  { position: 0.25, label: 'Sync', labelKr: '동기화', desc: 'Data flows in' },
  { position: 0.5, label: 'Model', labelKr: '모델링', desc: 'Systems emerge' },
  { position: 0.75, label: 'Operate', labelKr: '운영', desc: 'Teams align' },
  { position: 1, label: 'Scale', labelKr: '확장', desc: 'Growth compounds' },
];

export default function Integrations() {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);
  const panelsWrapperRef = useRef(null);
  const progressRef = useRef(null);
  const stickyInfoRef = useRef(null);
  const counterRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const panels = gsap.utils.toArray('.integration-panel');
        const totalPanels = panels.length;

        // Calculate total scroll distance
        // Each panel is 100vw, we want to scroll through all of them
        const getScrollAmount = () => {
          return -(totalPanels - 1) * window.innerWidth;
        };

        // Horizontal scroll animation
        const horizontalTween = gsap.to(panelsWrapperRef.current, {
          x: getScrollAmount,
          ease: 'none',
          scrollTrigger: {
            trigger: horizontalRef.current,
            pin: true,
            scrub: 1,
            snap: {
              snapTo: 1 / (totalPanels - 1),
              duration: { min: 0.3, max: 0.6 },
              delay: 0.1,
              ease: 'power1.inOut',
            },
            end: () => `+=${Math.abs(getScrollAmount())}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              // Update counter
              if (counterRef.current) {
                const currentPanel = Math.round(self.progress * (totalPanels - 1)) + 1;
                counterRef.current.textContent = `${String(currentPanel).padStart(2, '0')} / ${String(totalPanels).padStart(2, '0')}`;
              }
            },
          },
        });

        // Progress bar
        gsap.to(progressRef.current, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: horizontalRef.current,
            start: 'top top',
            end: () => `+=${Math.abs(getScrollAmount())}`,
            scrub: true,
          },
        });

        // Sticky info panel - stays until 50% then releases
        gsap.to(stickyInfoRef.current, {
          opacity: 0,
          y: -30,
          ease: 'power2.in',
          scrollTrigger: {
            trigger: horizontalRef.current,
            start: 'top top',
            end: '50% center',
            scrub: true,
          },
        });

        // Header reveal
        gsap.fromTo(
          '.integrations-header > *',
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.integrations-header',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Stats reveal
        gsap.fromTo(
          '.stat-item',
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.stats-row',
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Timeline dots pulse
        gsap.to('.timeline-dot', {
          scale: 1.5,
          opacity: 0.5,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: 0.3,
        });

        // Cleanup on refresh
        ScrollTrigger.addEventListener('refresh', () => {
          horizontalTween.vars.x = getScrollAmount();
          horizontalTween.invalidate();
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      id="integrations"
      ref={sectionRef}
      className="relative bg-bone text-charcoal overflow-hidden"
    >
      {/* Header - Light theme */}
      <div className="integrations-header relative px-5 md:px-8 border-b border-charcoal/10">
        <div className="mx-auto max-w-[1600px] border-x border-line py-8 sm:pt-12 md:pt-24 pb-6 sm:pb-8 md:pb-10">
          <div className="border-t border-line grid gap-8 p-5 md:grid-cols-[0.8fr_1.2fr] md:p-8">
            <p className="font-mono text-xs font-bold uppercase text-signal-deep tracking-widest mb-6">
              Integrations / 통합
            </p>
            <div className="">
              <h2 className="text-display-md font-bold leading-[0.95] tracking-tight max-w-4xl">
                Your stack.
                <br />
                <span className="text-signal">One operating layer.</span>
              </h2>

              <p className="mt-6 text-lg text-charcoal/60 max-w-2xl leading-relaxed">
                Northstar connects to the tools your team already uses. No rip-and-replace.
                Just a clean operating view built on top of your existing infrastructure.
              </p>

              {/* Stats row */}
              <div className="stats-row mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
                {[
                  { value: '40+', label: 'Native integrations' },
                  { value: '<2h', label: 'Setup time' },
                  { value: '99.9%', label: 'Uptime SLA' },
                  { value: '2.4M', label: 'Records synced daily' },
                ].map((stat, idx) => (
                  <div key={idx} className="stat-item border-l-2 border-signal pl-4">
                    <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                    <div className="text-xs text-charcoal/50 font-mono uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <div ref={horizontalRef} className="relative">

        {/* Sticky progress bar */}
        <div ref={stickyInfoRef} className="sticky top-[64px] z-30 bg-white/90 backdrop-blur border-b border-charcoal/10 px-5 md:px-8 py-4">
          <div className="mx-auto max-w-[1600px] flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-signal rounded-full animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                Scroll to explore
              </span>
            </div>
            <div className="flex-1 h-px bg-charcoal/10 relative overflow-hidden">
              <div
                ref={progressRef}
                className="absolute top-0 left-0 h-full bg-charcoal origin-left"
                style={{ transform: 'scaleX(0)' }}
              />
            </div>
            <span ref={counterRef} className="font-mono text-xs text-charcoal/50 min-w-[60px] text-right">
              01 / 08
            </span>
          </div>
        </div>

        {/* Timeline indicator - sticky until 50% */}
        <div
          ref={stickyInfoRef}
          className="sticky top-[64px] z-0 bg-signal text-charcoal px-5 md:px-8 py-3 border-b border-charcoal/10"
        >
          <div className="mx-auto max-w-[1600px] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                Integration Journey
              </span>
              <span className="text-xs opacity-60">/ 통합 여정</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {timelineMilestones.map((m, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="timeline-dot w-1.5 h-1.5 bg-charcoal rounded-full" />
                  <span className="font-mono text-[10px] uppercase tracking-wider">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal panels container */}
        <div
          ref={panelsWrapperRef}
          className="flex will-change-transform"
          style={{ width: `${integrations.length * 100}vw` }}
        >
          {integrations.map((integration, idx) => (
            <div
              key={integration.id}
              className="integration-panel flex-shrink-0 flex items-center justify-center px-5 md:px-8"
              style={{ width: '100vw', height: 'calc(100vh - 140px)' }}
            >
              <div className="panel-content mx-auto max-w-[1400px] w-full grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
                {/* Left: Company info */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className={`w-20 h-20 ${integration.color} rounded-2xl flex items-center justify-center text-white shadow-xl`}
                    >
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d={integration.icon} />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal/40">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="px-2 py-0.5 bg-charcoal text-white text-[10px] font-bold uppercase tracking-wider rounded">
                          {integration.status}
                        </span>
                      </div>
                      <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
                        {integration.company}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm font-bold uppercase tracking-wider">
                      {integration.category}
                    </span>
                    <span className="w-1 h-1 bg-charcoal rounded-full" />
                    <span className="text-sm text-charcoal/50 font-mono">
                      {integration.categoryKr}
                    </span>
                  </div>

                  <p className="text-xl md:text-2xl leading-relaxed text-charcoal/70 max-w-lg">
                    {integration.description}
                  </p>

                  {/* Metrics */}
                  <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
                    {integration.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="border-l-2 border-signal pl-3"
                      >
                        <div className="text-[10px] font-mono uppercase tracking-wider text-charcoal/50 mb-1">
                          {mIdx === 0 ? 'Volume' : mIdx === 1 ? 'Frequency' : 'Quality'}
                        </div>
                        <div className="text-sm font-bold">{metric}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Visual card */}
                <div className="relative">
                  <div className="relative bg-neutral-50 border-1.5 border-line p-8 md:p-12 aspect-square max-w-lg mx-auto">
                    {/* Grid background */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                      }}
                    />

                    {/* Connection visualization */}
                    <div className="relative h-full flex flex-col justify-between">
                      {/* Top: Northstar node */}
                      <div className="flex justify-center">
                        <div className="bg-charcoal text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-xl">
                          <div className="w-3 h-3 bg-signal rounded-full animate-pulse" />
                          Northstar
                        </div>
                      </div>

                      {/* Connection lines */}
                      <div className="absolute top-20 left-1/2 w-px h-32 bg-gradient-to-b from-charcoal to-signal" />
                      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-48 h-px bg-charcoal/20" />

                      {/* Middle: Integration node */}
                      <div className="flex justify-center items-center relative">
                        <div className="absolute w-32 h-32 border-2 border-signal rounded-full animate-ping opacity-20" />
                        <div
                          className={`w-24 h-24 ${integration.color} rounded-2xl flex items-center justify-center text-white shadow-2xl relative z-10`}
                        >
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d={integration.icon} />
                          </svg>
                        </div>
                      </div>

                      {/* Bottom: Data flow */}
                      <div className="grid grid-cols-3 gap-2">
                        {['Data', 'Events', 'Signals'].map((label, lIdx) => (
                          <div
                            key={lIdx}
                            className="bg-white border border-charcoal/10 rounded-lg p-3 text-center"
                          >
                            <div className="text-[10px] font-mono uppercase tracking-wider text-charcoal/50 mb-1">
                              {label}
                            </div>
                            <div className="flex items-center justify-center gap-1">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                              <span className="text-xs font-bold">Live</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-signal" />
                    <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-signal" />
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-signal" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-signal" />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 bg-signal text-charcoal px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg rotate-12">
                    API v2.4
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA - Light theme */}
      <div className="bg-white border-y border-charcoal/10 px-5 md:px-8 pb-8">
        <div className="px-5 md:px-8 py-6 sm:py-8 md:py-12 mx-auto max-w-[1600px] grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center border-x border-line">
          <div className=''>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight">
              Don&apos;t see your stack?
              <br />
              <span className="text-signal">We&apos;ll build the connector.</span>
            </h3>
            <p className="mt-6 text-lg text-charcoal/60 max-w-xl leading-relaxed">
              Enterprise tier includes custom integration development. We&apos;ve built
              connectors for 40+ tools and counting.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <button className="group inline-flex items-center gap-3 bg-charcoal text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-signal hover:text-charcoal transition-all duration-300">
              <span>Request Integration</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <span className="text-xs text-charcoal/40 font-mono">
              Average build time: 2 weeks
            </span>
          </div>
        </div>

        {/* Logo cloud */}
        <div className="mx-auto max-w-[1600px] py-12 border-b border-x border-line">
          <p className="text-center font-mono text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-8">
            Trusted by teams using these tools
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['Salesforce', 'Stripe', 'HubSpot', 'Slack', 'Notion', 'Linear', 'Shopify', 'Segment'].map(
              (name) => (
                <span
                  key={name}
                  className="text-lg md:text-xl font-bold text-charcoal/40 hover:text-charcoal transition-colors cursor-default"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}