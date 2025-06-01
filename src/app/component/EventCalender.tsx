"use client";
import Image from 'next/image';
import { title } from 'process';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
//TEMP
const events =[
    {id: 1,
    title: "Event 1",
    time: "12:00 PM - 1:00 PM",
    description: "Description for Event 1",},
    {id: 2,
    title: "Event 2",     
    time: "2:00 PM - 3:00 PM",
    description: "Description for Event 2",},
    {id: 3,
    title: "Event 3",
    time: "4:00 PM - 5:00 PM",
    description: "Description for Event 3",},
]

const EventCalender = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    
    <div className='bg-white rounded-md p-4'><Calendar onChange={onChange} value={value} />
    <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold my-4'>Events</h1>
        <Image src="/moreDark.png" alt='' width={20} height={20} />
    </div>
    <div className='flex flex-col gap-4'>
        {events.map(event=>(
            <div 
            className='p-5 rounded-md border-2 border-gray-100 border-t-lamaSky even:border-t-lamaPurple' key={event.id}>
                <div className='flex  items-center justify-between'>
                    <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                    <span className='text-gray-300 text-sm'>{event.time}</span>
                     </div>
                     <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
            </div>
        ))}
    </div>
    </div>
  )
}


export default EventCalender