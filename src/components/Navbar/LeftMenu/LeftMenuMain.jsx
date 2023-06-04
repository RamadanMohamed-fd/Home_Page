import {AiOutlineLeft} from "react-icons/ai";
import ListItem from "./ListItem";
import ListItem_Item from "./ListItem_Item";
import { useState } from "react";
import ListItem_nested from './ListItem_nested';
import ListItem_nested_nested from './ListItem_nested_nested';
import { bags_nested,bags,footWear,accessories,accessories_nested,care,care_nested } from './data';

const LeftMenuMain = (props) => {
  const [show,setShow]=useState(false);
  const showItem_Item=()=>{
    setShow(!show)
  }
  
  const [showBags,setShowBags]=useState(false);
  const [showBags_n,setShowBags_n]=useState(false);

  const [showAccessories,setShowAccessories]=useState(false);
  const [showAccessories_n,setAccessories_n]=useState(false);

  const [showCare,setShowCare]=useState(false);
  const [showCare_n,setCare_n]=useState(false);

  const [showFootWear,setFootWear]=useState(false);
  return (
    <div className={ `bg-white  top-0 h-full xl:overflow-visible overflow-y-scroll text-black  z-10 left-0 fixed transition duration-700  ${props.show && "translate-x-0"} ${!props.show && "translate-x-[-100%]"} sm:w-[19rem] max-sm:w-[17rem] `}>
      <div className=" flex justify-start items-center  p-4 cursor-pointer border-b w-full" onClick={props.getBack}>
      <AiOutlineLeft className="text-xl font-bold "/>
      <h2 className=" text-[24px] ml-1 font-medium font-mono">Back</h2>
      </div>
      <div className="  w-full  ">
        <ul className="w-full text-[14px] list-item ">
          <li className="pt-1 group " >
            <div onClick={showItem_Item}><ListItem title="Clothing" show={show} /></div>
            <ListItem_Item show={show} />
          </li>

          <li className="pt-1 group ">
            <div onClick={()=>setShowBags(!showBags)}>
              <ListItem title="BAgs" show={showBags}/>
            </div>
            <ul className={`p-1 n-li -mb-4 ml-7 mt-2 xl:absolute xl:bg-white  xl:ml-[300px] xl:-mt-8 xl:w-[200px] xl:pl-6 ${!showBags && "max-[1115px]:hidden"} xl:hidden xl:group-hover:block`}>
               <ListItem_nested bags={bags}/>
              <li className="pt-1 group/item " onClick={()=>setShowBags_n(!showBags_n)}>
                <a  href="#">
                  <ListItem title="purses" className={"xl:-ml-10 -ml-6"}  show={showBags_n}/>
                </a>
                <ListItem_nested_nested bags_nested={bags_nested} show_nested={showBags_n}/>
              </li>
            </ul>
          </li>
          
          <li className="pt-1 group ">
            <div onClick={()=>setFootWear(!showFootWear)}>
              <ListItem title="FootWear" show={showFootWear}/>
            </div>
            <ul className={`p-1 n-li -mb-4 ml-7 mt-2 xl:absolute xl:bg-white  xl:ml-[300px] xl:-mt-8 xl:w-[200px] xl:pl-6 ${!showFootWear && "max-[1115px]:hidden"} xl:hidden xl:group-hover:block`}>
               <ListItem_nested bags={footWear}/>
            </ul>
          </li>


          <li className="xl:pl-10 pl-6 ">watches</li>

          <li className="pt-1 group ">
            <div onClick={()=>setShowAccessories(!showAccessories)}>
              <ListItem title="Accessories" show={showAccessories}/>
            </div>
            <ul className={`p-1 n-li -mb-4 ml-7  xl:absolute xl:bg-white  xl:ml-[300px] xl:-mt-8 xl:w-[200px] xl:pl-6 ${!showAccessories && "max-[1115px]:hidden"} xl:hidden xl:group-hover:block`}>
               <ListItem_nested bags={accessories}/>
              <li className="pt-1 group/item " onClick={()=>setAccessories_n(!showAccessories_n)}>
                <a  href="#">
                  <ListItem title="more.." className={"xl:-ml-10 -ml-6"}  show={showAccessories_n}/>
                </a>
                <ListItem_nested_nested bags_nested={accessories_nested} show_nested={showAccessories_n}/>
              </li>
            </ul>
          </li>
          
          <li className="xl:pl-10 pl-6">House of Design</li>

          <li className="pt-1 group ">
            <div onClick={()=>{setShowCare(!showCare)}}>
              <ListItem title="Beauty & Personal Care" show={showCare}/>
            </div>
            <ul className={`p-1 n-li -mb-4 ml-7 mt-2 xl:absolute xl:bg-white  xl:ml-[300px] xl:-mt-8 xl:w-[200px] xl:pl-6 ${!showCare && "max-[1115px]:hidden"} xl:hidden xl:group-hover:block`}>
               <ListItem_nested bags={care}/>
              <li className="pt-1 group/item " onClick={()=>setCare_n(!showCare_n)}>
                <a  href="#">
                  <ListItem title="more.." className={"xl:-ml-10 -ml-6"}  show={showCare_n}/>
                </a>
                <ListItem_nested_nested bags_nested={care_nested} show_nested={showCare_n}/>
              </li>
            </ul>
          </li>

          <li className="xl:pl-10 pl-6">House & Decor</li>
          <li className="xl:pl-10 pl-6">Kitchen</li>
        </ul>

      </div>
    </div>
  )
}

export default LeftMenuMain