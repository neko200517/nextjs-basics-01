import { notFound } from 'next/navigation';
import { PostType } from '../types';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export const getAllPostsData = async (): Promise<PostType[]> => {
  const res = await fetch(new URL(apiUrl));

  if (!res.ok) {
    throw new Error('Error!');
  }

  return await res.json();
};

export const getAllPostIds = async () => {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post: any) => ({
    id: String(post.id),
  }));
};

export const getPsotDataById = async (id: string): Promise<PostType> => {
  const res = await fetch(new URL(`${apiUrl}/${id}`));

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error('Error!');
  }

  return await res.json();
};
