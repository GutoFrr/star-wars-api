const BASE_URL = process.env.BASE_URL!;
const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export async function clientSideRequest(endpoint: string, options?: RequestInit) {
  const res = await fetch(NEXT_PUBLIC_BASE_URL + endpoint, options);

  const data = await res.json();

  return data;
}

export async function serverSideRequest(endpoint: string, options?: RequestInit) {
  const res = await fetch(BASE_URL + endpoint, options);

  const data = await res.json();

  return data;
}
