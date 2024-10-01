'use client';
import {useState} from 'react';
import {saveOrUpdatePost} from './actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faSpinner} from '@fortawesome/free-solid-svg-icons';
import slugify from 'slugify';
import {Post} from '@prisma/client';
import {useRouter} from 'next/navigation';

import {useFormObject} from '@/hooks/useFormObject';

interface SaveStatus {
  status: 'saving' | 'success' | 'error';
  message?: string | null;
}

interface Props {
  defaultPost: Post;
  onSave: {
    action: 'redirect';
    url: string;
  };
}

export default function FormPost({defaultPost, onSave}: Readonly<Props>) {
  let router = useRouter();
  let [status, setStatus] = useState<SaveStatus | null>(null);
  const {fields, updateFields} = useFormObject<Post>(defaultPost);

  const save = async (data: FormData) => {
    setStatus({
      status: 'saving',
      message: null,
    });
    window.setTimeout(async () => {
      const post = fields;

      if (!post.title) {
        setStatus({
          status: 'error',
          message: 'Title is empty',
        });
        return;
      }

      post.slug = generateSlug(post.title);

      const rsp = await saveOrUpdatePost(post);
      if (rsp) {
        setStatus({
          status: 'success',
          message: 'Post saved successfully',
        });
        if (onSave?.action === 'redirect') {
          window.setTimeout(() => {
            router.push(onSave.url);
          }, 1000);
        }
      } else {
        setStatus({
          status: 'error',
          message: 'An error occurred while saving. Try again',
        });
      }
    }, 1);
  };

  const generateSlug = (title: string) => {
    const newSlug = slugify(title || '', {
      lower: true,
      strict: true,
    });
    return newSlug;
  };

  return (
    <div className='mt-10 mb-10'>
      <form>
        <div className='field'>
          <input
            id='title'
            name='title'
            type='text'
            className='w-full'
            placeholder='Post title...'
            value={fields?.title}
            onChange={(e) => updateFields('title', e.target.value)}
          />
        </div>
        <div className='field'>
          <textarea
            id='content'
            name='content'
            placeholder='Content...'
            value={fields?.content ?? ''}
            className='resize-none w-full'
            rows={10}
            onChange={(e) => updateFields('content', e.target.value)}
          />
        </div>
        <div className='field'>
          <input
            id='published'
            name='published'
            type='checkbox'
            value=''
            onChange={(e) => updateFields('published', e.target.checked)}
            checked={fields?.published}
            className='w-4 h-4 inline align-middle text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            htmlFor='published'
            className='ml-2 inline-block  text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Published
          </label>
        </div>
        <div className='field'>
          <div />
          <div className='flex gap-4 items-center'>
            <button
              className='button'
              disabled={status?.status === 'saving'}
              type='submit'
              formAction={save}
            >
              {status?.status === 'saving' ? (
                <FontAwesomeIcon icon={faSpinner} spin />
              ) : (
                <>
                  <FontAwesomeIcon icon={faSave} className='mr-2' />
                  Save Post
                </>
              )}
            </button>
            {status?.status === 'error' && (
              <div className='text-red-500'>{status.message}</div>
            )}
            {status?.status === 'success' && (
              <div className='text-emerald-600'>{status.message}</div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
