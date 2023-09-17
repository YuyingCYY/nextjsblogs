import BackButton from '@/components/BackButton';
import ButtonAction from '@/components/ButtonAction';
import { db } from '@/lib/db';
import { FC } from 'react';

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

async function getPost(id: string) {
  const res = await db.post.findFirst({
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
    where: {
      id: id,
    },
  });
  return res;
}

const BlogDetailPage: FC<BlogDetailPageProps> = async ({ params }) => {
  const post = await getPost(params.id);

  return (
    <div>
      <BackButton />
      <div className='mb-8'>
        <h2 className='text-2xl font-bold my-4'>{post?.title}</h2>
        <ButtonAction id={params.id} />
      </div>
      <span className='badge badge-neutral'>{post?.tag.name}</span>
      <p className='text-slate-400'>{post?.content}</p>
    </div>
  );
};

export default BlogDetailPage;
