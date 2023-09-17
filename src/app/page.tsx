import PostCard from '@/components/PostCard';

export default function Home() {
  return (
    <main className='grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 ,t-10'>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </main>
  );
}