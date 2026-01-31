import { put } from '@vercel/blob';

export default async function handler(request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  // สั่งบันทึกไฟล์ลง Vercel Blob
  const blob = await put(filename, request, {
    access: 'public',
  });

  return Response.json(blob);
}

export const config = {
  runtime: 'edge', // ใช้ Edge Runtime เพื่อความรวดเร็ว
};
