import { HTMLAnchorElementProps } from "../types";

interface AnchorProps extends HTMLAnchorElementProps {}

export function Anchor({ href, children }: AnchorProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
