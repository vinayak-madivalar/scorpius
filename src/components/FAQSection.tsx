"use client";

import { useEffect, useRef, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

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
    question: "Do you offer a free trial?",
    answer: "Yes, every plan includes a 14-day free trial.",
  },
  {
    question: "Which platforms are supported?",
    answer: "Facebook, Instagram, LinkedIn, Twitter (X), and more.",
  },
  {
    question: "Is it suitable for large teams?",
    answer: "Absolutely, roles & permissions make collaboration easy.",
  },
  {
    question: "What makes this tool different from others?",
    answer:
      "We combine intuitive design with powerful automation, making it effortless for individuals and teams to scale their social presence.",
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
  {
    question: "How many accounts can I connect?",
    answer:
      "You can connect multiple accounts across platforms—perfect for managing all your brands from one dashboard.",
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
    <div className="py-14">
      <div className="flex flex-col justify-center items-center gap-2 mb-10">
        <h1 className="text-5xl font-manrope font-medium tracking-tight">
          Frequently Asked{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600">
            Questions
          </span>
        </h1>
        <p className="text-muted-foreground ">
          Everything you need to know about our AI-powered social media
          management tool
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col flex-1 items-start justify-center gap-8 w-full">
          {faqItems.map((item, index) => {
            const isOpen = activeQuestion === index;

            return (
              <div
                key={index}
                className="w-full shadow-md border border-neutral-200 cursor-pointer rounded-xl px-6 py-5"
                onClick={() => {
                  toggleOpen(index);
                }}
              >
                <div className={`flex items-center justify-between `}>
                  <h3 className="font-medium text-lg">{item.question}</h3>
                  <span className="transition duration-500">
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
                    className={`text-muted-foreground max-w-2xl transition-transform duration-300 pt-4 `}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
