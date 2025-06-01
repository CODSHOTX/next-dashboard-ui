import Image from "next/image"
import Link from "next/link"
import { title } from "process"

const menuItems = [
  {title:"MENU",
  items:   [
    {
    icon: "/home.png",
    label: "Home",
    href: "/",
  },
  {
    icon: "/teacher.png",
    label: "Teachers",
    href: "/teachers",
  },
  {
    icon: "/student.png",
    label: "Students",
    href: "/students",
  },
  {
    icon: "/parent.png",
    label: "Parents",
    href: "/parents",
  },
  {
    icon: "/class.png",
    label: "classes",
    href: "/classes",
  },
  {
    icon: "/lesson.png",
    label: "Lessons",
    href: "/lessons",
  },
  {
    icon: "/exam.png",
    label: "Exams",
    href: "/exams",
  },
  
  {
    icon: "/assignment.png",
    label: "Assignments",
    href: "/assignments",
  },
  {
    icon: "/calendar.png",
    label: "Event",
    href: "/event",
  },
  {
    icon: "/message.png",
    label: "Messages",
    href: "/messages",
  },
  {
    icon: "/announcement.png",
    label: "Announcements",
    href: "/announcements",
  },],},
 
  {
    title: "OTHER",
    items:[
       {
    icon: "/profile.png",
    label: "Prolile",
    href: "/prolile",
  },

       {
    icon: "/setting.png",
    label: "Settings",
    href: "/settings",
  },
  {
    icon: "/logout.png",
    label: "Logout",
    href: "/logout",
  },
 
    ],
  },
]

const Menu = () => {
  return (
    <div className='mt-4 text-sm'>
      {menuItems.map(i=>(
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-500 text-sm font-semibold px-4 py-2">{i.title}</span>
          { i.items.map((items) => (
            <Link href={items.href} key={items.label} className="flex items-center justify-center 
             gap-2 px-4 py-2 hover:bg-gray-200 transition-colors lg:justify-start">
            <Image src={items.icon} alt="" width={24} height={24} />
            <span className="hidden lg:block text-gray-700">{items.label}</span>
            </Link>
          ))}
          </div>

      ))}
    </div>
  )
}

export default Menu
