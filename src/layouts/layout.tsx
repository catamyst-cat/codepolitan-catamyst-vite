import { Footer } from "../contents";
import { HTMLElementProps } from "../types";

interface LayoutProps extends HTMLElementProps {}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="px-5 flex flex-col items-center border-t-8 border-teal-500">
      <div className="max-w-6xl w-full">{children}</div>

      <Footer />
    </div>
  );
}
