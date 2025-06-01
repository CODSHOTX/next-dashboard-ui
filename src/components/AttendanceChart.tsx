import Image from "next/image"

const AttendanceChart = () => {
  return (
   <div className='bg-white rounded-xl w-full h-full p-4'>
         <div className='flex justify-between items-center'>
                    <h1 className='text-lg font-semibold'>Attendance</h1>
                    <Image src="/moreDark.png" className='cursor-pointer' alt='' width={20} height={20}/>
                </div>
    </div>
  )
}

export default AttendanceChart