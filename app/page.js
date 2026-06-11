export const metadata = {
  title: 'Insect ID Lens — Legal',
};

const LINKS = [
  {
    href: '/policy',
    title: 'Privacy Policy',
    desc: 'How we collect, use, and protect your information.',
  },
  {
    href: '/terms',
    title: 'Terms of Use',
    desc: 'The rules and agreement for using Insect ID Lens.',
  },
  {
    href: '/delete-account',
    title: 'Delete Account',
    desc: 'Request deletion of your account and associated data.',
  },
];

export default function Home() {
  return (
    <main className="page">
      <section className="home-hero">
        <h1>Insect ID Lens</h1>
        <p>Legal documents and account information.</p>
      </section>

      <div className="tiles">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className="tile">
            <h2>{link.title}</h2>
            <p>{link.desc}</p>
          </a>
        ))}
      </div>

      <footer className="footer">
        © 2026 Insect ID Lens · support.customer.dev@gmail.com
      </footer>
    </main>
  );
}
