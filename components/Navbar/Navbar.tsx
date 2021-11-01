import Link from "next/link";
import classNames from "classnames";
import { Menu, Transition } from "@headlessui/react";
import { NavbarLink } from "@components/Navbar/NavbarLink";
import { Fragment, useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars, faBell } from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { name: "Quiénes somos", href: "/about", id: "about" },
  { name: "Campañas", href: "/campaigns", id: "campaings" },
  { name: "Donar", href: "#", id: "donate" },
  { name: "Ingresar", href: "#", id: "signin" },
];

// TODO: Hide pages menu on click for mobile
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
        "z-50 bg-white sticky transition-top duration-200 shadow-md"
      )}
    >
      <div className="max-w-full px-8 lg:px-10">
        <div className="relative flex items-center justify-between h-20">
          {/* Mobile menu button*/}
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <Menu.Button className="flex p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-200 focus:text-gray-900 focus:bg-gray-400 transition-colors">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faBars}
                        className="block h-6 w-6"
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
                    <Menu.Items className="md:hidden absolute origin-top-left -left-8 w-48 mt-5 py-1 shadow-lg bg-white ring-1 ring-black ring-opacity-5 rounded-br-md">
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                          <Menu.Item key={item.id}>
                            {({ active }) => (
                              <NavbarLink
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium"
                              >
                                {item.name}
                              </NavbarLink>
                            )}
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
          <div className="flex-1 flex items-center md:items-stretch justify-center md:justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="flex-shrink-0 flex items-center cursor-pointer">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="/Bee.svg"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-10 w-auto"
                  src="/Bee_completo.svg"
                  alt="Workflow"
                />
              </div>
            </Link>

            {/* Links */}
            <div className="hidden md:block md:ml-6">
              <div className="flex space-x-5">
                {navigation.map((item) => (
                  <NavbarLink
                    key={item.id}
                    href={item.href}
                    className="flex-none px-3 py-2 rounded-md text-lg font-semibold tracking-tight"
                  >
                    {item.name}
                  </NavbarLink>
                ))}
              </div>
            </div>
          </div>

          {/* Profile and notifications */}
          <div className="flex items-center absolute inset-y-0 right-0 pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
            <button
              type="button"
              className="p-1 rounded-full text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">View notifications</span>
              <FontAwesomeIcon
                icon={faBell}
                className="block h-6 w-6"
                aria-hidden="true"
              />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="ml-3 relative">
              <div>
                <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
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
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
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
                          "block px-4 py-2 text-sm text-gray-700"
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
                          "block px-4 py-2 text-sm text-gray-700"
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
