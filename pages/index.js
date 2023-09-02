import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import About from "../components/About";
import Testimonial from "../components/Testimonial";
import SocialFeed from "../components/SocialFeed";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const servicesRef = useRef(0);
  const galleryRef = useRef(0);
  const contactRef = useRef(0);
  const aboutRef = useRef(0);

  useEffect(() => {
    let isMobile = Boolean(
      navigator.userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setIsMobile(isMobile);
  }, []);

  const bannerImages = [
    {
      id: 1,
      desktopImageURL: "/banners/weddingevents.webp",
      mobileImageURL: "/banners/weddingevents.webp",
    },
    {
      id: 2,
      desktopImageURL: "/banners/engagementevents.webp",
      mobileImageURL: "/banners/engagementevents.webp",
    },
    {
      id: 3,
      desktopImageURL: "/banners/brithdayevents.webp",
      mobileImageURL: "/banners/brithdayevents.webp",
    },
    {
      id: 4,
      desktopImageURL: "/banners/corporateevents.webp",
      mobileImageURL: "/banners/corporateevents.webp",
    },
    {
      id: 5,
      desktopImageURL: "/banners/cocktailevents.webp",
      mobileImageURL: "/banners/cocktailevents.webp",
    },
    
    {
      id: 6,
      desktopImageURL: "/banners/receptionevents.webp",
      mobileImageURL: "/banners/receptionevents.webp",
    },
  ];

  

  const goToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const goToGalleryRef = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const goToContactRef = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const goToaboutRef = () => {
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <main className="">
      <Navbar
        goToServices={goToServices}
        goToGalleryRef={goToGalleryRef}
        goToaboutRef={goToaboutRef}
        goToContactRef={goToContactRef}
      />
      <div className="sm:px-[4%] lg:px-[0%] sm:pt-4 md:pt-6 lg:pt-0 bg-yellow-50">
        <Carousel isMobile={isMobile} images={bannerImages} />
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={galleryRef}>
          <Gallery isMobile={isMobile} />
        </div>
        <Testimonial />
        <SocialFeed/>
        <div ref={aboutRef}>
          <About />
        </div>
        <Footer 
        goToServices={goToServices}
        goToGalleryRef={goToGalleryRef}
        goToaboutRef={goToaboutRef}
        goToContactRef={goToContactRef}
        />
      </div>
    </main>
  );
};

export default HomePage;
