import React from 'react';
import Image from 'next/image';
import { BsDot } from 'react-icons/bs';
import { ProjectItems } from '@/constant/data';

export default function Project() {
  return (
    <section className="mt-[80px] px-6" id="Project">
      <div className="bg-gradient-to-r from-pink-100 to-pink-200 text-black w-full font-poppins py-10 rounded-lg">
        <h1 className="flex justify-center items-center text-4xl font-bold mb-4">My Project</h1>
        <p className="text-center font-bold mb-8 px-4 sm:px-20">
          Here are some of the cool things I've worked on
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-6">
          {ProjectItems.map((item, i) => (
            <div key={i} className="flex flex-col justify-center gap-3 bg-white rounded-md shadow-md p-4">
              <div className="w-full h-[200px] relative rounded-md overflow-hidden">
                <Image
                  src={item.post}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-md"
                />
              </div>

              <div className="font-bold text-xl px-2">{item.title}</div>

              <div className="mt-3 text-gray-500 flex items-center space-x-1 text-sm">
                <BsDot className="text-2xl" />
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
