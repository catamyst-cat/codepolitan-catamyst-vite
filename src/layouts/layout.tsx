interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="px-2 sm:px-5 flex justify-center">
      <div className="max-w-5xl w-full">{children}</div>
    </div>
  );
}
