import { menu_data } from "./MenuData";
import MenuItems from "./MenuItems";
import Main_icons from "../temp/Main_icons";


const Menu = () => {
  return (
    <nav className="  text-[18px] font-mono text-black bg-gray-50 relative">
      <ul className="  pt-0 list-none   flex justify-center items-center xl:items-start space-x-2 tracking-wider">
        <div className=" hidden mt-12 right-36 absolute pb-[1px]  pr-[-10px]  xl:flex justify-center items-center">
        {menu_data.map((data, i) => (
          <MenuItems key={i} menuItemsData={data} index={i} />
        ))}
        </div>
          <div className="flex justify-center items-center text-black  text-[1.8rem] max-[570px]:hidden">
          <Main_icons className={"group-hover/i:animate-moveUp1 top-[-15rem] right-[0px]"} className1={"group-hover/i:animate-moveUp1 top-[-15rem] right-[0px]"}/>
          </div>
      </ul>
    </nav>
  );
};

export default Menu;
