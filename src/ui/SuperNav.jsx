import { useState } from "react";
import { Link } from "react-router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const menu = [
  {
    collection: { title: "Shop", href: "/" },
    subCollections: [
      { title: "Black Collection", href: "/" },
      { title: "Walnut Collection", href: "/" },
      { title: "White Oak Collection", href: "/" },
      { title: "Maple Collection", href: "/" },
      { title: "Shop all", href: "/" },
    ],
  },
  {
    collection: { title: `Mouse/Desk \n Pads`, href: "/" },
    subCollections: [
      { title: "Desk Pads", href: "/" },
      { title: "Mouse Pads", href: "/" },
      { title: "Coasters", href: "/" },
      { title: "View all", href: "/" },
    ],
  },
  {
    collection: { title: "Stands", href: "/" },
    subCollections: [
      { title: "Desk Shelves", href: "/" },
      { title: "Monitor Stands ", href: "/" },
      { title: "Laptop Stands ", href: "/" },
      { title: "Headphone Stands", href: "/" },
      { title: "iPhone Docks ", href: "/" },
      { title: "iPad Stands", href: "/" },
      { title: "View all", href: "/" },
    ],
  },
  {
    collection: { title: "Tools", href: "/" },
    subCollections: [
      { title: "Wallets", href: "/" },
      { title: "Pens", href: "/" },
      { title: "Notepads", href: "/" },
      { title: "Notebooks", href: "/" },
      { title: "Note-Taking Kit ", href: "/" },
      { title: "Trays", href: "/" },
      { title: "Pen Cups & Planters", href: "/" },
      { title: "View all", href: "/" },
    ],
  },
  {
    collection: { title: "Keyboard", href: "/" },
    subCollections: [
      { title: "Apple Keyboard Tray", href: "/" },
      { title: "MX Keys Keyboard Tray", href: "/" },
      { title: "Apple Trackpad Tray", href: "/" },
      { title: "Wrist Rests", href: "/" },
      { title: "View all", href: "/" },
    ],
  },
  {
    collection: { title: "Furniture", href: "/" },
    subCollections: [
      { title: "Desk", href: "/" },
      { title: "Catch-All", href: "/" },
      { title: "Wall Shelves", href: "/" },
      { title: "Lighting", href: "/" },
      { title: "View all", href: "/" },
    ],
  },
];

function SuperNav({ mobile, hide }) {
  return (
    <div
      className="border-spacing-2 absolute top-19 left-0 z-50 bg-white w-full"
      onMouseLeave={hide}
    >
      {mobile ? <MobileSuperNav /> : <DesktopSuperNav />}
    </div>
  );
}

function DesktopSuperNav() {
  return (
    <div className="border-y-[1px] border-y-slate-300 py-6 px-16 flex justify-around font-serif ">
      {menu.map((col, i) => {
        return (
          <ul key={i} className="font-urbanist font-normal text-nowrap">
            <li className=" w-min mb-5 my-3 hover-underline text-xl lg:text-3xl  text-black font-surveyor text-wrap">
              <Link to={col.collection.href}>{col.collection.title}</Link>
            </li>
            {col.subCollections.map((subcol, i) => (
              <li
                key={i}
                className=" text-zinc-400 text-sm lg:text-base hover:text-zinc-900 hover:scale-110 transition-all"
              >
                <Link to={subcol.href}>{subcol.title}</Link>
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
function MobileSuperNav() {
  const [active, setActive] = useState(0);
  return (
    <div className=" h-screen devide-x-2 devide-solid border-t-[1px]">
      <div className=" w-1/2 h-full float-start border-r-[1px]">
        <ul className="px-4 text-base">
          {menu.map((col, i) => {
            return (
              <li
                key={i}
                onClick={() => setActive(i)}
                className=" flex items-center justify-between w-full mb-5 my-3   text-gray-500 font-surveyor pl-4 first:pl-0 text-wrap first:text-black"
              >
                <Link to={col.collection.href}>{col.collection.title}</Link>
                <span
                  className={`text-xs transition-transform duration-500 ease-out delay-75 ${
                    active == i ? "rotate-180" : "rotate-0"
                  } `}
                >
                  <ArrowBackIosNewIcon
                    fontSize="string"
                    className="text-xs"
                  ></ArrowBackIosNewIcon>
                </span>
              </li>
            );
          })}
          <li className="  my-4 w-full">
            <Link to="/about" className=" text-black font-surveyor text-wrap">
              About
            </Link>
          </li>
          <li className="  my-4 w-full">
            <Link to="/cart" className=" text-black font-surveyor text-wrap">
              Cart
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-1/2 h-full float-end">
        <ul className="p-6">
          {menu[active].subCollections.map((subcol, i) => (
            <li
              key={i}
              className=" text-zinc-400 text-sm py-2 hover:text-zinc-900 hover:scale-110 transition-all"
            >
              <Link to={subcol.href}>{subcol.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SuperNav;
