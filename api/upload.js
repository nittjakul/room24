import { put } from '@vercel/blob';

export default async function handler(request, response) {
  const blob = await put('folder/file.txt', request, { access: 'public' });
  return response.status(200).json(blob);
}
