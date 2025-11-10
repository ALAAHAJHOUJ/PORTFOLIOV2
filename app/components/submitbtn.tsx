import React from 'react'
import { FaPaperPlane } from 'react-icons/fa';


type props={
  click:(e: React.MouseEvent<HTMLButtonElement>)=>void
}


function Submitbtn({click}:props) {
  return (
    <button
      onClick={click}
      type="submit"
      className="group flex items-center justify-center gap-2 cursor-pointer h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-[#b4b4b483] active:scale-105 "
    >

        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
    </button>
  );
}

export default Submitbtn