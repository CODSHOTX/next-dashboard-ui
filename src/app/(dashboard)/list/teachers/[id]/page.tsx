import BigCalender from "@/components/BigCalender"
import Image from "next/image"

const SingleTeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col xl:flex-row gap-4'>
        {/*LEFT*/}
        <div className="w-full xl:2/3 ">
            {/* TOP SECTION */}
            <div className="flex flex-col lg:flex-row items-center gap-4 mb-4">
                {/* USER Profile Section */}
                <div className="bg-lamaSky py-6 px-4 rounded-md w-full lg:w-[440px] flex-shrink-0">
                    <div className="w-1/3 ">
                        <Image
                            src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            alt="Teacher Profile"
                            width={144}
                            height={144}
                            className="rounded-full object-cover w-36 h-36"
                        />
                    </div>
                    <div className="w-2/3 flex flex-col justify-between gap-4">
                        <h1 className="text-xl font-bold mb-4">John Doe</h1>
                        <p className="text-sm text-gray-600">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quae, veritatis!
                        </p>
                        <div className="flex flex-wrap items-center gap-2  justify-between font-medium text-xs ">
                            <div className="w-full md:w-1/3  lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/blood.png" alt="" width={14} height={14} />
                                <span>A+</span>
                            </div>
                            <div className="w-full md:w-1/3  lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/date.png" alt="" width={14} height={14} />
                                <span>January 2025 </span>
                            </div>
                            <div className="w-full md:w-1/3  lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/mail.png" alt="" width={14} height={14} />
                                <span>john.doe@example.com</span>
                            </div>
                            <div className="w-full md:w-1/3  lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/phone.png" alt="" width={14} height={14} />
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Small cards container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:max-w-[420px]">
                    <div className="bg-white p-4 rounded-md flex gap-4 items-center">
                        <Image src="/singleAttendance.png" alt="Attendance" width={24} height={24} className="w-6 h-6" />
                        <div>
                            <h1 className="text-xl font-semibold">90%</h1>
                            <span className="text-sm text-gray-400">Attendance</span>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-md flex gap-4 items-center">
                        <Image src="/singleBranch.png" alt="Branches" width={24} height={24} className="w-6 h-6" />
                        <div>
                            <h1 className="text-xl font-semibold">2</h1>
                            <span className="text-sm text-gray-400">Branches</span>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-md flex gap-4 items-center">
                        <Image src="/singleLesson.png" alt="Lessons" width={24} height={24} className="w-6 h-6" />
                        <div>
                            <h1 className="text-xl font-semibold">6</h1>
                            <span className="text-sm text-gray-400">Lessons</span>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-md flex gap-4 items-center">
                        <Image src="/singleClass.png" alt="Classes" width={24} height={24} className="w-6 h-6" />
                        <div>
                            <h1 className="text-xl font-semibold">6</h1>
                            <span className="text-sm text-gray-400">Classes</span>
                        </div>
                    </div>
                </div>
            </div>
           
            {/* Bottom */}
            <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
              <h1>Teacher&apos;s Schedule</h1>
              <BigCalender/>
              </div>
        </div>
        {/*RIGHT*/}
        <div className="bg-white rounded-md p-4 w-[400px] flex-shrink-0">             
            right
        </div>
    </div>
  )
}

export default SingleTeacherPage