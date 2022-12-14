import { Footer } from "../contents";
import { HTMLElementProps } from "../types";

interface LayoutProps extends HTMLElementProps {}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="px-5 flex flex-col items-center border-t-8 border-teal-500">
      {/* <Navigation /> */}

      <div className="max-w-5xl w-full flex-col items-center">{children}</div>

      <Footer />
    </div>
  );
}
