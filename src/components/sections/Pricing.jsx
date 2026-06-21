'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const plans = [
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
];

const faqs = [
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
];

export default function Pricing() {
  const sectionRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // Header reveal
        gsap.fromTo(
          '.pricing-header > *',
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.pricing-header',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Cards stagger entrance
        gsap.fromTo(
          '.pricing-card',
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.pricing-grid',
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Popular card special entrance
        gsap.fromTo(
          '.popular-badge',
          { y: -20, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            delay: 0.6,
            scrollTrigger: {
              trigger: '.pricing-grid',
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Price numbers count-up effect - FIXED
        const priceElements = gsap.utils.toArray('.price-value');
        priceElements.forEach((el, idx) => {
          const targetValue = plans[idx].priceNumeric;
          
          if (targetValue === null) {
            // Handle "Custom" - just fade in
            gsap.fromTo(
              el,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.8 + idx * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: '.pricing-grid',
                  start: 'top 70%',
                  toggleActions: 'play none none none',
                },
              }
            );
          } else {
            // Animate numeric prices
            const counter = { value: 0 };
            
            gsap.to(counter, {
              value: targetValue,
              duration: 1.5,
              ease: 'power2.out',
              delay: 0.8 + idx * 0.15,
              onUpdate: () => {
                const formatted = '$' + Math.round(counter.value).toLocaleString('en-US');
                el.textContent = formatted;
              },
              scrollTrigger: {
                trigger: '.pricing-grid',
                start: 'top 70%',
                toggleActions: 'play none none none',
              },
            });
          }
        });

        // Feature list items stagger
        gsap.fromTo(
          '.feature-item',
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.04,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.pricing-grid',
              start: 'top 65%',
              toggleActions: 'play none none none',
            },
          }
        );

        // FAQ section
        gsap.fromTo(
          '.faq-item',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.faq-section',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Bottom CTA
        gsap.fromTo(
          '.pricing-cta',
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.pricing-cta',
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  const handleCardHover = (id) => {
    setHoveredPlan(id);
    const card = document.getElementById(`card-${id}`);
    if (card) {
      gsap.to(card, {
        y: -8,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  };

  const handleCardLeave = (id) => {
    setHoveredPlan(null);
    const card = document.getElementById(`card-${id}`);
    if (card) {
      gsap.to(card, {
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.6)',
      });
    }
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section
      id="pricing"
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative bg-neutral-950 px-5 py-24 text-white overflow-hidden md:px-8 md:py-32"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(251,191,36,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="pricing-header mb-16 md:mb-20">
          <p className="font-mono text-xs font-bold uppercase text-amber-400 tracking-widest mb-6">
            Pricing & Packaging / 가격 및 패키지
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight max-w-4xl">
            Transparent pricing.
            <br />
            <span className="text-white/40">No surprises at scale.</span>
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-2xl leading-relaxed">
            Choose the operating layer that matches your stage. Start lean,
            scale without friction. Every plan includes a 30-day implementation
            sprint.
          </p>

          {/* Toggle / Note */}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-white/70">
                Annual billing · Save 20%
              </span>
            </div>
            <span className="text-xs text-white/40 font-mono">
              All plans · 30-day sprint included
            </span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="pricing-grid grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              id={`card-${plan.id}`}
              onMouseEnter={() => handleCardHover(plan.id)}
              onMouseLeave={() => handleCardLeave(plan.id)}
              className={`pricing-card group relative flex flex-col border transition-all duration-300 ${
                plan.popular
                  ? 'border-amber-400 bg-gradient-to-b from-amber-400/5 to-transparent'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="popular-badge absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-black px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}

              {/* Card header */}
              <div className="p-6 md:p-8 border-b border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      plan.popular
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
                      <path d={plan.icon} />
                    </svg>
                  </div>
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider">
                    {plan.labelKr}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2">{plan.label}</h3>
                <p className="text-sm text-white/60 leading-relaxed min-h-[40px]">
                  {plan.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="p-6 md:p-8 border-b border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="price-value text-5xl md:text-6xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                </div>
                <p className="mt-1 text-xs text-white/50 font-mono uppercase tracking-wider">
                  {plan.period}
                </p>
                <p className="mt-3 text-xs text-white/40 leading-relaxed">
                  {plan.note}
                </p>
              </div>

              {/* CTA Button */}
              <div className="p-6 md:p-8 pt-4">
                <button
                  className={`w-full py-3.5 font-bold uppercase tracking-wider text-xs transition-all duration-300 ${
                    plan.popular
                      ? 'bg-amber-400 text-black hover:bg-amber-300'
                      : 'bg-white text-black hover:bg-white/90'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>

              {/* Features */}
              <div className="p-6 md:p-8 pt-0 flex-1">
                <p className="font-mono text-[10px] font-bold uppercase text-white/40 tracking-widest mb-4">
                  Features
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="feature-item flex items-start gap-3 text-sm text-white/70 leading-relaxed"
                    >
                      <span
                        className={`flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center ${
                          plan.popular ? 'bg-amber-400/20' : 'bg-white/10'
                        }`}
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={plan.popular ? '#fbbf24' : 'currentColor'}
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
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="pricing-cta mt-16 md:mt-20 border border-white/10 bg-white/[0.02] p-8 md:p-12">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Not sure which tier fits?
              </h3>
              <p className="text-white/60 leading-relaxed">
                Book a free 30-minute systems audit. We&apos;ll map your current
                operating layer and recommend the right starting point.
              </p>
            </div>
            <button className="group inline-flex items-center gap-3 bg-amber-400 text-black px-6 py-4 font-bold uppercase tracking-wider text-xs hover:bg-amber-300 transition-colors whitespace-nowrap">
              <span>Book Free Audit</span>
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
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section mt-24 md:mt-32">
          <div className="grid md:grid-cols-[0.4fr_0.6fr] gap-12 md:gap-16">
            <div>
              <p className="font-mono text-xs font-bold uppercase text-amber-400 tracking-widest mb-4">
                Questions / 질문
              </p>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                Questions before the first system map.
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="faq-item border border-white/10 bg-white/[0.02] overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-white/[0.03] transition-colors"
                  >
                    <span className="text-base md:text-lg font-medium">
                      {faq.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${
                        openFaq === idx ? 'rotate-45 border-amber-400' : ''
                      }`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      openFaq === idx
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-white/60 leading-relaxed border-t border-white/10 pt-4">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}