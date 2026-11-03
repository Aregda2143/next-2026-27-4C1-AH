export async function GET() {
  const data = [
    { id: 1, message: 'Cześć!' },
    { id: 2, message: 'Miłej nauki Next.js!' },
  ];

  return Response.json(data);
}