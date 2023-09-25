import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { AiOutlineAppstore } from "react-icons/ai"
import { BsArrowRightShort } from "react-icons/bs"
import { SlSettings } from "react-icons/sl"
import { useMediaQuery } from "react-responsive"

// import Logo from "@/components/common/Logo/Logo"

import SidebarItem from "./SidebarItem"

const Sidebar = () => {
  const isTabletMid = useMediaQuery({ query: "(max-width: 768px)" })
  const [open, setOpen] = useState(false)
  const sidebarRef = useRef(null)

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }, [isTabletMid])

  const Nav_animation = {
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "4rem",
      transition: {
        damping: 40,
      },
    },
  }

  const menus = [
    {
      title: "All Apps",
      icon: AiOutlineAppstore,
      url: "/",
    },
    {
      title: "Components",
      icon: AiOutlineAppstore,
      url: "/",
      submenu: [
        {
          title: "Form",
          icon: AiOutlineAppstore,
          url: "/form",
        },
        {
          title: "Table",
          icon: AiOutlineAppstore,
          url: "/table",
        },
      ],
    },
    {
      title: "Settings",
      icon: SlSettings,
      url: "/",
      submenu: [
        {
          title: "Themes",
          icon: AiOutlineAppstore,
          url: "/",
        },
        {
          title: "Fonts",
          icon: AiOutlineAppstore,
          url: "/",
        },
      ],
    },
  ]

  return (
    <motion.div
      ref={sidebarRef}
      variants={Nav_animation}
      initial={{ x: 0 }}
      animate={open ? "open" : "closed"}
      className="glass-card-bg-light rounded-[20px]  text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] relative h-full"
    >
      <div className="flex items-center h-[90px] ">
        {open ? (
          <h2 className="mx-auto">Logo</h2>
        ) : (
          <p className="text-[36px] mb-0 font-bold ml-[10px]">ss</p>
        )}
        <BsArrowRightShort
          className={`-mr-[14px] bg-black text-white text-3xl rounded-full  border border-black cursor-pointer z-50 ${
            open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
      </div>

      <div className="flex flex-col ">
        <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden custom-scrollbar md:h-[68%] h-[70%]">
          {menus.map((item,index) => (
            <SidebarItem key={index} data={item} />
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default Sidebar
