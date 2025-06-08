import { useState } from "react";
import { Link } from "react-router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const menu = [
  {
    collection: { title: "Shop", href: "/shop/shop all" },
    subCollections: [
      { title: "Office", href: "/shop/office" },
      { title: "Living Room", href: "/shop/living room" },
      { title: "Furniture", href: "/shop/furniture" },
      { title: "Storage", href: "/shop/storage" },
      { title: "Lighting", href: "/shop/lighting" },
      { title: "Shop all", href: "/shop/shop all" },
    ],
  },
  {
    collection: { title: `Office`, href: "/shop/office" },
    subCollections: [
      { title: "Desk Accessories", href: "/shop/office?categories=100" },
      { title: "Office Chairs", href: "/shop/office?categories=101" },
      { title: "Desks", href: "/shop/office?categories=105" },
      {title:"Office Accessories", href: "/shop/office?categories=109"},
      { title: "View all", href: "/shop/office" },
    ],
  },
  {
    collection: { title: "Living Room", href: "/shop/living room" },
    subCollections: [
      { title: "Lounge Chairs", href: "/shop/living room?categories=200" },
      { title: "Dining Chairs ", href: "/shop/living room?categories=201" },
      { title: "Sofas ", href: "/shop/living room?categories=203" },
      { title: "Side Tables", href: "/shop/living room?categories=204" },
      { title: "Home Office Storage ", href: "/shop/living room?categories=209" },
      { title: "Pillows", href: "/shop/living room?categories=220" },
      { title: "View all", href: "/shop/living room" },
    ],
  },
  {
    collection: { title: "Furniture", href: "/shop/furniture" },
    subCollections: [
      { title: "Outdoor Tables", href: "/shop/furniture?categories=424" },
      { title: "Beds", href: "/shop/furniture?categories=405" },
      { title: "Dining Stools", href: "/shop/furniture?categories=410" },
      { title: "Bookcases + Shelves", href: "/shop/furniture?categories=411" },
      { title: "Benches", href: "/shop/furniture?categories=415" },
      { title: "Desks", href: "/shop/furniture?categories=416" },
      { title: "Ottomans", href: "/shop/furniture?categories=420" },
      { title: "View all", href: "/shop/furniture" },
    ],
  },
  {
    collection: { title: "Storage", href: "/shop/storage" },
    subCollections: [
      { title: "Home Office Storage", href: "/shop/storage?categories=500" },
      { title: "Baskets + Storage Accessories", href: "/shop/storage?categories=501" },
      { title: "Storage", href: "/shop/storage?categories=507" },
      { title: "Cabinets", href: "/shop/storage?categories=503" },
      { title: "View all", href: "/shop/storage" },
    ],
  },
  {
    collection: { title: "Lighting", href: "/shop/lighting" },
    subCollections: [
      { title: "Ceiling Lights + Pendants", href: "/shop/lighting?categories=600" },
      { title: "Table Lamps", href: "/shop/lighting?categories=601" },
      { title: "Floor Lamps", href: "/shop/lighting?categories=602" },
      { title: "Desk Lamps", href: "/shop/lighting?categories=604" },
      { title: "View all", href: "/shop/lighting" },
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
