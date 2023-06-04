import { useState } from "react";
import {HiPlus} from "react-icons/hi"
import { menu_data,Home,Arts,Handicrafts,Handlooms,Trending,Resource } from "../MiddleMenu/MenuData";
import ListItem from "../LeftMenu/ListItem";
const sub=[Home,Arts,Handicrafts,Handlooms,Trending,Resource]
const RightMenuItems = ({ data,index }) => {

  const [open, setOpen] = useState(false);
  return (
    <li className="relative cursor-pointer px-3 py-3">
      <div className=" text-lg -ml-6 -mt-1 tracking-wider text-gray-700 font-medium " onClick={() => setOpen(!open)}>
        <ListItem title={data} show={open} />
      </div>
      
     {open&& <ul className={"z-[100] bg-[#fff] list-none font-extralight" }>
        {
          sub[index].map((item,i)=>(
            <li key={i} className={` ml-6 text-gray-700 pt-1.5 duration-200 hover:text-[var(--color-default)]
             font-medium `}>{item.title}</li>
          ))
        }
      </ul>}
    </li>
  );
};

export default RightMenuItems;
