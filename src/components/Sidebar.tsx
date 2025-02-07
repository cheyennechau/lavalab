"use client";

import React, { useState, useEffect } from "react";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState("materials");

  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.classList.toggle('ml-52', isExpanded);
      mainContent.classList.toggle('ml-12', !isExpanded);
    }
  }, [isExpanded]);

  const navItems = [
    {
      id: "materials",
      label: "Materials",
      activeIcon: "/materials-active.svg",
      inactiveIcon: "/materials-inactive.svg",
    },
    {
      id: "products",
      label: "Products",
      activeIcon: "/products-active.svg",
      inactiveIcon: "/products-inactive.svg",
    },
    {
      id: "fulfillment",
      label: "Fulfillment",
      activeIcon: "/fulfillment-active.svg",
      inactiveIcon: "/fulfillment-inactive.svg",
    },
    {
      id: "integrations",
      label: "Integrations",
      activeIcon: "/integrations-active.svg",
      inactiveIcon: "/integrations-inactive.svg",
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-white flex flex-col border-r transition-all duration-300 overflow-hidden ${
        isExpanded ? "w-52" : "w-12"
      }`}
    >
      {/* Header */}
      <div className="pt-4 pb-2">
      <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center w-full ${
            isExpanded ? "justify-start pl-4" : "justify-center"
          }`}
        >
          <img src="/logo.svg" alt="Tally Logo" className="w-7 h-8" />
          {isExpanded && (
            <span className="text-xl font-semibold text-logo ml-2 font-UncutSans">
              Tally
            </span>
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`flex items-center ${
              isExpanded ? "justify-start gap-3 pl-5" : "justify-center"
            } py-4 text-sm font-medium relative w-full ${
              item.id === "fulfillment"
                ? `after:absolute after:bottom-0 ${
                    isExpanded
                      ? "after:left-3 after:right-3"
                      : "after:left-1.5 after:right-1.5"
                  } after:border-b after:border-gray-200`
                : ""
            } ${activeItem === item.id ? "text-activeText" : "text-inactiveText"}`}
          >
            {activeItem === item.id && (
              <div
                className={`absolute ${
                  isExpanded
                    ? "inset-x-3 inset-y-2"
                    : "inset-x-1.5 inset-y-2.5"
                } bg-active outline outline-1 outline-activeOutline rounded-customBorders shadow`}
              />
            )}
            <div className="flex items-center justify-center relative z-10">
              <img
                src={
                  activeItem === item.id
                    ? item.activeIcon
                    : item.inactiveIcon
                }
                alt={item.label}
                className="w-5 h-5"
              />
            </div>
            {isExpanded && <span className="relative z-10">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="mt-auto pb-5">
        {/* Logout button */}
        <div className={`flex items-center  cursor-pointer ${
          isExpanded ? "justify-start gap-3 pl-4" : "justify-center"
        } pb-2 text-sm text-logout`}>
          <img src="/logout.svg" alt="Logout" className="w-9 h-9" />
          {isExpanded && <span className="text-xs">Logout</span>}
        </div>

        {/* User profile */}
        <div className={`flex items-center ${
          isExpanded ? "justify-start gap-3 pl-4" : "justify-center"
        }`}>
          <img
            src="/mo.svg"
            alt="Profile"
            className="w-9 h-9 rounded-full"
          />
          {isExpanded && (
            <>
              <div className="flex-1">
                <div className="text-xs font-medium font-UncutSansMedium text-gray-900">Don't Ruin It</div>
                <div className="text-[10px] text-gray-500">Pro Crafter</div>
              </div>
              <button className="p-1">
                <img src="/menu.svg" alt="Menu" className="w-9.5 h-9.5 pr-3" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
