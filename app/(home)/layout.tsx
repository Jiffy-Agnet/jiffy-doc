import { redirect } from 'next/navigation';

export default function Layout({ children }: LayoutProps<'/'>) {
  redirect('/docs');
}