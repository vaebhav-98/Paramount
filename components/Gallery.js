import React from "react";
import Carousel from "./Carousel";

const Gallery = (props) => {
  const galleryImages = [
    {
      id: 1,
      desktopImageURL: "/gallery/one.webp",
      mobileImageURL: "/gallery/one.webp",
    },
    {
      id: 2,
      desktopImageURL: "/gallery/two.webp",
      mobileImageURL: "/gallery/two.webp",
    },
    {
      id: 3,
      desktopImageURL: "/gallery/three.webp",
      mobileImageURL: "/gallery/three.webp",
    },
    {
      id: 4,
      desktopImageURL: "/gallery/four.webp",
      mobileImageURL: "/gallery/four.webp",
    },
    {
      id: 5,
      desktopImageURL: "/gallery/five.webp",
      mobileImageURL: "/gallery/five.webp",
    },
    {
      id: 6,
      desktopImageURL: "/gallery/six.webp",
      mobileImageURL: "/gallery/six.webp",
    },
    {
      id: 7,
      desktopImageURL: "/gallery/seven.webp",
      mobileImageURL: "/gallery/seven.webp",
    },
    {
      id: 8,
      desktopImageURL: "/gallery/eight.webp",
      mobileImageURL: "/gallery/eight.webp",
    },
    {
      id: 9,
      desktopImageURL: "/gallery/nine.webp",
      mobileImageURL: "/gallery/nine.webp",
    },
    {
      id: 10,
      desktopImageURL: "/gallery/ten.webp",
      mobileImageURL: "/gallery/ten.webp",
    },
    {
      id: 11,
      desktopImageURL: "/gallery/eleven.webp",
      mobileImageURL: "/gallery/eleven.webp",
    },
    {
      id: 12,
      desktopImageURL: "/gallery/twelve.webp",
      mobileImageURL: "/gallery/twelve.webp",
    },
    {
      id: 13,
      desktopImageURL: "/gallery/thirteen.webp",
      mobileImageURL: "/gallery/thirteen.webp",
    },
    {
      id: 14,
      desktopImageURL: "/gallery/fourteen.webp",
      mobileImageURL: "/gallery/fourteen.webp",
    },
    {
      id: 15,
      desktopImageURL: "/gallery/fifteen.webp",
      mobileImageURL: "/gallery/fifteen.webp",
    },
    {
      id: 16,
      desktopImageURL: "/gallery/sixteen.webp",
      mobileImageURL: "/gallery/sixteen.webp",
    },
    {
      id: 17,
      desktopImageURL: "/gallery/seventeen.webp",
      mobileImageURL: "/gallery/seventeen.webp",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8" ref={props.ref}>
      <div className="py-20 pt-0 sm:py-32 sm:pt-0 mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-4 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="max-w-lg flex-auto">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Gallery
          </h2>
          {/* <h2 className=" text-gray-500 mt-2"></h2> */}
          <p className="mt-6 text-lg text-zinc-600">
            Step into our captivating event gallery, where a visual symphony of
            cherished moments awaits. Each image is a timeless snapshot of joy,
            laughter, and unforgettable connections that define the essence of
            our extraordinary events. Let the pictures speak a thousand words
            and immerse yourself in the magic that unfolds within each frame.
          </p>
          <p className="mt-6 text-lg text-zinc-600">
            Our gallery features a stunning collection of weddings, corporate
            events, and private parties that we have had the pleasure of
            planning and designing. From elegant ballroom affairs to intimate
            outdoor gatherings, we have done it all and are excited to share our
            work with you.
          </p>
        </div>
        <div className="drop-shadow-lg">
          <Carousel
            isMobile={props.isMobile}
            images={galleryImages}
            imageType={"rounded"}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
