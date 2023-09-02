import Image from "next/image";

const Carousel = (props) => {
  return (
    <div id="default-carousel" className="relative" data-carousel="slide">
      <div
        className={
          props.imageType === "rounded"
            ? "relative h-48 md:h-96 overflow-hidden rounded-lg"
            : "relative h-48 md:h-96 overflow-hidden"
        }
      >
        {props.images?.map((item, index) => (
          <a
            key={index}
            target="_blank"
            rel="noreferrer"
            href={item.redirectionDesktopUrl}
          >
            <div
              className="absolute hidden duration-1000 ease-in-out"
              data-carousel-item
            >
              <Image
                priority
                src={
                  !props.isMobile ? item.desktopImageURL : item.mobileImageURL
                }
                fill
                sizes={
                  !props.isMobile
                    ? "(max-width: 1600px) 100vw"
                    : "(max-width: 768px) 100vw"
                }
                alt={"Banner"}
                quality={25}
              />
            </div>
          </a>
        ))}
      </div>
      <div className="absolute z-30 flex space-x-2 -translate-x-1/2 bottom-5 left-1/2">
        {props.images?.map((item, index) => (
          <button
            key={index}
            type="button"
            className="w-2 md:w-2 h-2 md:h-2 rounded-full"
            aria-current="false"
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={`${index}`}
          />
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
