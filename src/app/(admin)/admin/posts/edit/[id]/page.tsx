import {getById} from '@/lib/database/posts';
import FormPost from '@/app/(admin)/admin/posts/FormPost';

export default async function PostEdit({
  params,
}: Readonly<{params: Promise<{id: string}>}>) {
  const post = await getById(Number.parseInt((await params).id, 10));
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
              action: 'redirect',
              url: '/admin',
            }}
          />
        </div>
      </div>
    </>
  );
}
