import React from "react";

const SocialFeed = () => {
  return (
    <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24 rounded-md p-6 w-full">
      <div className=" max-w-2xl">
        <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
          Social Feeds
        </h2>
        <p className="mt-4 text-lg tracking-tight">
          Our software is so simple that people can’t help but fall in love with
          it. Simplicity is easy when you just skip tons of mission-critical
          features.
        </p>
      </div>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 gap-4 md:gap-4 mt-10 max-w-full mx-auto py-10 shadow-2xl rounded-lg border-t-8 border-r-0 border-l-0 border-b-0 border-warmgray ">
        {/* <div className="bg-warmgray"></div> */}
      <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fparamounteventsandinteriors%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1623280418066999"
          width="350"
          height="480"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className="border rounded-3xl border-zinc-300 drop-shadow-xl shadow-red-800 p-1 bg-white"
        />
        <iframe
          src="https://www.instagram.com/paramount_eventsandinteriors/embed"
          className="border rounded-3xl border-zinc-300 drop-shadow-xl shadow-red-800 p-1 bg-white"
          width="360"
          height="480"
          frameborder="0"
          scrolling="no"
          allowtransparency="true"
        />
      </div>
    </div>
  );
};

export default SocialFeed;
