import { BookOpenCheck } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='navbar bg-gray-700'>
      <div className='container'>
        <div className='flex-1'>
          <Link href='/'>
            <BookOpenCheck color='blue' />
          </Link>
        </div>
        <div className='flex-none'>
          <Link href='/create' className='btn btn-ghost'>
            Create post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
