import Link from "next/link";

import FormPost from "@/app/(admin)/admin/posts/FormPost";
import {AUTHOR_ID} from "@/config";
import {Post} from "@prisma/client";

export default async function Admin() {
  return (
    <>
      <div className={`bg-marked shadow`}>
        <div className='inner'>
          <div className='py-10 pt-20'>
            <div className='text-xl ml-1 mb-4'>
              <Link href='/admin'>Admin</Link> &raquo;
            </div>
            <div className='text-4xl font-bold'>Create post</div>
          </div>
        </div>
      </div>
      <div>
        <div className='inner'>
          <FormPost
            defaultPost={
              {
                published: true,
                authorId: AUTHOR_ID,
              } as Post
            }
          />
        </div>
      </div>
    </>
  );
}
