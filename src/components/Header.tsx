"use client";

import React from "react";
import Container from "./Container";
import LocationIcon from "./icons/LocationIcon";
import SearchIcon from "./icons/SearchIcon";
import FavouriteIcon from "./icons/FavouriteIcon";
import ShoppingBasketIcon from "./icons/ShoppingBasketIcon";
import CallingIcon from "./icons/CallingIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="container mx-auto bg-white shadow-md w-full">
      <Container className="py-[12px] border-b">
        <div className="h-[44px] bg-white w-full flex items-center justify-between">
          <div className="text-[#666666] flex items-center space-x-2">
            <LocationIcon />
            <span className="text-[14px]">
              Store Location: No.2A, Down Town Road No 7, Phum Kork Chambak,
              Phnom Penh
            </span>
          </div>
          <div>
            <nav className="flex space-x-4 items-center">
              <select name="languages" id="languages">
                <option value="en">En</option>
                <option value="kh">Kh</option>
              </select>
              <span>|</span>
              <Link href="/signin" className="text-gray-800">
                Sign In
              </Link>
              <Link href="/signup" className="text-gray-800">
                Sign Up
              </Link>
            </nav>
          </div>
        </div>
      </Container>

      <Container className="py-3">
        <div className="h-[85px] flex justify-between items-center">
          <div className="text-lg font-semibold">
            <Link href="/">
              <img src="logo.svg" alt="logo" className="w-[40px] h-[40px]" />
            </Link>
          </div>

          <div className="flex items-center">
            <div className="relative w-[496px]">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="search"
                id="search-dropdown"
                className="block pl-12 pr-[24px] py-[14px] w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-lg border border-gray-300 focus:outline-none"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 px-[24px] py-[14px] text-sm font-medium h-full text-white bg-[#008001] rounded-r-lg"
              >
                <span>Search</span>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <FavouriteIcon className="w-[34px] h-[34px]" />
            <div className="h-[30px] w-[1px] bg-gray-300" />
            <button
              type="button"
              className="relative inline-flex items-center  text-sm font-medium text-center  rounded-lg focus:outline-none "
            >
              <ShoppingBasketIcon className="w-[34px] h-[34px]" />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center  justify-center w-6 h-6 text-xs font-bold text-white bg-[#008001] border-2 border-white rounded-full -top-2 -end-2">
                2
              </div>
            </button>
            <span className="text-[#4D4D4D] text-[11px]">Shopping cart:</span>
            <span className="font-bold text-[14px]">$0</span>
          </div>
        </div>
      </Container>

      <div className="bg-[#333333] h-[60px] flex items-center justify-center">
        <Container>
          <div className="flex items-center justify-between ">
            <div className="flex items-center space-x-10">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-white ${
                    pathname === href ? "bg-green-500 px-3 py-2 rounded" : ""
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <CallingIcon className="w-[28px] h-[28px] text-white" />
              <a href="#" className="text-white">
                (+855) 088 5654 093
              </a>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
