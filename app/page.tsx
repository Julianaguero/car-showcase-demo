
import {Hero, CarCatalogue } from '@/components';
import { HomeProps } from '@/types';

export default function Home({searchParams}: HomeProps  ) {

  return (
    <main className=" relative overflow-x-hidden">
      <Hero />
      <CarCatalogue searchParams={searchParams}/>
    </main>
  )
}
