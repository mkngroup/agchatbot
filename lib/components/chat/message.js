import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaRegClipboard } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineReload } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

function Message_Ui({ message, ownername, ownerimage, type }) {
  return (
    <div className="group flex space-x-3">
      <div className="pt-1">
        {type === "agchatbot" ? (
          <FaGooglePlay className="text-3xl text-lime-600" />
        ) : type === "user" ? (
          <img
            src={
              ownerimage ||
              "https://res.cloudinary.com/dnfmvs2ci/image/upload/v1655840887/User-Profile-PNG-High-Quality-Image_lck0kw.png"
            }
            alt=""
            className="w-[30px] h-[30px]"
          />
        ) : (
          <FaGooglePlay className="text-3xl text-lime-600" />
        )}
      </div>
      <div className="">
        <h2 className="font-semibold">
          {type === "user" ? ownername : "AG Chatbot"}
        </h2>
        <p className="font-medium leading-8 font-sans">{message || ""}</p>
        <div className="flex items-center space-x-2 mt-4">
          {type === "user" ? (
            <button className="">
              <FiEdit2 className="text-gray-400 invisible group-hover:visible hover:text-gray-700" />
            </button>
          ) : null}
          {type === "agchatbot" ? (
            <button>
              <FaRegClipboard className="text-gray-400 hover:text-gray-700" />
            </button>
          ) : null}
          {type === "agchatbot" ? (
            <button>
              <AiOutlineLike className="text-gray-400 hover:text-gray-700" />
            </button>
          ) : null}
          {type === "agchatbot" ? (
            <button>
              <AiOutlineDislike className="text-gray-400 hover:text-gray-700" />
            </button>
          ) : null}
          {type === "agchatbot" ? (
            <button>
              <AiOutlineReload className="text-gray-400 hover:text-gray-700" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Message_Ui;
