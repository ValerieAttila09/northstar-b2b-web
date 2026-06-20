"use client";

import { useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const tiers = {
  seed: {
    label: "Seed",
    revenue: "$1.8M",
    cycle: "41d",
    retention: "86%",
    bars: [34, 42, 49, 57, 64],
    note: "Replace founder-led reporting with a shared revenue cockpit."
  },
  growth: {
    label: "Growth",
    revenue: "$8.6M",
    cycle: "29d",
    retention: "91%",
    bars: [46, 58, 67, 76, 84],
    note: "Standardize expansion signals and capacity planning across teams."
  },
  enterprise: {
    label: "Enterprise",
    revenue: "$24M",
    cycle: "18d",
    retention: "96%",
    bars: [62, 70, 79, 86, 94],
    note: "Operate with controls, auditability, and board-ready forecasting."
  }
};

export default function Simulator() {
  const [active, setActive] = useState("growth");
  const scope = useRef(null);
  const data = useMemo(() => tiers[active], [active]);
  const chartPoints = useMemo(() => {
    return data.bars.map((value, index) => `${index * 25},${100 - value}`).join(" ");
  }, [data.bars]);

  useGSAP(
    () => {
      gsap.fromTo(
        ".metric-card",
        { autoAlpha: 0, y: 18, scale: 0.98 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.05, ease: "power3.out" }
      );

      gsap.fromTo(
        ".chart-bar",
        { scaleY: 0.08 },
        { scaleY: 1, duration: 0.85, stagger: 0.045, ease: "expo.out", transformOrigin: "bottom center" }
      );

      gsap.fromTo(
        ".chart-line",
        { strokeDasharray: 180, strokeDashoffset: 180 },
        { strokeDashoffset: 0, duration: 0.9, ease: "expo.out" }
      );
    },
    { dependencies: [active], scope }
  );

  return (
    <section
      id="simulator"
      ref={scope}
      data-nav-theme="dark"
      className="bg-charcoal px-5 py-24 text-inverse md:px-8 md:py-38"
    >
      <div className="mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="flex flex-col justify-between gap-12 border border-inverse/18 p-5 md:p-8">
          <div>
            <p className="mb-6 font-mono text-micro font-bold uppercase text-inverse/54">Scale simulator / 성장 신호</p>
            <h2 className="font-display text-display-md">Model the next operating layer.</h2>
          </div>
          <div className="grid gap-3">
            {Object.entries(tiers).map(([key, tier]) => (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                className={`min-h-14 border px-4 text-left text-sm font-bold uppercase tracking-[0.14em] transition-colors duration-300 ${
                  active === key
                    ? "border-signal bg-signal text-charcoal"
                    : "border-inverse/20 text-inverse/66 hover:border-signal hover:text-inverse"
                }`}
              >
                {tier.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border border-inverse/18 bg-inverse text-charcoal">
          <div className="grid border-b border-charcoal/12 md:grid-cols-3">
            <Metric label="Forecast ARR" value={data.revenue} />
            <Metric label="Sales Cycle" value={data.cycle} />
            <Metric label="Net Retention" value={data.retention} />
          </div>

          <div className="grid gap-8 p-5 md:grid-cols-[1fr_0.72fr] md:p-8">
            <div className="metric-card min-h-[360px] border border-charcoal/14 p-5">
              <div className="mb-12 flex items-center justify-between">
                <p className="font-mono text-micro font-bold uppercase text-muted">Pipeline quality / 파이프라인</p>
                <p className="font-mono text-micro font-bold uppercase text-charcoal">Live model</p>
              </div>
              <div className="relative h-72 overflow-hidden border border-charcoal/10 bg-bone/70 p-5">
                <div className="absolute inset-0 grid grid-cols-5">
                  {[0, 1, 2, 3, 4].map((line) => (
                    <span key={line} className="border-r border-charcoal/8 last:border-r-0" />
                  ))}
                </div>
                <svg className="pointer-events-none absolute inset-5 h-[calc(100%-2.5rem)] w-[calc(100%-2.5rem)] overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polyline className="chart-line" points={chartPoints} fill="none" stroke="#FFB000" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                  {data.bars.map((value, index) => (
                    <circle key={`${active}-dot-${value}`} cx={index * 25} cy={100 - value} r="1.8" fill="#111111" />
                  ))}
                </svg>
                <div className="relative z-10 flex h-full items-end gap-4">
                  {data.bars.map((height, index) => (
                    <div key={`${active}-${height}-${index}`} className="flex flex-1 flex-col items-center gap-3">
                      <span
                        className="chart-bar block min-h-4 w-full border border-charcoal bg-charcoal shadow-[inset_0_8px_0_#FFB000]"
                        style={{ height: `${height}%` }}
                      />
                      <span className="font-mono text-micro font-bold uppercase text-muted">Q{index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex justify-between font-mono text-micro font-bold uppercase text-muted">
                <span>Signal strength</span>
                <span className="text-charcoal">{data.bars.at(-1)}%</span>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="metric-card border border-charcoal/14 p-5">
                <p className="mb-12 font-mono text-micro font-bold uppercase text-muted">Recommendation / 제안</p>
                <p className="text-2xl leading-tight">{data.note}</p>
              </div>
              <div className="metric-card border border-charcoal/14 bg-charcoal p-5 text-inverse">
                <p className="mb-12 font-mono text-micro font-bold uppercase text-inverse/54">System load</p>
                <div className="h-2 w-full bg-inverse/18">
                  <div className="h-full bg-signal" style={{ width: `${data.bars.at(-1)}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }) {
  return (
    <div className="metric-card border-b border-charcoal/12 p-5 md:border-b-0 md:border-r md:p-8 last:md:border-r-0">
      <p className="mb-12 font-mono text-micro font-bold uppercase text-muted">{label}</p>
      <p className="font-display text-6xl leading-none md:text-7xl">{value}</p>
    </div>
  );
}
