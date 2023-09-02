import { MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";
import { GrLocationPin, GrMapLocation } from "react-icons/gr";
const About = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-8  pb-20 sm:pb-32">
      <h3 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl sm:mb-6">
        About us
      </h3>
      <div
        className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <div className="">
        <div className="">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="lg:pl-20">
              <h3 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl hidden sm:block">
                Address
              </h3>
              {/*  <div className="max-w-xs px-2.5 lg:max-w-none">
                 <img
                alt=""
                loading="lazy"
                width="800"
                height="800"
                // decoding="async"
                // data-nimg="1"
                class="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                sizes="(min-width: 1024px) 32rem, 20rem"
                // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=3840&amp;q=75 3840w"
                src="http://localhost:3000/_next/image?url=%2Fbanners%2Freception.webp&w=1920&q=25"
                // style="color: transparent;"
              />
              </div> */}
            </div>
            <div className="lg:order-first lg:row-span-2">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                Embrace Extraordinary Moments: Curating Unforgettable
                Experiences Where Memories Find Magic.
              </h1>
              <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  We are Paramount Events, a company that specializes in
                  creating memorable and personalized events for any occasion.
                  Whether you are looking for a wedding planner, a decorator, a
                  venue, or a party organizer, we have the expertise and the
                  passion to make your dream event come true. We work with you
                  to understand your vision, budget, and preferences, and we
                  take care of all the details so you can enjoy your special
                  day. From elegant and romantic weddings to fun and festive
                  parties, we can handle any type of event with creativity and
                  professionalism. We have a network of trusted vendors and
                  partners who share our commitment to quality and customer
                  satisfaction. No matter how big or small your event is, we
                  will make it unforgettable.
                </p>
                <p>
                  The only thing I loved more than computers as a kid was space.
                  When I was 8, I climbed the 40-foot oak tree at the back of
                  our yard while wearing my older sister’s motorcycle helmet,
                  counted down from three, and jumped — hoping the tree was tall
                  enough that with just a bit of momentum I’d be able to get to
                  orbit.
                </p>
              </div>
            </div>
            <div
              className="absolute inset-x-0 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                style={{
                  clipPath:
                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                }}
              />
            </div>
            <h3 className="text-4xl tracking-tight text-gray-900 block sm:hidden font-bold sm:font-medium">
              Address
            </h3>
            <div className="lg:pl-20">
              <ul role="list">
                <li className="flex">
                  <a
                    className="group flex text-md  text-zinc-800 transition"
                    href="#"
                  >
                    <GrMapLocation className="text-xl text-zinc-800 " />
                    <span className="ml-4">
                      E-148, Transport Nagar, Lucknow, Uttar Pradesh.
                    </span>
                  </a>
                </li>
                <li className="mt-4 flex">
                  <a
                    className="group flex text-md  text-zinc-800 transition "
                    href="#"
                  >
                    {/* <GrLocationPin className="text-xl text-gray-200" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6 flex-none transition  text-zinc-800"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>

                    <span className="ml-4">
                      +91-9029303484
                    </span>
                  </a>
                </li>
                <li className="mt-3 border-t border-zinc-100 pt-3 dark:border-zinc-700/40 flex">
                  <a
                    className="group flex text-sm font-medium text-zinc-800 transition "
                    href="mailto:paramounteventsofficial@gmail.com"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-orange-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                      ></path>
                    </svg>
                    <span className="ml-4">
                      paramounteventsofficial@gmail.com
                    </span>
                  </a>
                </li>
                <div className="aspect-w-16 aspect-h-9 h-96 mt-4 sm:mt-8 border rounded-lg border-orange-400">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28495.539981064587!2d80.85457166830328!3d26.77810283450118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf95130a673ab%3A0xbf18e08c30373382!2sTransport%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1690890496521!5m2!1sen!2sin"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
