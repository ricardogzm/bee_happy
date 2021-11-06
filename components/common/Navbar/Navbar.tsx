import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import beecorto from "@public/Bee.svg";
import pfpic from "@public/profile-pic.webp";
import beecompleto from "@public/Bee_completo.svg";
import { Menu, Transition } from "@headlessui/react";
import { NavbarLink } from "@components/common/Navbar";
import { Fragment, useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars, faBell } from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { name: "Quiénes somos", href: "/about", id: "about" },
  { name: "Campañas", href: "/campaigns", id: "campaings" },
  { name: "Donar", href: "#", id: "donate" },
  { name: "Ingresar", href: "#", id: "signin" },
];

export function Navbar() {
  const [navState, setNavState] = useState({ prevScrollPos: 0, visible: true });
  const prevScroll = useRef(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const visible = prevScroll.current > currentScrollPos;

    setNavState({ prevScrollPos: currentScrollPos, visible });
  };

  useEffect(() => {
    prevScroll.current = navState.prevScrollPos;
  }, [navState.prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={classNames(
        navState.visible ? "top-0" : "-top-20",
        "sticky z-50 bg-white shadow-md transition-top duration-200"
      )}
    >
      <div className="px-6 max-w-full lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Mobile menu button*/}
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <Menu.Button className="flex p-2 text-gray-400 hover:text-gray-600 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-400 rounded-md transition-colors">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="block w-6 h-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faBars}
                        className="block w-6 h-6"
                        aria-hidden="true"
                      />
                    )}
                  </Menu.Button>
                  <Transition
                    enter="transition duration-200 ease-in-out"
                    enterFrom="transform scale-75 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-150 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-75 opacity-0"
                  >
                    <Menu.Items className="absolute -left-8 mt-5 py-1 w-48 bg-white rounded-br-md shadow-lg origin-top-left ring-1 ring-black ring-opacity-5 md:hidden">
                      <div className="pb-3 pt-2 px-2 space-y-1">
                        {navigation.map((item) => (
                          <Menu.Item key={item.id}>
                            <NavbarLink
                              href={item.href}
                              className="block px-3 py-2 text-base font-medium rounded-md"
                            >
                              {item.name}
                            </NavbarLink>
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>

          {/* Navbar links and logo */}
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-between">
            {/* Logo */}
            <Link href="/">
              <a className="flex flex-shrink-0 items-center">
                <div className="relative block w-10 h-8 lg:hidden">
                  <Image
                    layout="fill"
                    src={beecorto}
                    alt="bee happy logo mini"
                    objectFit="contain"
                  />
                </div>

                <div className="relative hidden w-48 h-10 lg:block">
                  <Image
                    layout="fill"
                    src={beecompleto}
                    alt="bee happy full logo"
                    objectFit="contain"
                  />
                </div>
              </a>
            </Link>

            {/* Links */}
            <div className="hidden md:block md:ml-6">
              <div className="flex space-x-5">
                {navigation.map((item) => (
                  <NavbarLink
                    key={item.id}
                    href={item.href}
                    className="flex-none px-3 py-2 text-lg font-semibold tracking-tight rounded-md"
                  >
                    {item.name}
                  </NavbarLink>
                ))}
              </div>
            </div>
          </div>

          {/* Profile and notifications */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
            <button
              type="button"
              className="p-1 text-gray-500 hover:text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              <FontAwesomeIcon
                icon={faBell}
                className="block w-6 h-6"
                aria-hidden="true"
              />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open user menu</span>
                  {/* <img
                    className="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile pic"
                  /> */}
                  <div className="relative w-8 h-8">
                    <Image
                      src={pfpic}
                      className="rounded-full"
                      alt="Profile pic"
                      layout="fill"
                    />
                  </div>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 py-1 w-48 bg-white rounded-md focus:outline-none shadow-lg origin-top-right ring-1 ring-black ring-opacity-5">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-gray-700 text-sm"
                        )}
                      >
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-gray-700 text-sm"
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-gray-700 text-sm"
                        )}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}
