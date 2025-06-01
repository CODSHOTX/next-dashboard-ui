import Image from "next/image"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* search bar */}
      <div className="hidden md:flex">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-lg px-3 py-1 ml-1  max-w-md"
        />
      </div>
      {/* Icon and User */}
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="message" width={20} height={20} className="cursor-pointer mx-2" />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="message" width={20} height={20} className="cursor-pointer mx-2" />
          <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
            3
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500 text-xs leading-3 font-medium">John Doe</span>
          <span className="text-gray-500 text-right text-[10px]">Admin</span>
        </div>
        <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full cursor-pointer" />
      </div>
    </div>
  )
}

export default Navbar