"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
import {
  Moon,
  Sun,
  ExternalLink,
  Menu,
  X,
  Instagram,
  Twitter,
  Send,
} from "lucide-react";
const PeacefulAnimation = ({ isDarkMode }) => {
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const createParticle = () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.4 + 0.1,
    });
    setParticles(Array.from({ length: 40 }, createParticle));
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => ({
          ...particle,
          x:
            (particle.x + particle.speedX + window.innerWidth) %
            window.innerWidth,
          y:
            (particle.y + particle.speedY + window.innerHeight) %
            window.innerHeight,
        }))
      );
    };
    const intervalId = setInterval(animateParticles, 50);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((particle, index) => (
        <div
          key={index}
          className={`absolute rounded-full ${
            isDarkMode ? "bg-gray-300" : "bg-gray-700"
          }`}
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transition: "left 0.5s, top 0.5s",
          }}
        />
      ))}
    </div>
  );
};
const BlinkingCursor = () => {
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);
  return (
    <span
      className={`${
        showCursor ? "opacity-100" : "opacity-0"
      } transition-opacity duration-100`}
    >
      |
    </span>
  );
};
export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const mainRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const mainElement = mainRef.current;
      if (mainElement) {
        const hue = (scrollPosition / 10) % 360;
        mainElement.style.background = isDarkMode
          ? `linear-gradient(to bottom, hsl(${hue}, 10%, 10%), hsl(${
              (hue + 60) % 360
            }, 10%, 5%))`
          : `linear-gradient(to bottom, hsl(${hue}, 100%, 97%), hsl(${
              (hue + 60) % 360
            }, 100%, 94%))`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDarkMode]);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };
  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div
                className={`relative w-36 h-36 rounded-full overflow-hidden border-4 ${
                  isDarkMode ? "border-white" : "border-black"
                } shadow-lg`}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240910_185915_469-YHPkyJF85irGsTZn28EfcejrbNsZbV.jpg"
                  alt="Alpha logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <h1
              className={`text-4xl tracking-tight font-extrabold ${
                isDarkMode ? "text-white" : "text-black"
              } sm:text-5xl md:text-6xl mb-4`}
            >
              Alpha
              <BlinkingCursor />
            </h1>
            <p
              className={`text-xl font-semibold ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              } mb-3`}
            >
              Empower Your Crypto Journey with Alpha's Wisdom! 🔮
            </p>
            <p
              className={`text-lg ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } max-w-2xl mx-auto mb-8`}
            >
              Alpha: Your Crypto Education Hub! Dive into the world of
              cryptocurrencies with Alpha's treasure trove of educational
              content. From basics to advanced concepts, we've got you covered.
              Join our vibrant community, learn trading strategies, and stay
              ahead in the crypto landscape. Transform into an expert with Alpha
              today!
            </p>
            <hr
              className={`border-t ${
                isDarkMode ? "border-gray-700" : "border-gray-300"
              } my-8`}
            />
            <div
              className={`text-sm ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              } max-w-3xl mx-auto`}
            >
              <h2
                className={`text-2xl font-bold mb-4 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Unlocking the Secrets of Crypto with Alpha: Your Gateway to
                Expertise
              </h2>
              <p className="mb-4">
                Are you eager to explore the dynamic realm of cryptocurrencies
                but unsure where to begin? Look no further than Alpha - your
                ultimate guide to mastering the intricacies of the crypto world!
              </p>
              <p className="mb-4">
                Alpha is not just a website; it's a comprehensive educational
                hub tailored for crypto newbies seeking to navigate this
                exciting landscape with confidence. Our platform is meticulously
                designed to empower enthusiasts like you to evolve into seasoned
                experts in the field.
              </p>
              <p className="mb-4">
                Dive into a wealth of educational resources meticulously curated
                on our sleek website. From insightful articles to engaging
                videos and interactive forums, Alpha offers a treasure trove of
                knowledge to demystify cryptocurrencies for beginners. Whether
                you're taking your first steps or aiming to delve into advanced
                concepts, Alpha is your steadfast companion every step of the
                way.
              </p>
              <p className="mb-4">
                Our one-stop-shop platform covers a spectrum of topics,
                including various cryptocurrencies, blockchain fundamentals,
                effective trading strategies, and in-depth market analysis. Join
                our vibrant community of like-minded individuals to exchange
                insights, learn from peers, and stay abreast of the
                ever-evolving crypto landscape.
              </p>
              <p className="mb-4">
                The resounding testimonials from our satisfied users underscore
                the value of the informative and engaging content Alpha
                delivers. Embrace the opportunity to transform from a curious
                enthusiast to a confident expert in the world of
                cryptocurrencies with Alpha.
              </p>
              <p className="mb-4">
                So, what are you waiting for? Dive into the world of
                cryptocurrencies with Alpha - where knowledge meets opportunity,
                and where enthusiasts like you transform into experts! 🌈🚀
              </p>
            </div>
          </div>
        );
      case "resources":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* TradingView Section */}
            <div className="text-left">
              <h2
                className={`text-2xl font-bold mb-3 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                TRADING VIEW
              </h2>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } text-base mb-3`}
              >
                TradingView is a popular online platform for charting and
                technical analysis used by traders and investors worldwide. It
                provides real-time data, customizable charts, and a wide range
                of technical indicators like the MACD and RSI to help users
                analyze the markets. Traders can also share ideas, strategies,
                and charts with the community, making it a valuable resource for
                research and collaboration. 📈
              </p>
              <a
                href="https://in.tradingview.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${
                  isDarkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                }`}
              >
                Visit TradingView
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } text-sm mt-1`}
              >
                https://in.tradingview.com
              </p>
            </div>

            {/* Coin Market Cap Section */}
            <div className="text-left">
              <h2
                className={`text-2xl font-bold mb-3 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                COIN MARKET CAP
              </h2>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } text-base mb-3`}
              >
                Coin Market Cap is a go-to website for cryptocurrency
                enthusiasts looking to stay updated on the latest market trends.
                It offers a comprehensive overview of the market
                capitalizations, prices, trading volumes, and other key data of
                numerous cryptocurrencies. Users can easily track the
                performance of different cryptocurrencies in real-time, making
                it a valuable tool for investors and traders alike. 🚀
              </p>
              <a
                href="https://coinmarketcap.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${
                  isDarkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                }`}
              >
                Visit Coin Market Cap
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } text-sm mt-1`}
              >
                https://coinmarketcap.com
              </p>
            </div>

            {/* Crypto Miso Section */}
            <div className="text-left">
              <h2
                className={`text-2xl font-bold mb-3 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                CRYPTO MISO
              </h2>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } text-base mb-3`}
              >
                Crypto Miso is a platform that tracks the activity of
                open-source cryptocurrency projects on GitHub. It provides
                insights into the development progress and activity levels of
                various crypto projects, helping users gauge the health and
                momentum of these projects. It's a valuable resource for those
                interested in understanding the technical side of
                cryptocurrencies and assessing the commitment of development
                teams. 🛠️
              </p>
              <a
                href="https://cryptomiso.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${
                  isDarkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                }`}
              >
                Visit Crypto Miso
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } text-sm mt-1`}
              >
                https://cryptomiso.com
              </p>
            </div>

            {/* Crypto Panic Section */}
            <div className="text-left">
              <h2
                className={`text-2xl font-bold mb-3 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                CRYPTO PANIC
              </h2>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } text-base mb-3`}
              >
                Crypto Panic is a platform that aggregates news, social media,
                and market data related to cryptocurrencies. It helps users stay
                informed about the latest developments in the crypto space,
                including market movements, regulatory updates, and project
                announcements. Think of it as your one-stop shop for staying
                up-to-date on all things crypto! 🚀
              </p>
              <a
                href="https://cryptopanic.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${
                  isDarkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                }`}
              >
                Visit Crypto Panic
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } text-sm mt-1`}
              >
                https://cryptopanic.com
              </p>
            </div>

            {/* Crypto Heat Map Section */}
            <div className="text-left">
              <h2
                className={`text-2xl font-bold mb-3 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                CRYPTO HEAT MAP
              </h2>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } text-base mb-3`}
              >
                Crypto Heat Map is a visual representation of the performance of
                various cryptocurrencies. It typically uses colors to indicate
                price movements - for example, green for gains and red for
                losses. This tool allows users to quickly see which
                cryptocurrencies are performing well and which ones are not,
                providing a snapshot of the market at a glance. 📊
              </p>
              <a
                href="https://coin360.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${
                  isDarkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                }`}
              >
                Visit Crypto Heat Map
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } text-sm mt-1`}
              >
                https://coin360.com
              </p>
            </div>

            {/* CRYPTO COMPARE Section */}
            <div className="text-left">
              <h2
                className={`text-2xl font-bold mb-3 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                CRYPTO COMPARE
              </h2>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } text-base mb-3`}
              >
                CryptoCompare is a website that provides comprehensive
                information on cryptocurrencies, exchanges, and mining. It
                offers data on cryptocurrency prices, market trends, exchange
                reviews, and mining information. It is a valuable resource for
                anyone looking to stay informed about the crypto market. 🚀
              </p>
              <a
                href="https://www.cryptocompare.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${
                  isDarkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                }`}
              >
                Visit CryptoCompare
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } text-sm mt-1`}
              >
                https://www.cryptocompare.com/
              </p>
            </div>

            {/* BLOCKCHAIN DATA Section */}
            <div className="text-left">
              <h2
                className={`text-2xl font-bold mb-3 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                BLOCKCHAIN DATA
              </h2>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } text-base mb-3`}
              >
                A Blockchain Data Website is a platform that provides
                information and data related to blockchain transactions, blocks,
                addresses, and other relevant details on various
                cryptocurrencies. These websites offer real-time updates on
                transactions, network activity, and historical data to help
                users track and analyze blockchain activity. 🌐
              </p>
              <a
                href="https://bitinfocharts.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${
                  isDarkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                }`}
              >
                Visit BitInfoCharts
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } text-sm mt-1`}
              >
                https://bitinfocharts.com
              </p>
            </div>

            {/* MINING CALCULATOR Section */}
            <div className="text-left">
              <h2
                className={`text-2xl font-bold mb-3 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                MINING CALCULATOR
              </h2>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } text-base mb-3`}
              >
                A mining calculator website is a platform that allows users to
                calculate the potential profitability of cryptocurrency mining
                based on factors like hash rate, power consumption, electricity
                cost, and mining difficulty. These calculators help miners
                estimate their potential earnings and make informed decisions
                about their mining operations. 🚀
              </p>
              <a
                href="https://whattomine.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${
                  isDarkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                }`}
              >
                Visit WhatToMine
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } text-sm mt-1`}
              >
                https://whattomine.com
              </p>
            </div>

            {/* COIN MARKET CAL Section */}
            <div className="text-left">
              <h2
                className={`text-2xl font-bold mb-3 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                COIN MARKET CAL
              </h2>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } text-base mb-3`}
              >
                Coin Market Cal is a platform that provides information about
                upcoming events, announcements, and updates related to various
                cryptocurrencies. It helps users stay informed about important
                events that could potentially impact the price and market
                behavior of different coins.🗓️
              </p>
              <a
                href="https://coinmarketcal.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${
                  isDarkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                }`}
              >
                Visit Coin Market Cal
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } text-sm mt-1`}
              >
                https://coinmarketcal.com
              </p>
            </div>
          </div>
        );
      case "trading-resources":
        return (
          <div className="text-center">
            <h2
              className={`text-3xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              TRADING RESOURCES
            </h2>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              Coming soon...
            </p>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } text-base transition-colors duration-300`}
      ref={mainRef}
    >
      <PeacefulAnimation isDarkMode={isDarkMode} />
      <button
        onClick={toggleDarkMode}
        className="fixed top-3 right-3 p-1.5 rounded-full bg-opacity-20 bg-gray-800 text-white z-50"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>
      <button
        onClick={toggleMenu}
        className="fixed top-3 left-3 p-1.5 rounded-full bg-opacity-20 bg-gray-800 text-white z-50"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
      <div
        className={`fixed inset-y-0 left-0 w-64 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-100"
        } p-5 transform transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="mt-10">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => navigateTo("home")}
                className={`w-full text-left py-2 px-4 rounded ${
                  currentPage === "home"
                    ? isDarkMode
                      ? "bg-gray-700"
                      : "bg-gray-300"
                    : ""
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("resources")}
                className={`w-full text-left py-2 px-4 rounded ${
                  currentPage === "resources"
                    ? isDarkMode
                      ? "bg-gray-700"
                      : "bg-gray-300"
                    : ""
                }`}
              >
                Resources
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo("trading-resources")}
                className={`w-full text-left py-2 px-4 rounded ${
                  currentPage === "trading-resources"
                    ? isDarkMode
                      ? "bg-gray-700"
                      : "bg-gray-300"
                    : ""
                }`}
              >
                Trading Resources
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <main className="pt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">{renderContent()}</div>
      </main>
      <hr
        className={`border-t ${
          isDarkMode ? "border-gray-700" : "border-gray-300"
        } my-8 max-w-5xl mx-auto`}
      />
      {/* Contact Section */}
      <section className="py-12 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className={`text-xl ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } mb-6`}
          >
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://x.com/deepsol58?t=MCa8jGNNHub5vbGBTUc2Dg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://www.instagram.com/deep_78812?igsh=ZHh3eXN4YjM3NjN5"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://t.me/deep58sol"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              <Send className="w-6 h-6" />
              <span className="sr-only">Telegram</span>
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className={isDarkMode ? "bg-black" : "bg-white"}>
        <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <p
            className={`text-center text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            © 2023 Alpha. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
