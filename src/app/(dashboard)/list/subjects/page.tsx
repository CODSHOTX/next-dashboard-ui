import Pagination from "@/app/component/pagination"
import Table from "@/app/component/Table"
import TableSearch from "@/app/component/TableSearch"
import { parentsData, role, studentsData, subjectsData,  } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Subject = {
  id:number;

  name:string;
  teachers:string[];
  
}
const columns = [
    {
        header: "Name",
        accessor: "name",
        
    },

     {
        header: "Teachers",
        accessor: "teachers",
        className: "hidden md:table-cell",
    },
 
]
const SubjectListPage = () => {

  const renderRows = (items: Subject) => (
    <tr key={items.id} className="border-b border-gray-200 even:bg-slate-50 hover:bg-lamaPurple">
      <td className="flex items-center gap-4 p-4">
        
      
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold">{items.name}</h3>
        </div>
      </td>

        <td className="hidden md:table-cell">{items.teachers.join(", ")}</td>

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
          <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
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
          <Table columns={columns} renderRow={renderRows} data={subjectsData} />
        </div>
      </div>
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
}

export default SubjectListPage