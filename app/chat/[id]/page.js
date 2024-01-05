import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaRegClipboard } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineReload } from "react-icons/ai";
import Message_Ui from "@/lib/components/chat/message";

function page({ params }) {
  return (
    <div className="scrollbar max-w-2xl mx-auto h-full px-4 text-pretty pb-4 ">
      <ul className="flex flex-col space-y-10 justify-end h-full">
        {/* <div className="flex space-x-3">
          <div className="pt-1">
            <FaGooglePlay className="text-3xl text-lime-600" />
          </div>
          <div>
            <h2 className="font-semibold">AG Chatbot</h2>
            <p className="font-medium leading-8 font-sans">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium saepe dolore cumque accusantium blanditiis? Nihil enim
              minima, pariatur. accusantium in dignissimos maiores dicta
              doloribus quibusdam cumque ipsum iusto, officia non! Ad delectus,
              soluta, obcaecati, porro incidunt sint placeat aut pariatur
              possimus exercitationem asperiores eos! Ea excepturi doloribus
              atque illum odio!
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <button>
                <FaRegClipboard className="text-gray-400 hover:text-gray-700" />
              </button>
              <button>
                <AiOutlineLike className="text-gray-400 hover:text-gray-700" />
              </button>
              <button>
                <AiOutlineDislike className="text-gray-400 hover:text-gray-700" />
              </button>
              <button>
                <AiOutlineReload className="text-gray-400 hover:text-gray-700" />
              </button>
            </div>
          </div>
        </div> */}
        <Message_Ui
          message={"Can you help me ?"}
          type={"user"}
          ownername={"Mahammad Nadirov"}
        />
        <Message_Ui message={"Yes I can help you"} type={"agchatbot"} />
        <Message_Ui message={"Then help me fuckin shit"} type={"user"} ownername={"Mahammad Nadirov"} />
      </ul>
    </div>
  );
}

export default page;
