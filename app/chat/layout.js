"use client";
import { UserChats } from "@/lib/database/chats";
import Link from "next/link";
import { FaGooglePlay } from "react-icons/fa";
import { PiClipboardText } from "react-icons/pi";
import { BsSend } from "react-icons/bs";

export default function ChatLayout({ children }) {
  console.log(UserChats);
  return (
    <main className="grid grid-cols-10 h-dvh overflow-hidden">
      {/* nav */}
      <div className="col-span-2 h-dvh flex flex-col text-white  bg-[#000000]">
        {/* ust */}
        <div className="w-full py-2 px-5">
          <Link href={"/chat"}>
            <button className="w-full flex items-center py-[12px] px-2 justify-between rounded-md hover:bg-[#202123]">
              <div className="flex items-center">
                <FaGooglePlay className="text-2xl mr-3" />
                New chat
              </div>
              <PiClipboardText className="text-2xl" />
            </button>
          </Link>
        </div>
        {/* menu */}
        <div className="scrollbar px-5 h-full  overflow-y-auto pt-4">
          <ul className="flex flex-col space-y-2">
            {UserChats?.map((item, key) => {
              return (
                <Link href={`/chat/${item.id}`}>
                  <button className="w-full flex items-center py-[10px] px-2 justify-between rounded-md text-sm text-nowrap overflow-hidden hover:bg-[#202123]">
                    {item.title}
                  </button>
                </Link>
              );
            })}
          </ul>
        </div>
        {/* alt */}
        <div className="w-full py-2 px-5">
          <Link href={"/chat"}>
            <button className="w-full flex items-center py-[12px] px-2 justify-between rounded-md hover:bg-[#202123]">
              <div className="flex items-center">
                <img
                  src="https://res.cloudinary.com/dnfmvs2ci/image/upload/v1655840887/User-Profile-PNG-High-Quality-Image_lck0kw.png"
                  alt=""
                  className="h-[40px] w-[40px] mr-3"
                />
                <p className="text-left text-nowrap">Mahammad Nadirov</p>
              </div>
            </button>
          </Link>
        </div>
      </div>
      {/* main */}
      <div className="col-span-8 h-dvh flex flex-col">
        <p className="p-5 text-xl tracking-tight font-sans font-semibold">
          AG Chatbot 1.0
        </p>
        <main className="scrollbar h-full overflow-y-auto   ">{children}</main>
        <div className="w-full max-h-max max-w-2xl mx-auto  pb-2">
          {/* search bar */}
          <div className="relative flex items-center justify-center">
            <textarea
              name=""
              id=""
              rows="1"
              className="tascrollbar w-full py-4 px-4 pr-14  text-xl rounded-2xl border border-[#D9D9D9] resize-none focus:outline-none focus:border-[#acabab]"
            />
            <button className="absolute   p-2 right-3">
              <BsSend className="text-3xl" />
            </button>
          </div>

          <p className="text-gray-500 text-center text-xs font-medium mt-3">
            AG Chatbot can make mistakes. Consider checking important
            information.
          </p>
        </div>
        {/* <p className="p-5 text-xl tracking-tight font-sans font-semibold">
          AG Chatbot 1.0
        </p> */}
      </div>
    </main>
  );
}

{
  /* <div>ust</div>
<div className="flex-1 max-h-full overflow-hidden bg-blue-300 flex flex-col">
  <Link href={"/chat"} className="text-white">
    New
  </Link>
  <Link href={"/chat/ali"} className="text-white">
    ali
  </Link>
  <Link href={"/chat/ugur"} className="text-white">
    ugur
  </Link>
  <Link href={"/chat/aliyar"} className="text-white">
    aliyar
  </Link>
  <Link href={"/chat/muhammet"} className="text-white">
    muhammet
  </Link>
  <Link href={"/chat"} className="text-white">
    New
  </Link>
  <Link href={"/chat/ali"} className="text-white">
    ali
  </Link>
  <Link href={"/chat/ugur"} className="text-white">
    ugur
  </Link>
  <Link href={"/chat/aliyar"} className="text-white">
    aliyar
  </Link>
  <Link href={"/chat/muhammet"} className="text-white">
    muhammet
  </Link>
  <Link href={"/chat"} className="text-white">
    New
  </Link>
  <Link href={"/chat/ali"} className="text-white">
    ali
  </Link>
  <Link href={"/chat/ugur"} className="text-white">
    ugur
  </Link>
  <Link href={"/chat/aliyar"} className="text-white">
    aliyar
  </Link>
  <Link href={"/chat/muhammet"} className="text-white">
    muhammet
  </Link>
  <Link href={"/chat"} className="text-white">
    New
  </Link>
  <Link href={"/chat/ali"} className="text-white">
    ali
  </Link>
  <Link href={"/chat/ugur"} className="text-white">
    ugur
  </Link>
  <Link href={"/chat/aliyar"} className="text-white">
    aliyar
  </Link>
  <Link href={"/chat/muhammet"} className="text-white">
    muhammet
  </Link>
  <Link href={"/chat"} className="text-white">
    New
  </Link>
  <Link href={"/chat/ali"} className="text-white">
    ali
  </Link>
  <Link href={"/chat/ugur"} className="text-white">
    ugur
  </Link>
  <Link href={"/chat/aliyar"} className="text-white">
    aliyar
  </Link>
  <Link href={"/chat/muhammet"} className="text-white">
    muhammet
  </Link>
  <Link href={"/chat"} className="text-white">
    New
  </Link>
  <Link href={"/chat/ali"} className="text-white">
    ali
  </Link>
  <Link href={"/chat/ugur"} className="text-white">
    ugur
  </Link>
  <Link href={"/chat/aliyar"} className="text-white">
    aliyar
  </Link>
  <Link href={"/chat/muhammet"} className="text-white">
    muhammet
  </Link>
  <Link href={"/chat"} className="text-white">
    New
  </Link>
  <Link href={"/chat/ali"} className="text-white">
    ali
  </Link>
  <Link href={"/chat/ugur"} className="text-white">
    ugur
  </Link>
  <Link href={"/chat/aliyar"} className="text-white">
    aliyar
  </Link>
  <Link href={"/chat/muhammet"} className="text-white">
    muhammet
  </Link>
  <Link href={"/chat"} className="text-white">
    New
  </Link>
  <Link href={"/chat/ali"} className="text-white">
    ali
  </Link>
  <Link href={"/chat/ugur"} className="text-white">
    ugur
  </Link>
  <Link href={"/chat/aliyar"} className="text-white">
    aliyar
  </Link>
  <Link href={"/chat/muhammet"} className="text-white">
    muhammet
  </Link>
  <Link href={"/chat"} className="text-white">
    New
  </Link>
  <Link href={"/chat/ali"} className="text-white">
    ali
  </Link>
  <Link href={"/chat/ugur"} className="text-white">
    ugur
  </Link>
  <Link href={"/chat/aliyar"} className="text-white">
    aliyar
  </Link>
  <Link href={"/chat/muhammet"} className="text-white">
    muhammet
  </Link>
  <Link href={"/chat"} className="text-white">
    New
  </Link>
  <Link href={"/chat/ali"} className="text-white">
    ali
  </Link>
  <Link href={"/chat/ugur"} className="text-white">
    ugur
  </Link>
  <Link href={"/chat/aliyar"} className="text-white">
    aliyar
  </Link>
  <Link href={"/chat/muhammet"} className="text-white">
    muhammet
  </Link>
</div>
<div className="min-h-min">alt</div> */
}
