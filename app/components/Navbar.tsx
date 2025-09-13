"use client";

import Image from "next/image";
import React, { useState } from "react";
import ProfileMenu from "./ProfileMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BiSupport } from "react-icons/bi";
import { TbBellFilled } from "react-icons/tb";
import { HiMenu, HiX } from "react-icons/hi";
import { ModeToggle } from "./ModeToggle";
import {
  AssetIcon,
  Edit,
  Enhancer,
  Home,
  ImageIcon,
  KreaLogo,
  Realtime,
  VideoIcon,
} from "./icons";
import { NavbarLink } from "../type";

const links: NavbarLink[] = [
  {
    label: "Home",
    path: "/",
    icon: (isActive?: boolean) => <Home isActive={isActive ?? false} />,
  },
  {
    label: "Image",
    path: "/image",
    icon: (isActive?: boolean) => <ImageIcon isActive={isActive ?? false} />,
  },
  {
    label: "Video",
    path: "/video",
    icon: (isActive?: boolean) => <VideoIcon isActive={isActive ?? false} />,
  },
  {
    label: "Enhancer",
    path: "/enhancer",
    icon: (isActive?: boolean) => <Enhancer isActive={isActive ?? false} />,
  },
  {
    label: "Realtime",
    path: "/realtime",
    icon: (isActive?: boolean) => <Realtime isActive={isActive ?? false} />,
  },
  {
    label: "Edit",
    path: "/edit",
    icon: (isActive?: boolean) => <Edit isActive={isActive ?? false} />,
  },
  {
    label: "Assets",
    path: "/assets",
    icon: (isActive?: boolean) => <AssetIcon isActive={isActive ?? false} />,
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background/70 backdrop-blur-md">
        {/* Logo + Profile (Mobile & Desktop) */}
        <div className="flex items-center gap-4">
          <div className={cn("size-6", isMobileMenuOpen ? "hidden" : "")}>
            <KreaLogo />
          </div>
          <div className="hidden md:block">
            <ProfileMenu />
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-2 bg-primary-grey rounded-2xl p-2">
          {links.map((link, idx) => {
            const active = pathname === link.path;
            return (
              <div key={idx} className="relative group">
                <Link href={link.path}>
                  <div
                    className={cn(
                      "flex items-center justify-center rounded-xl transition-colors px-3 py-2",
                      active ? "bg-white" : "hover:bg-secondary-grey"
                    )}
                  >
                    <span className="size-5">{link.icon(active)}</span>
                  </div>
                </Link>

                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md font-bold px-2 py-1 text-xs text-primary bg-primary-grey opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                  {link.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <Button className="bg-primary-grey h-1 py-4 text-xs hover:bg-secondary-grey2 rounded-md">
            <ImageIcon />
            <span>Gallery</span>
          </Button>
          <Button className="bg-primary-grey hover:bg-secondary-grey2 h-1 py-4 text-xs rounded-md">
            <BiSupport />
            <span>Support</span>
          </Button>
          <Button
            aria-label="Notification"
            className="bg-primary-grey h-1 py-4 hover:bg-secondary-grey2 rounded-md"
          >
            <TbBellFilled />
          </Button>
          <ModeToggle />
          <Button
            aria-label="avatar"
            className="bg-primary-grey p-[4px] h-fit hover:bg-secondary-grey2 rounded-md"
          >
            <Image
              src="/avatar.svg"
              width={20}
              height={20}
              alt="Avatar"
              className="size-6 rounded-full"
            />
          </Button>
        </div>

        {/* Mobile Right Actions */}
        <div className="flex  lg:hidden items-center gap-2">
          <Button
            aria-label="Notification"
            className="bg-primary-grey p-2 hover:bg-secondary-grey2 rounded-md"
          >
            <TbBellFilled className="size-4" />
          </Button>
          <Button
            onClick={toggleMobileMenu}
            aria-label="Menu"
            className="bg-primary-grey p-2 hover:bg-secondary-grey2 rounded-md"
          >
            {isMobileMenuOpen ? (
              <HiX className="size-4" />
            ) : (
              <HiMenu className="size-4" />
            )}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Moved outside header with proper z-index */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0  backdrop-blur-md z-40 lg:hidden"
            onClick={closeMobileMenu}
          />

          {/* Mobile Menu Slide Panel */}
          <div
            className={cn(
              "fixed top-0 right-0 h-screen w-80 bg-background shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden",
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <div className="size-6">
                  <KreaLogo />
                </div>
                <span className="font-semibold">Krea</span>
              </div>
              <Button
                onClick={closeMobileMenu}
                aria-label="Close menu"
                className="bg-primary-grey p-2 hover:bg-secondary-grey2 rounded-md"
              >
                <HiX className="size-4" />
              </Button>
            </div>

            {/* Profile Section (Mobile) */}
            <div className="p-4 border-b">
              <ProfileMenu />
            </div>

            {/* Mobile Navigation Links */}
            <div className="p-4 space-y-2">
              {links.map((link, idx) => {
                const active = pathname === link.path;
                return (
                  <Link
                    key={idx}
                    href={link.path}
                    onClick={closeMobileMenu}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg transition-colors",
                      active
                        ? "bg-primary text-white dark:text-black"
                        : "hover:bg-primary-grey"
                    )}
                  >
                    <span className="size-5">{link.icon()}</span>
                    <span className="font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="p-4 space-y-2 border-t mt-auto">
              <Button className="w-full bg-primary-grey hover:bg-secondary-grey2 rounded-md justify-start gap-2">
                <ImageIcon />
                <span>Gallery</span>
              </Button>
              <Button className="w-full bg-primary-grey hover:bg-secondary-grey2 rounded-md justify-start gap-2">
                <BiSupport />
                <span>Support</span>
              </Button>
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm font-medium">Theme</span>
                <ModeToggle />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
