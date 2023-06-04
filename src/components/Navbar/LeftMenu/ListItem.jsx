import {AiOutlineRight} from "react-icons/ai";
import { BiMinus,BiPlus } from "react-icons/bi";
const ListItem = (props) => {
  return (
    <div className={`flex justify-between pl-6 xl:pl-10 pr-4 items-center  ${props.className} `}>
    <h3>{props.title}</h3>
    {(props.show)&&<BiMinus className="text-lg xl:opacity-0"/>}
    {!(props.show)&&<div className="xl:hidden block text-lg"> <BiPlus/></div>}
    <div className="xl:block hidden"><AiOutlineRight/></div>
    </div>
  )
}

export default ListItem