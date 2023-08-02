import {getAllPostForAuthor, getById} from "@/lib/database/posts";
import Link from "next/link";
import FormPost from "@/app/(admin)/admin/posts/FormPost";
import {redirect} from "next/navigation";
import {redirectTo} from "@/lib/redirectTo";

export default async function PostEdit({params: {id}}: {params: {id: string}}) {
  const post = await getById(parseInt(id, 10));
  return (
    <>
      <div className={`bg-marked shadow`}>
        <div className='inner'>
          <div className='py-10 pt-20'>
            <div className='text-4xl font-bold'>Edit post</div>
          </div>
        </div>
      </div>
      <div>
        <div className='inner'>
          <FormPost
            defaultPost={post}
            onSave={{
              action: "redirect",
              url: "/admin",
            }}
          />
        </div>
      </div>
    </>
  );
}
