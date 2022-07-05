import { HTMLElementProps } from "../types";

interface DividerProps extends HTMLElementProps {}

export function Divider({}: DividerProps) {
  return (
    <div className="my-5 border-teal-600 border-t-4 w-full max-w-sm"></div>
  );
}
