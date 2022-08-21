import { Header } from '@components/header/Header';
import {
  contentID,
  SkipToContent,
} from '@components/shared/skip-to-content/SkipToContent';

interface LayoutProps {
  children: React.ReactNode;
}

export const Default = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen grow flex-col">
      <SkipToContent />
      <Header />
      <div id={contentID} />
      {children}
    </div>
  );
};
