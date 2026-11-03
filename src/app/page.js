import Link from 'next/link';
import Dashboard from '@/components/Dashboard';
import CounterWithLog from '@/components/CounterWithLog';
import TimerToggle from '@/components/TimerToggle';
import CounterDashboard from '@/components/CounterDashboard';
import ContextCounterDisplay from '@/components/ContextCounterDisplay';
import ContextCounterButton from '@/components/ContextCounterButton';
import SimpleCounter from '@/components/SimpleCounter';
import Badge from '@/components/Badge';
import Card from '@/components/Card';
import GreetingsFetcher from '@/components/GreetingsFetcher';
import ContactFormClient from '@/components/ContactFormClient';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Witaj na naszej stronie głównej!</h1>
      <p>To jest pierwsza strona stworzona w Next.js z App Routerem.</p>
      <Link href="/about">Przejdź do strony O nas</Link>
      <span className="highlight">Ważna informacja</span>

      <Dashboard />

      <h2>CounterWithLog</h2>
      <CounterWithLog />
      <h2>TimerToggle</h2>
      <TimerToggle />
      <h2>CounterDashboard</h2>
      <CounterDashboard />
      <h2>Krok 6: Context (ContextCounterDisplay + ContextCounterButton)</h2>
      <p style={{ fontSize: '0.9rem', color: '#555' }}>
        Poniżej dwa <strong>osobne, niepowiązane propsami komponenty</strong> (dwa osobne pliki).
        Łączy je wyłącznie wspólny <code>CounterContext</code> z <code>layout.js</code>.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ border: '2px solid #2563eb', borderRadius: 8, padding: '1rem', flex: '1 1 200px' }}>
          <p style={{ fontWeight: 'bold', color: '#2563eb', margin: 0 }}>
            Plik: ContextCounterDisplay.js
          </p>
          <ContextCounterDisplay />
        </div>
        <div style={{ border: '2px solid #16a34a', borderRadius: 8, padding: '1rem', flex: '1 1 200px' }}>
          <p style={{ fontWeight: 'bold', color: '#16a34a', margin: 0 }}>
            Plik: ContextCounterButton.js
          </p>
          <ContextCounterButton />
        </div>
      </div>
      <p style={{ fontSize: '0.85rem', color: '#777' }}>
        Kliknij przycisk w zielonej ramce (ContextCounterButton) — wartość w niebieskiej ramce
        (ContextCounterDisplay) zmieni się automatycznie, mimo że to dwa różne komponenty.
      </p>
      <h2>SimpleCounter</h2>
      <SimpleCounter />
      <Badge>Nowość</Badge>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card title="Punkt 1">Treść 1</Card>
        <Card title="Punkt 2">Treść 2</Card>
      </div>
       <h2>GreetingsFetcher</h2>
      <GreetingsFetcher />
      <h2>Formularz</h2>
      <ContactFormClient />
    </main>
    

  );
}