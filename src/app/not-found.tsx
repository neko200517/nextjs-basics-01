import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <div className='text-center'>
      <p className='mb-8 text-xl font-bold'>Not Found</p>
      <p>Could not find requested resource</p>
      <Link href='/'>
        <div className='flex cursor-pointer mt-12 items-center justify-center'>
          <Image
            className='mr-3'
            src='/chevron-double-left.svg'
            width={24}
            height={24}
            alt='chevron-double-left'
          />
          <span>Return to Home</span>
        </div>
      </Link>
    </div>
  );
}
