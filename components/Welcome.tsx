"use client";
import Image from "next/image";

export default function Welcome() {
  return (
    <section id="Welcome" className="mt-[80px] px-4 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-pink-100 to-pink-200 text-black w-full min-h-[400px] flex flex-col sm:flex-row items-center justify-between py-10 px-6 font-poppins rounded-lg shadow-lg">
        
       
        <div className="flex flex-col gap-4 w-full sm:w-1/2">
          <h1 className="font-extrabold text-4xl sm:text-5xl leading-tight">
            Hi, I'm Komolafe Precious
          </h1>
          <p className="font-bold text-2xl sm:text-3xl">
            I'm a Frontend Developer
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("Project");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-6 bg-black text-white py-3 px-6 rounded-md shadow-lg w-max hover:bg-gray-800 transition"
          >
            Project
          </button>
        </div>

        {/* Image */}
        <div className="mt-10 sm:mt-0 w-64 sm:w-1/3 rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/image.jpg"
            alt="about"
            width={250}
            height={250}
            className="rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
