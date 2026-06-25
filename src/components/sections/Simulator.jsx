'use client';

import { useMemo, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../../context/LanguageContext';
import messages from '../../i18n/messages';

gsap.registerPlugin(useGSAP);

const defaultTiers = {
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
};

const defaultSteps = [
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
];

export default function Simulator({ content }) {
  const [active, setActive] = useState('growth');
  const [hoveredBar, setHoveredBar] = useState(null);
  const [showGuide, setShowGuide] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const scope = useRef(null);
  const { language } = useLanguage();
  const t = messages[language] || messages.en;
  const countersRef = useRef({ revenue: 0, cycle: 0, retention: 0 });

  const tiers = useMemo(() => {
    const source = t.simulator?.tiers ?? content?.graph_data ?? defaultTiers;
    return source && typeof source === 'object' ? source : defaultTiers;
  }, [content, t]);
  const steps = useMemo(() => {
    const source = t.simulator?.steps ?? content?.steps ?? defaultSteps;
    return Array.isArray(source) ? source : defaultSteps;
  }, [content, t]);
  // const data = useMemo(() => tiers?.[active] ?? defaultTiers.growth, [active, tiers]);
  const data = useMemo(() => {
    const selected = tiers?.[active] ?? defaultTiers.growth;
    return {
      ...selected,
      // Paksa bars untuk selalu berupa array. Jika bukan, gunakan default.
      bars: Array.isArray(selected?.bars) ? selected.bars : defaultTiers.growth.bars,
      // Paksa nilai numerik untuk selalu berupa angka
      revenue: typeof selected?.revenue === 'number' ? selected.revenue : defaultTiers.growth.revenue,
      cycle: typeof selected?.cycle === 'number' ? selected.cycle : defaultTiers.growth.cycle,
      retention: typeof selected?.retention === 'number' ? selected.retention : defaultTiers.growth.retention,
    };
  }, [active, tiers]);
  const labels = useMemo(() => ({
    revenue: t.simulator.labels.revenue,
    cycle: t.simulator.labels.cycle,
    retention: t.simulator.labels.retention,
    pipeline: t.simulator.labels.pipeline,
    recommendation: t.simulator.labels.recommendation,
    systemLoad: t.simulator.labels.systemLoad,
    previousTier: t.simulator.labels.previousTier,
    signalStrength: t.simulator.labels.signalStrength,
    capacity: t.simulator.labels.capacity,
    liveModel: t.simulator.labels.liveModel,
    closeGuide: t.simulator.labels.closeGuide,
    howItWorks: t.simulator.labels.howItWorks,
  }), [t]);

  const chartPoints = useMemo(() => {
    return Array.isArray(data?.bars)
      ? data.bars.map((value, index) => `${index * 25},${100 - value}`).join(' ')
      : '';
  }, [data]);

  // Counter animation when tier changes
  useEffect(() => {
    const obj = countersRef.current;
    gsap.to(obj, {
      revenue: data.revenue,
      cycle: data.cycle,
      retention: data.retention,
      duration: 1.2,
      ease: 'power3.out',
      onUpdate: () => {
        // Force re-render via state would be heavy, so we use direct DOM
        const revEl = document.getElementById('counter-revenue');
        const cycEl = document.getElementById('counter-cycle');
        const retEl = document.getElementById('counter-retention');
        if (revEl) revEl.textContent = `$${obj.revenue.toFixed(1)}M`;
        if (cycEl) cycEl.textContent = `${Math.round(obj.cycle)}d`;
        if (retEl) retEl.textContent = `${Math.round(obj.retention)}%`;
      },
    });
  }, [active, data.cycle, data.retention, data.revenue]);

  // Auto-rotate steps when guide is open
  useEffect(() => {
    if (!showGuide) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [showGuide, steps.length]);

  useGSAP(
    () => {
      // Metric cards entrance
      gsap.fromTo(
        '.metric-card',
        { autoAlpha: 0, y: 18, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          stagger: 0.05,
          ease: 'power3.out',
        }
      );

      // Chart bars
      gsap.fromTo(
        '.chart-bar',
        { scaleY: 0.08 },
        {
          scaleY: 1,
          duration: 0.85,
          stagger: 0.045,
          ease: 'expo.out',
          transformOrigin: 'bottom center',
        }
      );

      // Chart line draw
      gsap.fromTo(
        '.chart-line',
        { strokeDasharray: 180, strokeDashoffset: 180 },
        { strokeDashoffset: 0, duration: 0.9, ease: 'expo.out' }
      );

      // Dots pop
      gsap.fromTo(
        '.chart-dot',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: 'back.out(2)',
          delay: 0.4,
        }
      );

      // Tier buttons
      gsap.fromTo(
        '.tier-btn',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
        }
      );

      // Pulse indicator
      gsap.to('.pulse-dot', {
        scale: 1.8,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: 'power2.out',
      });
    },
    { dependencies: [active], scope }
  );

  // Guide panel animation
  useGSAP(
    () => {
      if (showGuide) {
        gsap.fromTo(
          '.guide-panel',
          { x: '100%', opacity: 0 },
          { x: '0%', opacity: 1, duration: 0.6, ease: 'power3.out' }
        );
        gsap.fromTo(
          '.guide-step',
          { x: 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.3,
          }
        );
      } else {
        gsap.to('.guide-panel', {
          x: '100%',
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in',
        });
      }
    },
    { dependencies: [showGuide], scope }
  );

  const handleTierClick = (key) => {
    if (key === active) return;
    setActive(key);
  };

  return (
    <section
      id="simulator"
      ref={scope}
      data-nav-theme="dark"
      className="relative bg-neutral-950 px-5 py-24 text-white overflow-hidden md:px-8 md:py-32"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(251,191,36,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full opacity-30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          from { transform: translateY(0px) translateX(0px); }
          to { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>

      <div className="relative mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        {/* LEFT PANEL */}
        <div className="flex flex-col justify-between gap-12 border border-white/10 p-5 md:p-8 bg-neutral-900/40 backdrop-blur-sm">
          <div>
            <p className="mb-6 font-mono text-xs font-bold uppercase text-white/50 tracking-wider">
              {content?.simulator_meta ?? t.simulator.meta}
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
              dangerouslySetInnerHTML={{ __html: content?.simulator_title ?? t.simulator.title }}
            />
            <p className="mt-6 text-sm text-white/60 max-w-md leading-relaxed">
              {content?.short_description ?? t.simulator.shortDescription}
            </p>
          </div>

          {/* Tier buttons */}
          <div className="grid gap-3">
            {Object.entries(tiers).map(([key, tier]) => (
              <button
                key={key}
                type="button"
                onClick={() => handleTierClick(key)}
                className={`tier-btn group min-h-14 border px-4 text-left text-sm font-bold uppercase tracking-[0.14em] transition-all duration-300 relative overflow-hidden ${active === key
                  ? 'border-amber-400 bg-amber-400 text-black'
                  : 'border-white/20 text-white/60 hover:border-amber-400 hover:text-white'
                  }`}
              >
                <span className="relative z-10 flex items-center justify-between">
                  <span>{tier.label}</span>
                  <span className="text-[10px] opacity-60">{tier.stage}</span>
                </span>
                {active === key && (
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300" />
                )}
              </button>
            ))}
          </div>

          {/* How it works button */}
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="group flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-white/60 hover:text-amber-400 transition-colors"
          >
            <span className="w-8 h-8 rounded-full border border-white/20 group-hover:border-amber-400 flex items-center justify-center transition-colors">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`transition-transform ${showGuide ? 'rotate-45' : ''}`}
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
            <span>{showGuide ? labels.closeGuide : (t.simulator.guide?.button ?? labels.howItWorks)}</span>
          </button>
        </div>

        {/* RIGHT PANEL */}
        <div className="border border-white/10 bg-white text-black overflow-hidden">
          {/* Top metrics */}
          <div className="grid border-b border-black/10 md:grid-cols-3">
            <Metric
              label={labels.revenue}
              valueId="counter-revenue"
              defaultValue={data.revenueDisplay}
            />
            <Metric
              label={labels.cycle}
              valueId="counter-cycle"
              defaultValue={data.cycle + 'd'}
            />
            <Metric
              label={labels.retention}
              valueId="counter-retention"
              defaultValue={data.retention + '%'}
              isRetention
              retentionValue={data.retention}
            />
          </div>

          {/* Chart area */}
          <div className="grid gap-6 p-5 md:grid-cols-[1fr_0.72fr] md:p-8">
            <div className="metric-card min-h-[360px] border border-black/10 p-5">
              <div className="mb-8 flex items-center justify-between">
                <p className="font-mono text-[10px] font-bold uppercase text-black/50 tracking-wider">
                  {labels.pipeline}
                </p>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                  </span>
                  <p className="font-mono text-[10px] font-bold uppercase text-black tracking-wider">
                    {labels.liveModel}
                  </p>
                </div>
              </div>

              <div className="relative h-72 overflow-hidden border border-black/10 bg-neutral-50 p-5">
                {/* Grid lines */}
                <div className="absolute inset-0 grid grid-cols-5">
                  {[0, 1, 2, 3, 4].map((line) => (
                    <span
                      key={line}
                      className="border-r border-black/5 last:border-r-0"
                    />
                  ))}
                </div>

                {/* Horizontal grid */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="border-t border-black/5 w-full"
                      style={{ marginTop: i === 0 ? 0 : undefined }}
                    />
                  ))}
                </div>

                {/* SVG line chart */}
                <svg
                  className="pointer-events-none absolute inset-5 h-[calc(100%-2.5rem)] w-[calc(100%-2.5rem)] overflow-visible"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="lineGrad"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#fbbf24" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <polyline
                    className="chart-line"
                    points={chartPoints}
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="2.5"
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {data.bars?.map((value, index) => (
                    <circle
                      key={`${active}-dot-${value}`}
                      className="chart-dot"
                      cx={index * 25}
                      cy={100 - value}
                      r="2"
                      fill="#111"
                      stroke="#fbbf24"
                      strokeWidth="1"
                    />
                  ))}
                </svg>

                {/* Bars */}
                <div className="relative z-10 flex h-full items-end gap-3">
                  {data.bars.map((height, index) => (
                    <div
                      key={`${active}-${height}-${index}`}
                      className="flex flex-1 flex-col items-center gap-2"
                      onMouseEnter={() => setHoveredBar(index)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      {hoveredBar === index && (
                        <div className="absolute -top-8 bg-black text-white text-[10px] font-mono px-2 py-1 rounded whitespace-nowrap z-20">
                          Q{index + 1}: {height}%
                        </div>
                      )}
                      <div
                        className="chart-bar relative block w-full border border-black cursor-pointer transition-all hover:brightness-110"
                        style={{
                          height: `${height}%`,
                          backgroundColor: '#111',
                          boxShadow: 'inset 0 6px 0 #fbbf24',
                        }}
                      />
                      <span className="font-mono text-[10px] font-bold uppercase text-black/50">
                        Q{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-between font-mono text-[10px] font-bold uppercase text-black/50">
                <span>{labels.signalStrength}</span>
                <span className="text-black">{data.bars.at(-1)}%</span>
              </div>
            </div>

            {/* Right column */}
            <div className="grid gap-4">
              <div className="metric-card border border-black/10 p-5">
                <p className="mb-4 font-mono text-[10px] font-bold uppercase text-black/50 tracking-wider">
                  {labels.recommendation}
                </p>
                <p className="text-xl md:text-2xl leading-tight font-medium">
                  {data.note}
                </p>
                <div className="mt-4 pt-4 border-t border-black/10 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2.5"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-black/50">
                      Team size
                    </div>
                    <div className="text-xs font-bold">{data.team}</div>
                  </div>
                </div>
              </div>

              <div className="metric-card border border-black/10 bg-black p-5 text-white">
                <p className="mb-4 font-mono text-[10px] font-bold uppercase text-white/50 tracking-wider">
                  {labels.systemLoad}
                </p>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full transition-all duration-700"
                    style={{ width: `${data.bars.at(-1)}%` }}
                  />
                </div>
                <div className="mt-3 flex justify-between font-mono text-[10px] text-white/50">
                  <span>{labels.capacity}</span>
                  <span className="text-amber-400 font-bold">
                    {data.bars.at(-1)}%
                  </span>
                </div>
              </div>

              {/* Mini comparison */}
              <div className="metric-card border border-black/10 p-4">
                <p className="mb-3 font-mono text-[10px] font-bold uppercase text-black/50 tracking-wider">
                  {labels.previousTier}
                </p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-[9px] text-black/50 font-mono uppercase">
                      ARR
                    </div>
                    <div className="text-sm font-bold text-emerald-600">
                      +
                      {active === 'seed'
                        ? '—'
                        : active === 'growth'
                          ? '4.8x'
                          : '2.8x'}
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px] text-black/50 font-mono uppercase">
                      Cycle
                    </div>
                    <div className="text-sm font-bold text-emerald-600">
                      {active === 'seed'
                        ? '—'
                        : active === 'growth'
                          ? '-12d'
                          : '-11d'}
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px] text-black/50 font-mono uppercase">
                      NRR
                    </div>
                    <div className="text-sm font-bold text-emerald-600">
                      {active === 'seed'
                        ? '—'
                        : active === 'growth'
                          ? '+5%'
                          : '+5%'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GUIDE PANEL */}
      {showGuide && (
        <div className="guide-panel fixed top-0 right-0 h-full w-full md:w-[480px] bg-neutral-950 border-l border-white/10 z-[100] p-8 overflow-y-auto">
          <button
            onClick={() => setShowGuide(false)}
            className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-amber-400 hover:text-amber-400 transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <p className="font-mono text-xs font-bold uppercase text-amber-400 tracking-wider mb-4">
            {content?.guide_panel?.sub_title ?? 'How it works / 작동 방식'}
          </p>
          <h3
            className="text-3xl font-bold mb-2"
            dangerouslySetInnerHTML={{ __html: content?.guide_panel?.title ?? 'Three steps to<br />operating clarity.' }}
          />
          <p className="text-sm text-white/60 mb-8">
            {content?.guide_panel?.short_description ?? 'Northstar compresses the messy middle into a repeatable system.'}
          </p>

          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`guide-step border p-5 transition-all duration-500 ${activeStep === idx
                  ? 'border-amber-400 bg-amber-400/5'
                  : 'border-white/10'
                  }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${activeStep === idx
                      ? 'bg-amber-400 text-black'
                      : 'bg-white/5 text-white/60'
                      }`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d={step.icon} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-mono text-[10px] text-white/40">
                        {step.num}
                      </span>
                      <h4 className="text-lg font-bold">{step.title}</h4>
                      <span className="text-xs text-white/40">
                        / {step.titleKr}
                      </span>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`h-1.5 rounded-full transition-all ${activeStep === idx
                  ? 'w-8 bg-amber-400'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
              />
            ))}
          </div>

          <button className="mt-8 w-full py-4 bg-amber-400 text-black font-bold uppercase tracking-wider text-sm hover:bg-amber-300 transition-colors">
            {content?.guide_panel?.button_text ?? 'Start your simulation →'}
          </button>
        </div>
      )}

      {/* Overlay when guide is open */}
      {showGuide && (
        <div
          onClick={() => setShowGuide(false)}
          className="fixed inset-0 bg-black/60 z-40 md:bg-black/40"
        />
      )}
    </section>
  );
}

function Metric({ label, valueId, defaultValue, isRetention, retentionValue }) {
  const circumference = 2 * Math.PI * 18;
  const offset = circumference - (retentionValue / 100) * circumference;

  return (
    <div className="metric-card border-b border-black/10 p-5 md:border-b-0 md:border-r md:p-8 last:md:border-r-0">
      <p className="mb-4 font-mono text-[10px] font-bold uppercase text-black/50 tracking-wider">
        {label}
      </p>
      <div className="flex items-end gap-3">
        <p
          id={valueId}
          className="font-bold text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight"
        >
          {defaultValue}
        </p>
        {isRetention && (
          <div className="relative w-12 h-12 flex-shrink-0 mb-2">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 40 40">
              <circle
                cx="20"
                cy="20"
                r="18"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
              />
              <circle
                cx="20"
                cy="20"
                r="18"
                fill="none"
                stroke="#fbbf24"
                strokeWidth="3"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold">
              {retentionValue}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
