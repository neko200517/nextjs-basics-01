import { Metadata } from 'next';
import Post from '../components/Post';
import { getAllPostsData } from '../lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Blog() {
  const posts = await getAllPostsData();

  return (
    <ul className='m-10'>
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </ul>
  );
}
