import PostsList from "@/components/PostsList";
import {AUTHOR_ID} from "@/config";
import * as postsService from "@/lib/database/posts";
import dayjs from "dayjs";

export default async function PostsAll() {
  const posts = await postsService.getPublished(AUTHOR_ID);

  return (
    <>
      <div className={`dark:text-gray-100 text-gray-700`}>
        <div className='inner px-10 pt-10'>
          {posts?.length > 0 && (
            <div className='py-8 md:py-10 md:mt-0'>
              <div className='section-title'>Posts</div>
              <PostsList posts={posts} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
