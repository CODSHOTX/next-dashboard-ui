import Announcement from "@/app/component/Announcement"
import EventCalender from "@/app/component/EventCalender"
import BigCalender from "@/components/BigCalender"

const StudentPage = () => {
  return (
    <div className='p flex gap-4 flex-col xl:flex-row'>
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalender/>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalender />
        <Announcement />
      </div>
    </div>
  )
}

export default StudentPage
