import Link from 'next/link';
import Search from './Search';

export default function Navbar() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-between gap-3 py-4 px-6 sm:flex-row sm:px-0">
      <Link href="/" className="text-white text-3xl font-semibold">
        Star Wars Universe
      </Link>
      <Search />
    </div>
  );
}
