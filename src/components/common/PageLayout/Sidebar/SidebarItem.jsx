/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "@nextui-org/react";

const SidebarItem = ({ data }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <li
        onClick={() => {
          setSubMenuOpen(!subMenuOpen);
        }}
        className="link"
      >
        <data.icon size={23} className="min-w-max" />
        <p className="flex-1 capitalize font-semibold">{data.title}</p>
        {data.submenu && (
          <IoIosArrowDown
            className={` ${subMenuOpen && "rotate-180"} duration-200 `}
          />
        )}
      </li>
      {data.submenu && (
        <motion.ul
          animate={
            subMenuOpen
              ? {
                  height: "fit-content",
                }
              : {
                  height: 0,
                }
          }
          className="flex h-0 flex-col pl-[40px] text-[0.8rem] font-normal overflow-hidden"
        >
          {data.submenu.map((item, index) => (
            <li key={index}>
              <Link href={item.url} className="link">
                <item.icon size={23} className="min-w-max text-black" />
                <p className="text-black flex-1 capitalize font-bold">{item.title}</p>
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </>
  );
};

export default SidebarItem;
