'use client';

import Link from 'next/link';

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  return (
    <div className="container mx-auto">
      <h1>Filme não encontrado...</h1>
      <button onClick={reset} className="text-blue-700 underline">
        Tente novamente
      </button>
      <p>ou</p>
      <Link href="/" className="text-blue-700 underline">
        Volte à página inicial
      </Link>
    </div>
  );
}
