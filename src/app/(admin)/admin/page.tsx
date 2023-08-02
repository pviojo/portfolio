import {AUTHOR_ID} from "@/config";
import {generateHash} from "@/helpers/posts";
import {getAllPostForAuthor} from "@/lib/database/posts";
import {faEdit, faFile} from "@fortawesome/free-regular-svg-icons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default async function Admin() {
  const posts = await getAllPostForAuthor(AUTHOR_ID);
  return (
    <>
      <div className={`bg-marked  shadow`}>
        <div className='inner '>
          <div className='py-10 pt-20'>
            <div className='text-4xl font-bold'>Admin</div>
          </div>
        </div>
      </div>
      <div className={`dark:text-gray-100 text-gray-700 py-4`}>
        <div className='inner'>
          <div className='px-1'>
            <Link href='/admin/posts/create'>
              <button className='button'>
                <FontAwesomeIcon icon={faPlus} className='mr-2' />
                Create Post
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={`dark:text-gray-100 text-gray-700`}>
        <div className='inner'>
          <div>
            {posts?.length > 0 ? (
              <table className='table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      Id
                    </th>
                    <th scope='col' className='px-6 py-3 text-center'>
                      Status
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Title
                    </th>

                    <th scope='col' className='px-6 py-3 text-right'></th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr
                      key={post.id}
                      className='bg-white border-b dark:border-gray-700 even:bg-gray-50 dark:bg-transparent dark:even:bg-gray-900'
                    >
                      <td className='px-6 py-4'>
                        <Link
                          className='color-purple hover:text-purple-700 underline'
                          href={`/admin/posts/edit/${post.id}`}
                        >
                          {post.id}
                        </Link>
                      </td>
                      <td className='px-6 py-4 w-auto text-center'>
                        {post.published ? (
                          <span className='rounded bg-green-500 p-2 text-white'>
                            Published
                          </span>
                        ) : (
                          <span className='rounded bg-gray-200 p-2 text-gray-700'>
                            Draft
                          </span>
                        )}
                      </td>
                      <td className='px-6 py-4'>
                        <Link
                          className='color-purple hover:text-purple-700 underline'
                          href={`/admin/posts/edit/${post.id}`}
                        >
                          {post.title}
                        </Link>
                      </td>
                      <td className='px-6 py-4 w-auto text-right'>
                        <Link
                          href={`/posts/${post.id}/${post.slug}${
                            !post.published
                              ? `?hash=${generateHash(post.slug)}`
                              : ""
                          }`}
                          className='mr-4'
                        >
                          <div className='button-sm'>
                            <FontAwesomeIcon icon={faFile} className='mr-2' />
                            Ver
                          </div>
                        </Link>

                        <Link href={`/admin/posts/edit/${post.id}`}>
                          <div className='button-sm'>
                            <FontAwesomeIcon icon={faEdit} className='mr-2' />
                            Editar
                          </div>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className='text-center m-10 my-20'>No posts found</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
