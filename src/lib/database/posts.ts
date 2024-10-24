import {PrismaClient, Post} from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllPostForAuthor(authorId: number) {
  const posts = await prisma.post.findMany({
    where: {
      authorId,
    },
    include: {
      author: true,
    },
    orderBy: {
      id: 'desc',
    },
  });

  return posts;
}
export async function getById(id: number) {
  const post = await prisma.post.findFirst({
    where: {
      id,
    },
  });

  return post as Post;
}

export async function getPublishedById(id: number) {
  const post = await prisma.post.findFirst({
    where: {
      id,
      published: true,
    },
  });

  return post as Post;
}

export async function createPost(data: Post) {
  const post = await prisma.post.create({
    data,
  });
  return post;
}

export async function updatePost(data: Post) {
  const post = await prisma.post.update({
    where: {
      id: data.id,
    },
    data,
  });
  return post;
}

export async function getBySlug(slug: string) {
  const post = await prisma.post.findFirst({
    where: {
      slug,
    },
  });

  return post as Post;
}

export async function getPublished(authorId: number) {
  const posts = await prisma.post.findMany({
    where: {
      authorId,
      published: true,
    },
    orderBy: {
      id: 'desc',
    },
  });

  return posts;
}

export async function getPublishedBySlug(slug: string) {
  const post = await prisma.post.findFirst({
    where: {
      slug,
      published: true,
    },
  });

  return post as Post;
}

export async function getLatestPublishedPost(
  authorId: number,
  excludeSlugs: string[] = []
) {
  const posts = await prisma.post.findMany({
    where: {
      authorId,
      published: true,
      slug: {
        notIn: excludeSlugs,
      },
    },
    orderBy: {
      id: 'desc',
    },
  });

  return posts;
}
