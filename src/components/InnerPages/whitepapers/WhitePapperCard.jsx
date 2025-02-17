import React from "react";
import { motion } from "framer-motion";

export default function WhitepaperCard({ service }) {
  return (
    // <div className="group px-5 md:px-0  w-fit md:w-[35rem] relative block">
    <div className="group px-5 md:px-0  w-full  relative block">
      <div
        className="bg-white shadow-lg rounded-lg   overflow-hidden hover:shadow-xl transition-shadow"
        // whileHover={{ scale: 1.05 }}
      >
        {/* Card Image with Parallax Effect */}
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.imageUrl})` }}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
        />

        <div className="p-4">
          {/* Title */}
          <h3 className="text-xl w-full font-semibold text-gray-900">
            {service.titleWp}
          </h3>

          {/* Optional Description */}
          <p className="mt-2 text-sm text-gray-600">
            {service.shortDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
