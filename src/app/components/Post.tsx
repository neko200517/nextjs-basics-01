import Link from 'next/link';
import { PostType } from '../types';

type PostProps = {
  post: PostType;
};

const Post = (props: PostProps) => {
  const { post } = props;
  return (
    <div>
      <span>{post.id}</span>
      {' : '}
      <Link href={`/blog/${post.id}`}>
        <span className='cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200'>
          {post.title}
        </span>
      </Link>
    </div>
  );
};

export default Post;
