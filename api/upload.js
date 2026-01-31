import { put } from '@vercel/blob';

export default async function handler(request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename') || 'image.png';

  try {
    const blob = await put(filename, request, {
      access: 'public',
    });
    return new Response(JSON.stringify(blob), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export const config = { runtime: 'edge' };
