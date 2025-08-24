const Bento = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="mx-auto mb-10 max-w-2xl">
        <h2 className="text-5xl font-manrope font-medium tracking-tight text-center leading-snug">
          Everything you need to dominate <br />
          <span>Social Media</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[250px]">
        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-neutral-200 hover:-translate-y-1 hover:shadow-2xl transition-all duration-200">
          <h3 className="text-2xl font-manrope font-medium">
            Advanced Analytics
          </h3>
          <p className="mt-2 text-muted-foreground">
            Track engagement, reach, and performance with in-depth analytics and
            visual reports. Discover what&#39;s working, optimize campaigns, and
            prove ROI effortlessly.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-neutral-200 hover:-translate-y-1 hover:shadow-2xl transition-all duration-200">
          <h3 className="text-2xl font-manrope font-medium">
            Team Collaboration
          </h3>
          <p className="mt-2 text-muted-foreground">
            Collaborate seamlessly by assigning roles, sharing approvals, and
            keeping your entire workflow organized.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-neutral-200 hover:-translate-y-1 hover:shadow-2xl transition-all duration-200">
          <h3 className="text-2xl font-manrope font-medium">
            Multi-Platform Publishing
          </h3>
          <p className="mt-2 text-muted-foreground">
            Publish content across Facebook, Instagram, Twitter, LinkedIn, and
            more. Save time by managing everything in one place.
          </p>
        </div>

        <div className="col-span-2 row-span-1 bg-gray-50 rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-neutral-200 hover:-translate-y-1 hover:shadow-2xl transition-all duration-200">
          <div>
            <h3 className="text-2xl font-manrope font-medium">
              Smart Scheduling
            </h3>
            <p className="mt-2 text-muted-foreground">
              Schedule posts across multiple platforms with intelligent timing
              suggestions that boost reach and engagement. Take the guesswork
              out of publishing with data-driven recommendations.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-neutral-200 hover:-translate-y-1 hover:shadow-2xl transition-all duration-200">
          <h3 className="text-2xl font-manrope font-medium">
            Social Listening
          </h3>
          <p className="mt-2 text-muted-foreground">
            Monitor mentions, comments, and conversations about your brand in
            real time. Stay connected, respond faster, and never miss an
            opportunity to engage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bento;
