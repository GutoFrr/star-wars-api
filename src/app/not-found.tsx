'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="container mx-auto">
      <h2>Página não encontrada...</h2>
      <button onClick={() => router.back()} className="text-blue-700 underline">
        Voltar à página inicial
      </button>
    </div>
  );
}
