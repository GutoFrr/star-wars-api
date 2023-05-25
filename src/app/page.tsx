import Characters from '@/components/Characters';
import LoadingScreen from '@/components/Loading';
import Movies from '@/components/Movies';
import Title from '@/components/Title';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <section>
        <Title title="Movies" />
        <Suspense fallback={<LoadingScreen title="Carregando filmes..." />}>
          {/* @ts-expect-error Async Server Component  */}
          <Movies />
        </Suspense>
      </section>
      <section>
        <Title title="Characters" />
        <Suspense fallback={<LoadingScreen title="Carregando personagens..." />}>
          {/* @ts-expect-error Async Server Component */}
          <Characters />
        </Suspense>
      </section>
    </>
  );
}
