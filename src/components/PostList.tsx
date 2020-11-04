import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({ posts, tags, pagination }: Props) {
  return (
    <div className="w-3/4" style={{ margin: '0 auto' }}>
      <div className="">
        <div className="bg-white shadow overflow-hidden sm:rounded-md" style={{ margin: '0 auto' }}>
          <ul className={"post-list"}>
            {posts.map((it, i) => (
              <PostItem post={it} key={i} />
            ))}
          </ul>
        </div>
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
            as: (page) => (page === 1 ? null : "/posts/page/" + page),
          }}
        />
      </div>
    </div>
  );
}
