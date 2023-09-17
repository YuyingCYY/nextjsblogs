'use client';

import { FormInputPost } from '@/types';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

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

      <select
        {...register('tag', { required: true })}
        className='select select-bordered w-full max-w-lg'
        defaultValue={''}
      >
        <option disabled value=''>
          請選擇
        </option>
        <option>javascript</option>
        <option>java</option>
        <option>kotlin</option>
      </select>

      <button type='submit' className='btn btn-primary w-full max-w-lg'>
        {isEditing ? '更新' : '新增'}
      </button>
    </form>
  );
};

export default FormPost;
