"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useLanguage } from "../../context/LanguageContext";
import messages from "../../i18n/messages";

const defaultQuestions = [
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
];

export default function QNA({ content }) {
  const [open, setOpen] = useState(0);
  const answerRefs = useRef([]);
  const { language } = useLanguage();
  const t = messages[language] || messages.en;
  const questions = Array.isArray(t.qna?.questions)
    ? t.qna.questions
    : Array.isArray(content?.questions)
      ? content.questions
      : [];

  const toggle = (index) => {
    const next = open === index ? -1 : index;
    setOpen(next);

    requestAnimationFrame(() => {
      answerRefs.current.forEach((node, nodeIndex) => {
        if (!node) return;
        gsap.to(node, {
          height: nodeIndex === next ? "auto" : 0,
          autoAlpha: nodeIndex === next ? 1 : 0,
          duration: 0.45,
          ease: "power3.inOut"
        });
      });
    });
  };

  return (
    <section id="qna" className="border-b border-line bg-bone px-5 md:px-8">
      <div className="py-24 md:py-38 mx-auto grid max-w-[1600px] border-x border-line lg:grid-cols-[0.72fr_1.28fr]">
        <div className="border-line p-5 md:p-8 lg:border-y lg:border-r">
          <p className="mb-8 text-micro font-bold uppercase text-muted">{content?.qna_meta ?? t.qna.meta}</p>
          <h2 className="font-display text-xl md:text-display-md">{content?.qna_title ?? t.qna.title}</h2>
        </div>
        <div className="border-y border-line">
          {questions.map((item, index) => (
            <div key={item.question} className="border-b border-line last:border-b-0">
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-8 p-5 text-left md:p-8"
                aria-expanded={open === index}
              >
                <span className="text-2xl leading-tight md:text-4xl">{item.question}</span>
                <span className="shrink-0 font-display text-5xl leading-none">{open === index ? "-" : "+"}</span>
              </button>
              <div
                ref={(node) => {
                  answerRefs.current[index] = node;
                }}
                className="overflow-hidden px-5 md:px-8"
                style={{ height: open === index ? "auto" : 0, opacity: open === index ? 1 : 0 }}
              >
                <p className="max-w-3xl pb-8 text-body-xl text-charcoal/70">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
