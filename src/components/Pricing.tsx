import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Pricing = () => {
  return (
    <div className="py-14">
      <div className="flex flex-col justify-center items-center gap-2 mb-14">
        <h1 className="text-5xl font-manrope font-medium tracking-tight text-center">
          Flexible Pricing Plans to Suit <br />{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600">
            Every Business
          </span>
        </h1>
        <p className="text-muted-foreground max-w-2xl text-center">
          Whether your an individual or a large enterprise, we have pricing
          designed for you. Enjoy scalable options that grow with your business.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-10">
          {/* Individual plan */}
          <div className="border border-neutral-200 rounded-2xl p-6 shadow-md flex flex-col">
            <h3 className="text-lg font-manrope font-medium mt-4 mb-6">
              Basic Plan
            </h3>
            <p className="text-5xl font-medium mb-2">
              $29<span className="text-base font-normal">/month</span>
            </p>
            <p className=" text-sm">save 20% when billed annually</p>
            <button className="my-10 w-full bg-neutral-100 rounded-lg py-2 hover:bg-neutral-200">
              Get Started
            </button>
            <p className=" font-medium mb-4">
              What&#39;s{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600">
                included
              </span>
              :
            </p>
            <ul className="space-y-2 flex-1 mb-8">
              <li className="flex items-center gap-2">
                <IoIosCheckmarkCircleOutline size={25} /> Monitor up to 3 social
                media accounts
              </li>
              <li className="flex items-center gap-2">
                <IoIosCheckmarkCircleOutline size={25} /> Real-time analytics
                and basic reporting
              </li>
              <li className="flex items-center gap-2">
                <IoIosCheckmarkCircleOutline size={25} /> Content scheduling
                tools for upto 10 posts per month
              </li>
              <li className="flex items-center gap-2">
                <IoIosCheckmarkCircleOutline size={25} /> Engagement and
                interaction monitoring
              </li>
            </ul>
          </div>

          {/* Professional Plan */}
          <div className="border border-neutral-200 rounded-2xl p-6 shadow-md scale-105 flex flex-col">
            <h3 className="text-lg font-manrope font-medium mt-4 mb-6">
              Professional Plan
            </h3>
            <p className="text-5xl font-medium mb-2">
              $79<span className="text-base font-normal">/month</span>
            </p>
            <p className=" text-sm">save 20% when billed annually</p>
            <button className="my-10 w-full text-white bg-black/80 rounded-lg py-2 hover:bg-black/75">
              Get Started
            </button>
            <p className="font-medium mb-4">
              Everything in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600">
                Basic
              </span>
              , plus:
            </p>
            <ul className="space-y-2 flex-1 mb-8 text-muted-foreground">
              <li className="flex items-center gap-2">
                <IoIosCheckmarkCircleOutline size={25} /> Monitor up to 10
                social media accounts
              </li>
              <li className="flex items-center gap-2">
                <IoIosCheckmarkCircleOutline size={25} /> Real-time analytics
                with detailed reporting
              </li>
              <li className="flex items-center gap-2">
                <IoIosCheckmarkCircleOutline size={25} /> Content scheduling
                tools for up to 50 posts per month
              </li>
              <li className="flex items-center gap-2">
                <IoIosCheckmarkCircleOutline size={25} /> Engagement monitoring
                with sentiment analysis
              </li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-neutral-200 rounded-2xl p-6 shadow-md flex flex-col">
            <h3 className="text-lg font-manrope font-medium mt-4 mb-6">
              Enterprise Plan
            </h3>
            <p className="text-5xl font-medium mb-2">Custom</p>
            <p className=" text-sm">save 20% when billed annually</p>
            <button className="my-10 w-full bg-neutral-100 rounded-lg py-2 hover:bg-neutral-200">
              Get Started
            </button>
            <p className="font-medium mb-4">
              Everything in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600">
                Professional
              </span>
              , plus:
            </p>
            <ul className="space-y-2 flex-1 mb-8">
              <li className="flex items-center gap-2">
                <IoIosCheckmarkCircleOutline size={25} /> Monitor up to 25
                social media accounts
              </li>
              <li className="flex items-center gap-2">
                <IoIosCheckmarkCircleOutline size={25} /> Real-time analytics
                with custom reporting
              </li>
              <li className="flex items-center gap-2">
                <IoIosCheckmarkCircleOutline size={25} /> Unlimited content
                scheduling tools
              </li>
              <li className="flex items-center gap-2">
                <IoIosCheckmarkCircleOutline size={25} /> In-depth engagement
                monitoring and analysis
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
