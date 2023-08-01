import PostsList from "@/components/PostsList";
import {AUTHOR_ID} from "@/config";
import * as postsService from "@/lib/database/posts";
import dayjs from "dayjs";
import ReactMarkdown from "react-markdown";

export default async function PostView({
  params: {slug},
}: {
  params: {slug: string};
}) {
  const post = await postsService.getPublishedBySlug(slug);
  const otherPosts = await postsService.getLatestPublishedPost(AUTHOR_ID, [
    slug,
  ]);

  if (!post) {
    return (
      <>
        <div className={`bg-purple-50 text-purple-950`}>
          <div className='inner'>
            <div className='font-bold mb-10'>Not Found</div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className={`dark:text-gray-100 text-gray-700`}>
        <div className={`bg-marked`}>
          <div className='inner  md:py-20 pt-20 pb-10'>
            <div className='font-bold color-purple text-4xl mb-4 text-center'>
              {post.title}
            </div>
            <div className='text-xs text-center text-gray-700 dark:text-gray-300'>
              {dayjs(post.createdAt).format("YYYY-MM-DD")}
            </div>
          </div>
        </div>
        <div className={`mt-20 mb-20`}>
          <div className='inner px-10'>
            <div className='post'>
              <ReactMarkdown>{post.content || ""}</ReactMarkdown>
            </div>
            {otherPosts?.length > 0 && (
              <div className='py-8 md:py-10 md:mt-8'>
                <div className='section-title'>Other Posts</div>
                <PostsList posts={otherPosts} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
