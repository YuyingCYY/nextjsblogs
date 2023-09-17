'use client';

import { FormInputPost } from '@/types';
import { Tag } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

  // 獲取 Tag 列表
  const { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
    queryKey: ['tags'],
    queryFn: async () => {
      const res = await axios.get('/api/tags');
      return res.data;
    },
  });

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className='flex flex-col items-center justify-center gap-5 mt-10'
    >
      <input
        type='text'
        {...register('title', { required: true })}
        placeholder='文章標題'
        className='input input-bordered w-full max-w-lg'
      />

      <textarea
        {...register('content', { required: true })}
        className='textarea textarea-bordered w-full max-w-lg'
        placeholder='內容...'
      ></textarea>

      {isLoadingTags ? (
        <span className='loading loading-ring loading-md'></span>
      ) : (
        <select
          {...register('tagId', { required: true })}
          className='select select-bordered w-full max-w-lg'
          defaultValue={''}
        >
          <option disabled value=''>
            請選擇
          </option>
          {dataTags?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      )}

      <button type='submit' className='btn btn-primary w-full max-w-lg'>
        {isEditing ? '更新' : '新增'}
      </button>
    </form>
  );
};

export default FormPost;
