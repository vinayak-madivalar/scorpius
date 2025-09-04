"use client";

import { useEffect, useRef, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { RiFlashlightFill } from "react-icons/ri";
import BadgeButton from "./ui/BadgeButton";
import { motion } from "motion/react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel or change plans whenever you need.",
  },
  {
    question: "Which platforms are supported?",
    answer: "Facebook, Instagram, LinkedIn, Twitter (X), and more.",
  },
  {
    question: "What makes this tool different from others?",
    answer:
      "We combine intuitive design with powerful automation, making it effortless for individuals and teams to scale their social presence.",
  },
  {
    question: "Are there limits on the number of accounts I can manage?",
    answer:
      "There are no limits on the number of accounts you can manage. We offer various plans that allow you to add accounts based on your business needs, from individual users to large enterprises.",
  },
  {
    question: "Do you provide analytics & reporting?",
    answer:
      "Yes, detailed performance insights are included to track engagement, growth, and ROI.",
  },
  {
    question: "Can I schedule posts in advance?",
    answer:
      "Absolutely! Plan and schedule your content weeks ahead with our calendar view.",
  },
];

const FAQSection = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);

  const contentRef = useRef<(HTMLDivElement | null)[]>([]);

  const toggleOpen = (index: number) => {
    setAnimatingIndex(index);
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  useEffect(() => {
    if (animatingIndex !== null) {
      const timeout = setTimeout(() => {
        setAnimatingIndex(null);
      }, 400); // match transition duration
      return () => clearTimeout(timeout);
    }
  }, [animatingIndex]);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2, ease: "easeOut" } },
      }}
      className="py-16"
    >
      <div className="flex flex-col justify-center items-center gap-5 mb-10">
        <BadgeButton label="FAQ" icon={RiFlashlightFill} />
        <div className="flex flex-col justify-center items-center gap-2 px-6 md:px-0">
          <h1 className="text-4xl md:text-5xl font-manrope font-medium tracking-tight text-center">
            Frequently Asked{" "}
            <span className="text-gradient-primary">Questions</span>
          </h1>
          <p className="text-muted-foreground text-center">
            Everything you need to know about our AI-powered social media
            management tool
          </p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col flex-1 items-start justify-center gap-8 w-full px-4">
          {faqItems.map((item, index) => {
            const isOpen = activeQuestion === index;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="w-full shadow-md border border-muted cursor-pointer rounded-xl px-6 py-5"
                onClick={() => {
                  toggleOpen(index);
                }}
              >
                <div className={`flex items-center justify-between `}>
                  <h3 className="font-medium text-lg">{item.question}</h3>
                  <span className="transition duration-400">
                    {activeQuestion === index ? (
                      <IoIosArrowUp size={20} />
                    ) : (
                      <IoIosArrowDown size={20} />
                    )}
                  </span>
                </div>
                <div
                  ref={(el) => {
                    contentRef.current[index] = el;
                  }}
                  style={{
                    maxHeight: isOpen
                      ? contentRef.current[index]?.scrollHeight + "px"
                      : "0px",
                    transition:
                      "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className={`text-muted-foreground max-w-2xl transition-transform duration-400 pt-4 `}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
