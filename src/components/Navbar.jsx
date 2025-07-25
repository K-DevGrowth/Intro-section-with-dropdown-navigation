import { useState } from "react";
import Dropdown from "./Dropdown";

const Navbar = ({ active, setActive }) => {
  const [expanded, setExpanded] = useState("");

  const handleClick = (nav) => {
    setExpanded(nav);
  };

  return (
    <>
      <nav className="flex justify-between py-5 px-10">
        <div className="flex gap-x-8 items-center">
          <img src="/logo.svg" alt="" />
          {navigations.map((nav) => (
            <div key={nav.id} className="sm:flex flex-col group hidden">
              <div className="flex" onClick={() => handleClick(nav.text)}>
                <a
                  className="group-hover:text-Gray-950 cursor-pointer"
                  href={nav.href}
                >
                  {nav.text}
                </a>
                {nav.symbol && (
                  <img
                    className="group-hover:brightness-50 w-3 h-2 self-center"
                    src={
                      expanded === nav.text
                        ? "/icon-arrow-up.svg"
                        : "/icon-arrow-down.svg"
                    }
                  />
                )}
              </div>
              <div>
                {expanded === nav.text && nav.id === 0 && (
                  <div className="absolute bg-white rounded-md shadow-gray-400 shadow-xl">
                    <Dropdown dropdownItems={features} />
                  </div>
                )}
                {expanded === nav.text && nav.id === 1 && (
                  <div className="absolute bg-white rounded-md shadow-gray-400 shadow-xl">
                    <Dropdown dropdownItems={company} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="sm:flex hidden gap-x-8 *:hover:text-Gray-950">
          <button type="button" className="cursor-pointer">
            Login
          </button>
          <button
            type="button"
            className="cursor-pointer border-[1.5px] rounded-xl px-4 py-1"
          >
            Register
          </button>
        </div>
        <img
          className="w-8 brightness-0 cursor-pointer block sm:hidden"
          src="/menu-button.svg"
          alt="menu button"
          onClick={() => setActive(true)}
        />
      </nav>
      {active && (
        <div className="absolute block sm:hidden right-0 top-0 py-5 px-6 cursor-pointer bg-white p-4 w-[60%] min-h-dvh">
          <img
            className="float-right"
            onClick={() => {
              setActive(false);
            }}
            src="/icon-close-menu.svg"
            alt="menu close button"
          />
          <div className="mt-10 flex flex-col">
            {navigations.map((nav) => (
              <div key={nav.text} className="flex flex-col group">
                <div className="flex" onClick={() => handleClick(nav.text)}>
                  <a
                    className="group-hover:text-Gray-950 my-2 cursor-pointer"
                    href={nav.href}
                  >
                    {nav.text}
                  </a>
                  {nav.symbol ? (
                    <img
                      className="group-hover:brightness-50 w-3 h-2 self-center"
                      src={
                        expanded === nav.text
                          ? "/icon-arrow-up.svg"
                          : "/icon-arrow-down.svg"
                      }
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  {expanded === nav.text && nav.id === 0 && (
                    <div>
                      <Dropdown dropdownItems={features} />
                    </div>
                  )}
                  {expanded === nav.text && nav.id === 1 && (
                    <div>
                      <Dropdown dropdownItems={company} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col *:hover:text-Gray-950">
            <button type="button" className="cursor-pointer my-2">
              Login
            </button>
            <button
              type="button"
              className="cursor-pointer border-[1.5px] rounded-xl px-4 py-1 my-2"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

const navigations = [
  {
    id: 0,
    text: "Features",
    symbol: true,
    href: "#",
  },
  {
    id: 1,
    text: "Company",
    symbol: true,
    href: "#",
  },
  {
    id: 2,
    text: "Careers",
    symbol: false,
    href: "#",
  },
  {
    id: 3,
    text: "About",
    symbol: false,
    href: "#",
  },
];
const features = [
  {
    image: "/icon-todo.svg",
    text: "Todo List",
  },
  {
    image: "/icon-calendar.svg",
    text: "Calendar",
  },
  {
    image: "/icon-reminders.svg",
    text: "Reminders",
  },
  {
    image: "/icon-planning.svg",
    text: "Planning",
  },
];
const company = [
  { text: "History", image: "" },
  { text: "Our Team", image: "" },
  { text: "Blog", image: "" },
];
