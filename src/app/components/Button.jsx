import Image from "next/image";

export default function Button({ btn_text, btn_color,btn_width,btn_height,onClick }) {
  return (
    <button
    onClick={onClick}
      className={` ${btn_color} ${btn_width} cursor-pointer hover:bg-[#E07575] ${btn_height} text-white rounded-sm flex items-center justify-center`}
      type="button"
    >
      {btn_text}
    </button>
  );
}
