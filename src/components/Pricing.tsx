import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { RiFlashlightFill } from "react-icons/ri";
import BadgeButton from "./ui/BadgeButton";

const Pricing = () => {
  return (
    <div className="py-14">
      <div className="flex flex-col justify-center items-center gap-5 mb-14">
        <BadgeButton label="Join us Today" icon={RiFlashlightFill} />
        <div className=" flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl md:text-5xl font-manrope font-medium tracking-tight text-center">
            Flexible Pricing Plans to Suit <br />{" "}
            <span className="text-gradient-primary">Every Business</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-sm sm:text-base text-center">
            Whether your an individual or a large enterprise, we have pricing
            designed for you. Enjoy scalable options that grow with your
            business.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 px-6">
          {/* Individual plan */}
          <div className="border-2 max-w-xs md:max-w-fit border-muted rounded-2xl p-6 shadow-md flex flex-col">
            <h3 className="text-lg font-manrope font-medium mt-4 mb-6">
              Basic Plan
            </h3>
            <p className="text-5xl font-medium mb-2">
              $29<span className="text-base font-normal">/month</span>
            </p>
            <p className=" text-sm">save 20% when billed annually</p>
            <button className="my-10 w-full bg-muted shadow-md border border-muted rounded-lg py-2 cursor-pointer hover:bg-muted/80">
              Get Started
            </button>
            <p className=" font-medium mb-4">
              What&#39;s <span className="text-gradient-primary">included</span>
              :
            </p>
            <ul className="space-y-2 flex-1 mb-8 text-muted-foreground">
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
          <div className="border-2 max-w-xs md:max-w-fit border-muted rounded-2xl p-6 shadow-md lg:scale-105 flex flex-col relative z-10">
            <div className="absolute top-0 right-0 w-full h-60 overflow-hidden bg-gradient-to-bl from-orange-300/40 from-5% via-transparent to-transparent rounded-2xl -z-10"></div>
            <h3 className="flex items-center gap-4 text-lg font-manrope font-medium mt-4 mb-6">
              Professional Plan{" "}
              <span className="text-xs rounded-full bg-orange-500 text-white px-3 py-0.5">
                Popular{" "}
              </span>
            </h3>

            <p className="text-5xl font-medium mb-2">
              $79<span className="text-base font-normal">/month</span>
            </p>
            <p className=" text-sm">save 20% when billed annually</p>
            <button className="my-10 cursor-pointer w-full text-white bg-gradient-primary rounded-lg py-2">
              Get Started
            </button>
            <p className="font-medium mb-4">
              Everything in <span className="text-gradient-primary">Basic</span>
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
          <div className="border-2 max-w-xs md:max-w-fit border-muted rounded-2xl p-6 shadow-md flex flex-col">
            <h3 className="text-lg font-manrope font-medium mt-4 mb-6">
              Enterprise Plan
            </h3>
            <p className="text-5xl font-medium mb-2">Custom</p>
            <p className=" text-sm">save 20% when billed annually</p>
            <button className="my-10 w-full bg-muted shadow-md border border-muted rounded-lg py-2 cursor-pointer hover:bg-muted/80">
              Get Started
            </button>
            <p className="font-medium mb-4">
              Everything in{" "}
              <span className="text-gradient-primary">Professional</span>, plus:
            </p>
            <ul className="space-y-2 flex-1 mb-8 text-muted-foreground">
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
