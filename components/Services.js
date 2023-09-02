import React from "react";
import { MdRestaurantMenu } from "react-icons/md";
import { FcInvite } from "react-icons/fc";
import { GiPartyFlags, GiSaxophone } from "react-icons/gi";
const Services = () => {
  return (
    <div>
      <section
        id="secondary-features"
        aria-label="Features for paramount events "
        className="py-20 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl sm:text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Welcome to Paramount Events and Interiors, your go-to destination
              for exceptional event planning and interior design services. We
              take great pride in offering a wide range of services that cater
              to various needs, ensuring that each client's vision is brought to
              life with utmost precision and creativity. When it comes to events, we understand the significance of
              this joyous occasion in your life. Our talented team of designers
              will work with you closely to create a breathtaking ambiance that
              reflects your unique love story. From floral arrangements to
              lighting design, we leave no stone unturned to ensure that your
              wedding day is an enchanting celebration that you and your guests
              will cherish forever.
            </p>

            <p className="mt-2 text-lg text-gray-600">
              At Paramount Events and Interiors, we are committed to providing
              unparalleled service, creativity, and professionalism. Our goal is
              to bring your vision to life, allowing you to enjoy a stress-free
              and unforgettable experience. Allow us to take care of every
              intricate detail, so you can focus on creating everlasting
              memories.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
          >
            <li className="rounded-2xl border border-orange-400 p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-16 h-16 p-1 rounded-full ring-2 ring-orange-300 text-6xl text-zinc-800"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                />
              </svg>

              <h3 className="mt-6 font-semibold text-orange-900 text-lg">
                Invitations
              </h3>
              <p className="mt-2 text-gray-700">
                Crafting Exquisite Invitations to Set the Stage for Your
                Extraordinary Moments – Your Event, Your Story, Our Expertise.
              </p>
            </li>
            <li className="rounded-2xl border border-orange-400 p-8">
              <MdRestaurantMenu className="h-auto p-1 rounded-full ring-2 ring-orange-300 text-6xl text-zinc-800" />
              <h3 className="mt-6 font-semibold text-orange-900 text-lg">
                Menus
              </h3>
              <p className="mt-2 text-gray-700">
                Elevate Every Occasion with Our Exquisite Culinary Menus: A
                Symphony of Flavors Crafted to Perfectly Complement Your
                Unforgettable Event.
              </p>
            </li>
            <li className="rounded-2xl border border-orange-400 p-8">
              <GiPartyFlags className="h-auto p-1 rounded-full ring-2 ring-orange-300 text-6xl text-zinc-800 " />
              <h3 class="mt-6 font-semibold text-orange-900 text-lg">
                Design & Decor
              </h3>
              <p className="mt-2 text-gray-700">
                Indulge in a sensory feast of captivating design and decor,
                where every element is meticulously crafted to elevate your
                experience to new heights.
              </p>
            </li>
            <li className="rounded-2xl border border-orange-400 p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-16 h-16 p-1 rounded-full ring-2 ring-orange-300 text-6xl text-zinc-800"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>

              <h3 className="mt-6 font-semibold text-orange-900 text-lg">
                Photography or Videography
              </h3>
              <p className="mt-2 text-gray-700">
                Let our expert photographers and videographers capture every
                precious moment, turning them into timeless treasures that will
                forever narrate the story of your special day.
              </p>
            </li>
            <li className="rounded-2xl border border-orange-400 p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-16 h-16 p-1 rounded-full ring-2 ring-orange-300 text-6xl text-zinc-800 drop-shadow-lg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>

              <h3 className="mt-6 font-semibold text-orange-900 text-lg">
                Venue Planning
              </h3>
              <p className="mt-2 text-gray-700">
                Transform your vision into reality with our meticulous venue
                planning services, creating a magical space where unforgettable
                moments come to life.
              </p>
            </li>
            <li className="rounded-2xl border border-orange-400 p-8">
              <GiSaxophone className="h-auto p-1 rounded-full ring-2 ring-orange-300 text-6xl text-zinc-800" />
              <h3 class="mt-6 font-semibold text-orange-900 text-lg">
                Artists for Events
              </h3>
              <p className="mt-2 text-gray-700">
                Be captivated by a lineup of extraordinary artists, whose
                talents will dazzle and enchant, adding an unforgettable flair
                to your event.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Services;
