import PostsList from "@/components/PostsList";
import {AUTHOR_ID} from "@/config";
import * as postsService from "@/lib/database/posts";
import dayjs from "dayjs";
import ReactMarkdown from "react-markdown";
import {Post} from "@prisma/client";
import {generateHash} from "@/helpers/posts";
import {Metadata, ResolvingMetadata} from "next";

interface Props {
  params: {id: string; slug: string};
  searchParams?: {[key: string]: string | string[] | undefined};
}

async function getPost({params: {id, slug}, searchParams}: Props) {
  const {hash} = searchParams || {};
  let post: Post | null = null;
  if (hash === generateHash(slug)) {
    post = await postsService.getById(parseInt(id, 10));
  } else {
    post = await postsService.getPublishedById(parseInt(id, 10));
  }
  return post;
}
export async function generateMetadata(
  {params, searchParams}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost({params, searchParams});

  return {
    title: post.title,
  };
}

export default async function PostView({
  params,
  searchParams,
}: {
  params: {id: string; slug: string};
  searchParams?: {[key: string]: string | string[] | undefined};
}) {
  const {slug} = params;
  const post = await getPost({params, searchParams});
  const otherPosts = await postsService.getLatestPublishedPost(AUTHOR_ID, [
    slug,
  ]);

  if (!post) {
    return (
      <>
        <div className={`dark:text-gray-100 text-gray-700`}>
          <div className='inner  md:py-40 py-20'>
            <div className='font-bold mb-10 text-center'>Post Not Found :(</div>
            {otherPosts?.length > 0 && (
              <div className='py-8 md:py-10 md:mt-0'>
                <div className='section-title'>Other Posts</div>
                <PostsList posts={otherPosts} />
              </div>
            )}
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
            {!post.published && (
              <div className='text-center text-gray-700 dark:text-gray-300 mb-10 -mt-10'>
                <span className='rounded bg-gray-200 p-2 text-gray-700'>
                  Draft
                </span>
              </div>
            )}
            <div className='post'>
              <ReactMarkdown>{post.content || ""}</ReactMarkdown>
            </div>
            {otherPosts?.length > 0 && (
              <div className='py-8 md:py-10 md:mt-0'>
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
