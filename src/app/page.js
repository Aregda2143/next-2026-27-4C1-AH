import Link from 'next/link';
import Dashboard from '@/components/Dashboard';
import CounterWithLog from '@/components/CounterWithLog';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Witaj na naszej stronie głównej!</h1>
      <p>To jest pierwsza strona stworzona w Next.js z App Routerem.</p>
      <Link href="/about">Przejdź do strony O nas</Link>

      <Dashboard />

      <h2>CounterWithLog</h2>
      <CounterWithLog />
    </main>
  );
}