import { HTMLElementProps } from "../types";

interface ButtonProps extends HTMLElementProps {}

export function Button({ children }: ButtonProps) {
  return (
    <button className="bg-teal-600 px-5 py-3 text-white rounded-md">
      {children}
    </button>
  );
}
