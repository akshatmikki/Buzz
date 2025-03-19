import React from "react";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import TypingEffect from "./typingeffect";

const App = () => {
  return (
    <div>
      <div className="bg-[#007A99] text-white font-sans min-h-screen flex flex-col justify-center items-center text-center ">
      {/* Header Section */}
      <header className="absolute top-6 left-6 flex items-center">
        <h1 className="text-xl font-bold text-yellow-400"><span className="inline-block group cursor-pointer">
  {["B", "u", "z", "z"].map((char, index) => (
    <span
      key={index}
      className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-150 group-hover:rotate-[10deg] group-hover:text-white"
      style={{ display: "inline-block", transitionDelay: `${index * 50}ms` }} // Delay effect for each letter
    >
      {char}
    </span>
  ))}
</span>
</h1>
      </header>
      
      {/* Social Icons */}
      <div className="absolute top-6 right-6 space-y-3 flex flex-col items-end text-white text-2xl">
        <FaWhatsapp />
        <FaInstagram />
        <FaEnvelope />
      </div>
      <div className="absolute bottom-0 left-300 h-31 border-t-4 border-l-4 border-[#ffffff] "></div> 
      {/* Hero Section */}
      <section className="max-w-2xl">
        <h2 className="text-4xl font-bold leading-tight">
          We help travel agents get <span className="text-yellow-400">2.3x</span> more business, in less than <span className="text-yellow-400">30 days.</span>
        </h2>
        <p className="mt-4 text-lg">
          Get consistent high-paying travel clients.<br /><TypingEffect />
        </p>
        <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold">
          Get started
        </button>
      </section>
    </div>
      {/* About Section */}
      <section className=" w-full flex flex-col md:flex-row-reverse items-center text-black bg-white px-12 py-16 relative">
        {/* Decorative Line Transition 
        <div className="absolute top-0 left-300 h-31 border-t-4 border-l-4 border-[#007A99] flex"></div>
        <div className="absolute top-30 left-150 w-151 border-t-4 border-[#007A99] flex"></div>
        */}
        <div className="flex-1 max-w-2xl">
          <h3 className="text-2xl font-bold text-[#007A99]  pt-2 mb-4">But who are we?</h3>
          <p className="text-lg text-gray-700">
            We are a team of Digital Marketers, who have helped <span className="font-bold">30+ travel agents</span> across Delhi NCR get high-paying clients consistently. 
            Let us handle your client acquisition, while you focus on what you do best.
          </p>
        </div>
        <div className="flex-1 flex justify-center mt-6 md:mt-0 max-w-lg">
          <img src="/Screenshot 2025-03-19 154512.png" alt="About Us" className="w-full" />
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full px-10 py-10 bg-[#F8C9D9] text-[#6E3FA6] flex flex-col items-center relative">
        <h2 className="bg-[#6E3FA6] text-white text-2xl font-bold px-8 py-4 rounded-lg shadow-lg relative z-10">Our Process</h2>
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-[85%] border-dotted border-2 border-purple-600"></div>
        <div className="mt-12 w-full max-w-4xl flex flex-col space-y-16 relative">
          {/* Step 1 */}
          <div className="flex items-center relative">
            <div className="bg-[#6E3FA6] text-white p-6 rounded-lg shadow-lg max-w-sm text-left relative z-10">
              <h4 className="font-bold text-lg">01. Gather Content</h4>
              <p className="text-sm mt-2">We collect visuals that highlight your business. These form a foundation of our campaigns.</p>
            </div>
            <div className="absolute w-8 h-8 bg-[#6E3FA6] rounded-full left-1/2 transform -translate-x-1/2"></div>
          </div>
          <div className="w-1 h-16 border-dotted border-2 border-purple-600 mx-auto"></div>
          {/* Step 2 */}
          <div className="flex items-center self-end relative">
            <div className="bg-[#6E3FA6] text-white p-6 rounded-lg shadow-lg max-w-sm text-left relative z-10">
              <h4 className="font-bold text-lg">02. Run Ads</h4>
              <p className="text-sm mt-2">Next, we launch ads based on the content we've collected. These ads are placed on social media to capture clients' attention.</p>
            </div>
            <div className="absolute w-8 h-8 bg-[#6E3FA6] rounded-full left-1/2 transform -translate-x-1/2"></div>
          </div>
          <div className="w-1 h-16 border-dotted border-2 border-purple-600 mx-auto"></div>
          {/* Step 3 */}
          <div className="flex items-center relative">
            <div className="bg-[#6E3FA6] text-white p-6 rounded-lg shadow-lg max-w-sm text-left relative z-10">
              <h4 className="font-bold text-lg">03. Generate Leads</h4>
              <p className="text-sm mt-2">Finally, we collect information from genuinely interested individuals, prioritizing quote-ready leads.</p>
            </div>
            <div className="absolute w-8 h-8 bg-[#6E3FA6] rounded-full left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center p-12 bg-[#007A99] text-white">
        <h3 className="text-3xl font-bold">
          Get <span className="text-yellow-400">10 new qualified leads</span> within <span className="text-yellow-400">30 days</span>, or you don’t pay.
        </h3>
        <div className="bg-black text-white p-10 mt-8 rounded-lg max-w-lg mx-auto border-4 border-yellow-400">
          <h4 className="text-2xl font-bold mb-4">Let's get on a call.</h4>
          <input className="block w-full bg-gray-800 text-white p-4 my-3 rounded-md text-lg" placeholder="Name *" />
          <input className="block w-full bg-gray-800 text-white p-4 my-3 rounded-md text-lg" placeholder="Phone *" />
          <input className="block w-full bg-gray-800 text-white p-4 my-3 rounded-md text-lg" placeholder="Email" />
          <button className="mt-6 bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold w-full text-xl">Submit</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#181818] text-white text-sm w-full py-8 px-6 flex flex-col">
        <div className="flex justify-between w-full items-start">
          <div>
            <p className="text-gray-400">info.buzztrackers@gmail.com</p>
            <p className="text-gray-400">+91 83684 25502</p>
            <p className="text-gray-400">+91 88604 93015</p>
          </div>
          <h1 className="text-xl font-bold text-gray-300">BUZZ</h1>
        </div>
        <hr className="border-t border-gray-600 w-full my-4" />
        <div className="flex justify-between w-full items-center">
          <p className="text-gray-400">buzz.smma</p>
          <div className="flex space-x-4 text-gray-400 text-xl">
            <FaInstagram />
            <FaWhatsapp />
            <FaEnvelope />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
