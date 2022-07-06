import { HTMLElementProps } from "../types";

interface ButtonProps extends HTMLElementProps {}

export function Button({ children }: ButtonProps) {
  return <button className="button">{children}</button>;
}
