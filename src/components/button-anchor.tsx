import { HTMLAnchorElementProps } from "../types";

interface ButtonAnchorProps extends HTMLAnchorElementProps {}

export function ButtonAnchor({ href, children }: ButtonAnchorProps) {
  return (
    <a className="button" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
