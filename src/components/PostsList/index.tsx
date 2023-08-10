import {faFileText} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Post} from "@prisma/client";
import dayjs from "dayjs";
import removeMarkdown from "markdown-to-text";
import Link from "next/link";

export default function PostsList({posts}: {posts: Post[]}) {
  return (
    <ul>
      {posts.map((post) => (
        <li
          key={post.id}
          className=' py-4 border-b border-gray-100 dark:border-gray-400 last:border-0'
        >
          <div className='text-lg color-purple'>
            <Link href={`/posts/${post.id}/${post.slug}`}>
              <FontAwesomeIcon icon={faFileText} className='mr-2' />
              <span className='text-lg color-purple underline'>
                {post.title}
              </span>
            </Link>
          </div>
          <div className='text-xs ml-6 mb-1'>
            {dayjs(post.createdAt).format("YYYY-MM-DD")}
          </div>
        </li>
      ))}
    </ul>
  );
}
