"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaHamburger } from "react-icons/fa";
import { ModeToggle } from "../components/theme-toggler";
import SocialLinks from "../components/social-links";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 461);
    };
    handleResize()
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("Scrolled?", scrolled);
  }, [scrolled]);

  return (
    <>
      {/* Sticky navbar */}
      <div className={`relative overflow-x-hidden sticky top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-white dark:bg-gray-900 shadow-md" : ""}`}>
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          {/* Logo / Brand */}
          <h1 className="font-bold text-2xl">Franz 😀</h1>

          {/* Desktop nav */}
          {!isMobile && (
            <div className="flex items-center space-x-6">
              <Link href="#about" className="hover:text-blue-500">About</Link>
              <Link href="#works" className="hover:text-blue-500">Work</Link>
              <SocialLinks trigger={<span className="hover:text-blue-500 hover:cursor-pointer">Contact</span>} />
              <ModeToggle className="h-10 w-10" />
            </div>
          )}
          {/* Mobile nav */}
          {isMobile && (
            <div className="flex items-center space-x-2">
              <ModeToggle className="h-10 w-10" />
              <Button
                variant="secondary"
                size="icon"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <FaHamburger />
              </Button>
            </div>
          )}
        </div>
        {/* Mobile dropdown menu */}
        {isMobile && menuOpen && (
          <div className="flex flex-col overflow-x-hidden bg-white dark:bg-gray-900 w-full overflow-x-hidden border-t shadow-md">
            <Link href="#about" className="p-4 hover:bg-gray-100 dark:hover:bg-gray-800 border-t shadow-md">
              About
            </Link>
            <Link href="#works" className="p-4 hover:bg-gray-100 dark:hover:bg-gray-800 border-t shadow-md">
              Work
            </Link>
            <div className="p-4 hover:bg-gray-100 dark:hover:bg-gray-800">
              <SocialLinks trigger={
              <Link href="#">
                Contact
              </Link>
            }
            />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
