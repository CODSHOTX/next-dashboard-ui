import Pagination from "@/app/component/pagination"
import Table from "@/app/component/Table"
import TableSearch from "@/app/component/TableSearch"
import { role, studentsData, teachersData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Student = {
  id:number;
  studentId:string;
  name:string;
  email:string;
  photo:string;
  phone:string;
  grade:string;
  class:string;
  address:string;
}
const columns = [
  {
    header:"Info", 
    accessor:"info", 
  },

  {header: "Student ID",
    accessor:"studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grades",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phones",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "addresses",
    className: "hidden lg:table-cell"
    },

  {
    header: "Actions",
    accessor: "actions",
    className: "hidden lg:table-cell"
  },
]
const StudentListPage = () => {

  const renderRows = (items: Student) => (
    <tr key={items.id} className="border-b border-gray-200 even:bg-slate-50 hover:bg-lamaPurple">
      <td className="flex items-center gap-4 p-4">
        <Image src={items.photo}
         alt={items.name}
         width={40}
         height={40} 
        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"  />
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold">{items.name}</h3>
          <p className="text-xs text-gray-500">{items?.email}</p>
        </div>
      </td>
        <td className="hidden md:table-cell">{items.studentId}</td>
        <td className="hidden md:table-cell">{items.grade}</td>
        <td className="hidden md:table-cell">{items.class}</td>
        <td className="hidden md:table-cell">{items.phone}</td>
        <td className="hidden md:table-cell">{items.address}</td>
        <td>
          <div className="flex items-center gap-2">
          <Link href={`list/students/${items.id}`}>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaSky">
            <Image src="/view.png" alt="View" width={16} height={16} />
          </button>
          </Link>
          {role === "admin" && (
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/edit.png" alt="Edit" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
      
    </tr>
  );
  return (
    <div className="flex flex-col min-h-screen">
      <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0 flex flex-col'>
        {/* TOP */}
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch/>
            <div className="flex items-center gap-4 self-end">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                <Image src="/filter.png" alt="" width={24} height={24} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                <Image src="/sort.png" alt="" width={24} height={24} />
              </button>
               {role === "admin" && (
                              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                                <Image src="/plus.png" alt="" width={24} height={24} />
                              </button>
                            )}
            </div>
          </div>
        </div>
        {/* LIST */}
        <div className="flex-1">
          <Table columns={columns} renderRow={renderRows} data={studentsData} />
        </div>
      </div>
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
}

export default StudentListPage