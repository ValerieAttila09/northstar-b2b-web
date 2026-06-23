'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollStack, { ScrollStackItem } from '../common/ScrollStack';

gsap.registerPlugin(ScrollTrigger);

const steps = [
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
];

export default function Steps() {
  const sectionRef = useRef(null);
  const progressLineRef = useRef(null);
  const stepIndicatorsRef = useRef([]);
  const scrollIndicatorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          onUpdate: (self) => {
            if (progressLineRef.current) {
              progressLineRef.current.style.transform = `scaleX(${self.progress})`;
            }

            const currentStep = Math.min(
              Math.floor(self.progress * steps.length) + 1,
              steps.length
            );
            stepIndicatorsRef.current.forEach((indicator, idx) => {
              if (indicator) {
                if (idx < currentStep) {
                  gsap.to(indicator, {
                    backgroundColor: '#fbbf24',
                    color: '#000',
                    duration: 0.3,
                  });
                } else {
                  gsap.to(indicator, {
                    backgroundColor: '#181818',
                    color: 'rgba(255,255,255,0.4)',
                    duration: 0.3,
                  });
                }
              }
            });
          },
        });

        // Scroll indicator bounce
        if (scrollIndicatorRef.current) {
          gsap.to(scrollIndicatorRef.current, {
            y: 8,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      id="steps"
      ref={sectionRef}
      className="relative bg-charcoal border-t border-muted text-inverse overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(251,191,36,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Step Indicators - Fixed positioning */}
      <div
        className={`fixed top-0 left-0 right-0 z-[100] bg-charcoal/95 backdrop-blur-xl border-b border-white/10 px-5 md:px-8 py-6 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
      >
        <div className="mx-auto max-w-[1600px] space-y-5">
          <div className="flex items-center justify-between gap-4 sm:gap-6 md:gap-8">
            <span className="text-nowrap font-mono text-xs font-bold uppercase text-amber-400 tracking-widest">
              How it works / 작동 방식
            </span>
            <div className="w-full relative">
              <div className="h-px bg-ink w-full" />
              <div
                ref={progressLineRef}
                className="absolute top-0 left-0 h-px bg-amber-400 origin-left"
                style={{ transform: 'scaleX(0)' }}
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    ref={(el) => (stepIndicatorsRef.current[idx] = el)}
                    className="w-8 h-8  bg-ink text-inverse/40 flex items-center justify-center text-xs font-bold font-mono transition-all duration-300"
                  >
                    {step.num}
                  </div>
                ))}
              </div>
            </div>
            <span className="text-nowrap font-mono text-xs text-inverse/40">
              {steps.length} steps
            </span>
          </div>
          {/* <div className="relative">
            <div className="h-px bg-white/10 w-full" />
            <div
              ref={progressLineRef}
              className="absolute top-0 left-0 h-px bg-amber-400 origin-left"
              style={{ transform: 'scaleX(0)' }}
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  ref={(el) => (stepIndicatorsRef.current[idx] = el)}
                  className="w-8 h-8  bg-white/10 text-inverse/40 flex items-center justify-center text-xs font-bold font-mono transition-all duration-300"
                >
                  {step.num}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* ScrollStack */}
      <ScrollStack
        useWindowScroll={true}
        itemDistance={32}
        itemScale={0.04}
        itemStackDistance={24}
        stackPosition="15%"
        scaleEndPosition="8%"
        baseScale={0.88}
        blurAmount={2}
      >
        {steps.map((step, idx) => (
          <ScrollStackItem key={idx}>
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-0 min-h-[70vh]">
              {/* Left: Content */}
              <div className="p-8 md:p-12 lg:p-16">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs font-bold text-amber-400 tracking-widest">
                    STEP {step.num}
                  </span>
                  <span className="w-8 h-px bg-amber-400" />
                  <span className="font-mono text-xs text-inverse/40">
                    {step.titleKr}
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-amber-400 font-medium mb-6">
                  {step.subtitle}
                </p>
                <p className="text-base text-inverse/60 leading-relaxed mb-8 max-w-lg">
                  {step.description}
                </p>

                <ul className="space-y-3">
                  {step.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-3 text-sm text-inverse/70"
                    >
                      <span className="flex-shrink-0 w-5 h-5  bg-amber-400/20 flex items-center justify-center mt-0.5">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fbbf24"
                          strokeWidth="3"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Visual */}
              <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 md:p-12 lg:p-16 flex items-center border border-bone/10">
                <div className="w-full">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                    <span className="font-mono text-xs font-bold uppercase text-inverse/60 tracking-wider">
                      {step.visual.label}
                    </span>
                    <span className="text-xs text-inverse/40">
                      / {step.visual.labelKr}
                    </span>
                  </div>

                  {idx === 0 && (
                    <div className="space-y-3">
                      {step.visual.items.map((item, iIdx) => (
                        <div
                          key={iIdx}
                          className="bg-white/5 border border-white/10  p-4 flex items-center justify-between hover:border-amber-400/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 ${item.color}  flex items-center justify-center text-inverse font-bold text-sm`}
                            >
                              {item.name[0]}
                            </div>
                            <span className="text-sm font-medium">
                              {item.name}
                            </span>
                          </div>
                          <span className="text-xs font-mono text-emerald-400">
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {idx === 1 && (
                    <div className="space-y-4">
                      {step.visual.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="bg-white/5 border border-white/10  p-5"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono uppercase text-inverse/40 tracking-wider">
                              {metric.label}
                            </span>
                            <span className="text-xs font-bold text-emerald-400">
                              {metric.change}
                            </span>
                          </div>
                          <div className="text-3xl font-bold">
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="space-y-3">
                      {step.visual.stages.map((stage, sIdx) => (
                        <div
                          key={sIdx}
                          className={`border  p-4 flex items-center justify-between transition-all ${stage.active
                            ? 'border-amber-400 bg-amber-400/10'
                            : 'border-white/10 bg-white/5'
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-3 h-3  ${stage.active ? 'bg-amber-400' : 'bg-white/20'
                                }`}
                            />
                            <span
                              className={`text-sm font-medium ${stage.active ? 'text-amber-400' : 'text-inverse/60'
                                }`}
                            >
                              {stage.name}
                            </span>
                          </div>
                          <span
                            className={`text-sm font-bold ${stage.active ? 'text-amber-400' : 'text-inverse/40'
                              }`}
                          >
                            {stage.arr}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>

      {/* Scroll Indicator */}
      {/* <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
        <div ref={scrollIndicatorRef} className="bg-white/10 backdrop-blur border border-white/20  px-6 py-3 flex items-center gap-3">
          <span className="font-mono text-xs text-inverse/60 uppercase tracking-wider">
            Scroll to explore
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-amber-400"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div> */}
    </section>
  );
}
