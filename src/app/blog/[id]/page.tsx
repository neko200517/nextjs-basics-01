import { getAllPostIds, getPsotDataById } from '@/app/lib/posts';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export const generateStaticParams = async () => {
  return getAllPostIds();
};

export default async function BlogDetail({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPsotDataById(params.id);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <p className='m-4'>
        {'ID : '}
        {post.id}
      </p>
      <p className='mb-8 text-xl font-bold'>{post.title}</p>
      <p className='px-10'>{post.body}</p>
      <Link href='/blog'>
        <div className='flex cursor-pointer mt-12 items-center'>
          <Image
            className='mr-3'
            src='/chevron-double-left.svg'
            width={24}
            height={24}
            alt='chevron-double-left'
          />
          <span>Back to blog page</span>
        </div>
      </Link>
    </Suspense>
  );
}
