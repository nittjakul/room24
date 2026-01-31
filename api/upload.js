import { put } from '@vercel/blob';

export default async function handler(request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  const blob = await put(filename, request, {
    access: 'public',
  });

  return Response.json(blob);
}

export const config = { runtime: 'edge' };
