import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
};

{/* <a>
        <Date date={parseISO(post.date)} />
        <h2>{post.title}</h2>
        <style jsx>
          {`
            a {
              color: #222;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
      </a> */}

export default function PostItem({ post }: Props) {  
  return (
    <Link href={"/posts/" + post.slug}>
      <li className="border-b border-gray-200">
        <a href="#" className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
          <div className="px-4 py-4 sm:px-6">
            <div className="flex items-center">
              <div className="text-sm leading-5 font-medium text-pink-600 truncate">
                {post.title}
              </div>
              <div className="ml-2 flex-shrink-0 flex">
                {post.tags.map(tag => (
                  <span key={`${post.title}${tag}`} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {tag}
                  </span>
                ))}
                
              </div>
            </div>
            <div className="mt-2 sm:flex sm:justify-between">
              <div className="sm:flex">
                <div className="mr-6 flex items-center text-sm leading-5 text-gray-500">
                  
                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>
                    <Date date={parseISO(post.date)} />
                  </span>
                </div>
              </div>
              <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                <div className="ml-5 flex-shrink-0">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </a>
      </li> 
    </Link>
  );
}
