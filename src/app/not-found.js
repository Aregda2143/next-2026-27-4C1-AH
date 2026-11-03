import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>404 – nie znaleziono strony</h1>
      <p>Taka strona nie istnieje.</p>
      <Link href="/">Wróć na stronę główną</Link>
    </main>
  );
}