import LegalPage from '../../components/LegalPage';

export const metadata = {
  title: 'Terms of Use — Insect ID Lens',
};

export default function Page() {
  return <LegalPage file="terms-of-use.md" current="/terms" />;
}
