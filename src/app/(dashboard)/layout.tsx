import Image from "next/image";
import Link from "next/link";
import Menu from "../component/navbar/menu/page";
import Navbar from "../component/navbar/page";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <div className="min-h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[14%] xlg:w-[14%] sm:w-[14%] ">
        <Link href="./" className="flex items-center justify-center lg:justfy-start gap-2">
        <Image src="/logo.png" alt="logo.png" width={32} height={32} />
        <span className="hidden lg:block">Forex Academy</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[86%] xlg:w-[86%] sm:w-[92%] overflow-scroll bg-gray-100">
        <Navbar/>
        {children}
        </div>
    </div>
   
  );
}
