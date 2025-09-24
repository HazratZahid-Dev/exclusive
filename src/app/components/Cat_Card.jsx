import Image from "next/image";

const cate_data = [
  {
    id: 1,
    cat_name: "Phone",
    img: "/Category-CellPhone.svg",
  },
  {
    id: 2,
    cat_name: "Computers",
    img: "/Category-Computer.svg",
  },
  {
    id: 3,
    cat_name: "SmartWatch",
    img: "/Category-SmartWatch.svg",
  },
  {
    id: 4,
    cat_name: "Camera",
    img: "/Category-Camera.svg",
  },
  {
    id: 5,
    cat_name: "Gaming",
    img: "/Category-Gamepad.svg",
  },
];

export default function CategoriesCard() {
  return (
    <div className="flex flex-wrap px-4 mx-auto lg:px-32 !items-center justify-center lg:justify-between gap-6 pt-10">
      {cate_data.map((items) => (
        <div
          key={items.id}
          className="w-[170px] cursor-pointer h-[145px] border border-[#F5F5F5] flex items-center flex-col space-y-4 justify-center rounded-sm 
               transition-colors duration-700 ease-in-out 
               bg-white hover:bg-[#BD4433] hover:text-white group"
        >
          <Image
            src={items.img}
            alt="arrow"
            width={56}
            height={56}
            className="transition duration-700 ease-in-out group-hover:brightness-0 group-hover:invert"
          />
          <p>{items.cat_name}</p>
        </div>
      ))}
    </div>
  );
}
