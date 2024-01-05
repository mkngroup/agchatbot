import React from "react";
import { FaGooglePlay } from "react-icons/fa";

function page() {
  return (
    <div className="max-w-2xl mx-auto h-full overflow-hidden flex flex-col items-center justify-between   px-2 pb-4 ">
      <div className="flex-1 flex flex-col items-center mt-16">
        <FaGooglePlay className="text-4xl" />
        <p className="mt-6 text-2xl font-semibold ">
          How can i help you today?
        </p>
      </div>
      {/* boxes */}
      <div className="grid grid-cols-2 gap-2 w-full">
        <div className="border rounded-md flex flex-col border-gray-300 p-3 hover:bg-gray-100 ">
          <h3 className="text-sm font-medium font-sans text-gray-700">
            Come up with concepts
          </h3>
          <p className="text-xs font-sans text-gray-500">
            for a retro-style arcade game
          </p>
        </div>
        <div className="border rounded-md flex flex-col border-gray-300 p-3 hover:bg-gray-100 ">
          <h3 className="text-sm font-medium font-sans text-gray-700">
            Come up with concepts
          </h3>
          <p className="text-xs font-sans text-gray-500">
            for a retro-style arcade game
          </p>
        </div>
        <div className="border rounded-md flex flex-col border-gray-300 p-3 hover:bg-gray-100 ">
          <h3 className="text-sm font-medium font-sans text-gray-700">
            Come up with concepts
          </h3>
          <p className="text-xs font-sans text-gray-500">
            for a retro-style arcade game
          </p>
        </div>
        <div className="border rounded-md flex flex-col border-gray-300 p-3 hover:bg-gray-100 ">
          <h3 className="text-sm font-medium font-sans text-gray-700">
            Come up with concepts
          </h3>
          <p className="text-xs font-sans text-gray-500">
            for a retro-style arcade game
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
