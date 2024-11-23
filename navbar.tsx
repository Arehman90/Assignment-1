import Link from "next/link";


export default function NavBar() {
    return (
  
      <div className="bg-gradient-to-r from-gray-300 to-gray-400 hover:shadow-md text-black flex space-x-32   text-xl p-3 	">
        <h1 className=" font-bold  text-3xl ">My Website</h1>
        <Link href="/"  className=" hover:text-gray-200" >Home</Link>
        <Link href="/education" className=" hover:text-gray-200 " >Education</Link>
        <Link href="/portfolio" className=" hover:text-gray-200">Portfolio</Link>
        <Link href="/experience" className=" hover:text-gray-200">Experience</Link>
        <Link href="/contact-us" className=" hover:text-gray-200">Contact-us</Link>
        
      </div>
      
    )
};
// from-teal-600 to-teal-400 text-gray-200