import { useState } from "react";
import { MdOutlineKeyboardArrowDown,MdKeyboardArrowRight } from "react-icons/md"
import { Home,Arts,Handicrafts,Handlooms,Trending,Resource } from "./MenuData";
const sub=[Home,Arts,Handicrafts,Handlooms,Trending,Resource]
const MenuItems = ({ menuItemsData,index }) => {
  const [open, setOpen] = useState(false);
  const [openSup, setOpenSup] = useState(false);
  return (
    <li className="relative mx-1  cursor-pointer py-2 group" >
      <div className="flex items-center justify-center  ">
        <p className="uppercase pr-[1px] ml-4 ">{menuItemsData}</p>
        <di className=" text-xl group-hover:rotate-180 duration-700"><MdOutlineKeyboardArrowDown /></di>
      </div>
      <ul className={`group-hover:z-[201] absolute font-normal  bg-gray-50   p-3 w-fit px-1  rounded-md mt-2 ml-0 translate-x-[-20px] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 group-hover:block text-[14px] duration-500 z-[-1] ` } >
        {
         sub[index].map((data, i) => (
            <li key={i} className="py-2 px-4 underline group/i hover:no-underline duration-200 hover:text-[var(--color-default)]">
              <a className="flex justify-between  relative items-center" href={data.url}>{data.title} {data["sup"]&&<MdKeyboardArrowRight className=" text-lg group-hover/i:rotate-90 duration-200" />}  </a>
              {data["sup"]&&
                <ul className={`z-[201] absolute  bg-gray-50 p-4 w-fit left-[90%]  rounded-md mt-2 ml-0 hidden top-[60%] group-hover/i:block text-[14px] duration-1000 ` }>
                   {
                    data["sup"].map((s,index)=>(
                      <li key={index} className=" cursor-pointer py-2 underline text-slate-700 hover:text-[var(--color-default)] hover:no-underline"><a className="flex justify-between relative items-center" href={s.url}>{s.title}</a></li>
                    ))
                   }
                </ul>
              }
            
            </li>
          ))
        }
      </ul>
    </li>
  );
};

export default MenuItems;