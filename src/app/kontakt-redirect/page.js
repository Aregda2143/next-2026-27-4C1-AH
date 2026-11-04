import { redirect } from 'next/navigation';

async function submitContact(formData) {
  'use server';

  const email = formData.get('email');
  console.log('Zgłoszenie z przekierowaniem:', email);
  // zapisanie danych...
  redirect('/dziekujemy');
}

export default function KontaktRedirectPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Kontakt z przekierowaniem</h1>
      <form action={submitContact}>
        <input name="email" type="email" placeholder="Twój e-mail" required />
        <button type="submit">Wyślij</button>
      </form>
    </main>
  );
}