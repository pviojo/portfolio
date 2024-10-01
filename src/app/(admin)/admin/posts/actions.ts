'use server';

import {createPost, updatePost} from '@/lib/database/posts';
import {revalidatePath} from 'next/cache';
import {Post} from '@prisma/client';

export async function saveOrUpdatePost(post: Post) {
  if (post.id) {
    await updatePost(post);
  } else {
    if (!post.title) {
      return false;
    }
    await createPost(post);
  }
  revalidatePath('/posts');
  revalidatePath('/admin');
  revalidatePath('/');
  return true;
}
