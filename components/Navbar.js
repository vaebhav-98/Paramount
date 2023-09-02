import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = (props) => {

  const navigation = [
    { name: "Our Services", href: "#" , clickHandler : props.goToServices},
    { name: "Gallery", href: "#" , clickHandler : props.goToGalleryRef},
    { name: "Contact Us", href: "#" , clickHandler : props.goToaboutRef},
    { name: "About Us", href: "#" , clickHandler : props.goToaboutRef},
  ];

  return (
    <header className="sticky top-0 z-50 drop-shadow-lg">
      <Popover className="relative py-4 px-[3%] lg:px-[11%] lg:py-4 bg-zinc-800">
        <div className="flex items-center justify-between lg:justify-start">
          <div className="lg:hidden">
            <a href="/" className="relative">
              <Image
                priority={true}
                src="/paramountmodf.webp"
                alt="paramount logo"
                width={160}
                height={40}
              />
            </a>
          </div>
          <div className="lg:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-100 text-orange-800 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-inset">
              <span className="sr-only">Open menu</span>

              <svg
                className={"h-8 w-8 rounded-md border p-1"}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </Popover.Button>
          </div>
          <div className="hidden lg:flex lg:flex-1 sm:items-center lg:justify-between">
            <div className="hidden lg:flex lg:flex-1 lg:items-center justify-between">
              <a href="/" className="flex mr-4">
                <span className="sr-only">Paramount Events</span>
                <div className="relative ">
                  <Image
                    priority={true}
                    src="/paramountmodf.webp"
                    alt="paramount logo"
                    width={160}
                    height={40}
                  />
                </div>
              </a>

              <Popover.Group as="nav" className="flex xl:w-[75%] justify-end">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={"#"}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-white",
                          "rounded-md px-3 py-2 font-medium"
                        )}
                        onClick = {(e)=> {e.preventDefault();item.clickHandler()}}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Group>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="z-10 absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden"
          >
            <div className="max-h-[90vh] overflow-auto divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 ">
                <div className="flex items-center justify-between">
                  <a href="/" className="relative outline-none">
                    <Image
                      priority={true}
                      src="/paramountmodf.webp"
                      alt="paramount logo"
                      width={160}
                      height={40}
                    />
                  </a>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pb-6 ">
                  <div className="grid space-y-6 mt-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-800 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 text-sm font-medium"
                        )}
                        onClick = {(e)=> {e.preventDefault();item.clickHandler()}}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
};

export default Navbar;
