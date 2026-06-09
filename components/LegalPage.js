import fs from 'node:fs';
import path from 'node:path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const NAV = [
  { href: '/policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
  { href: '/delete-account', label: 'Delete Account' },
];

export default function LegalPage({ file, current }) {
  const md = fs.readFileSync(
    path.join(process.cwd(), 'content', file),
    'utf8'
  );

  return (
    <main className="page">
      <header className="topbar">
        <a href="/" className="brand">
          Insect ID Lens
        </a>
        <nav className="nav">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.href === current ? 'active' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <article className="card content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
      </article>
    </main>
  );
}
