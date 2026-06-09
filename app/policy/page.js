import LegalPage from '../../components/LegalPage';

export const metadata = {
  title: 'Privacy Policy — Insect ID Lens',
};

export default function Page() {
  return <LegalPage file="privacy-policy.md" current="/policy" />;
}
