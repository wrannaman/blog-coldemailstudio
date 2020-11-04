import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="-ml-2 mr-2 flex items-center md:hidden">
                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                  
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  
                  <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-shrink-0 flex items-center">
                <img className="block lg:hidden h-8 w-auto" src="/images/logo.png" alt="cold email studio logo" />
                <img className="hidden lg:block h-8 w-auto" src="/images/logo.png" alt="cold email studio logo" />
              </div>
              <div className="hidden md:ml-6 md:flex">
                <Link href="/">
                  <a href="#" className="inline-flex items-center px-1 pt-1 border-b-2 border-pink-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-pink-700 transition duration-150 ease-in-out">
                    Posts
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              
              <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                <button onClick={() => window.location = "https://coldemail.studio"} className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out" aria-label="Notifications">
                  Main Site
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
