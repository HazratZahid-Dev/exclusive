import Image from "next/image";

export default function Button({ btn_text, btn_color,btn_width,btn_height,onClick, type = "button", }) {
  return (
    <button
    onClick={onClick}
      className={` ${btn_color} ${btn_width} cursor-pointer px-3 lg:px-0 text-sm lg:text-base hover:bg-[#E07575] ${btn_height} text-white rounded-sm flex items-center justify-center`}
    type={type}
    >
      {btn_text}
    </button>
  );
}
