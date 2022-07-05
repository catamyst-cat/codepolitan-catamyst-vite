interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <div className="px-2 sm:px-5">{children}</div>;
}
