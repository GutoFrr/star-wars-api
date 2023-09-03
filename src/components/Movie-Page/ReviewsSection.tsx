'use client';

import { EventHandler } from '@/interfaces/handleSubmit';
import FormRow from '../FormRow';
import Title from '../Title';
import { useState } from 'react';
import { Review } from '@/interfaces/review';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);

  async function handleSubmit(e: EventHandler) {
    e.preventDefault();

    try {
      const form = new FormData(e.target);
      const data = Object.fromEntries(form.entries());

      setReviews((prevReviews: Review[] | any[]) => [...prevReviews, data]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <Title title="Escreva uma avaliação" />
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5 mb-8">
        <FormRow labeltext="Seu nome" name="name" type="text" />
        <FormRow labeltext="Seu email" name="email" type="email" />
        <div className="flex flex-col col-span-2">
          <label htmlFor="review" className="">
            Avaliação
          </label>
          <textarea
            className="border border-theme-gray-200 rounded-[10px] py-2 px-3 resize-none h-32"
            name="review"></textarea>
        </div>
        <button
          type="submit"
          className="bg-theme-green py-2 px-10 rounded-[10px] w-fit col-start-2 place-self-end">
          Publicar
        </button>
      </form>
      {reviews?.map((item, index) => (
        <div key={index} className="flex flex-col border border-theme-gray-200 rounded-[10px]">
          <h6 className="font-medium italic p-2 bg-theme-gray-200 rounded-t-[10px]">{item.name}</h6>
          <p className="font-light p-2">{item.review}</p>
        </div>
      ))}
    </section>
  );
}
