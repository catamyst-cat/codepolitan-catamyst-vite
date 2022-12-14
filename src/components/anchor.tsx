import { HTMLAnchorElementProps } from "../types";

interface AnchorProps extends HTMLAnchorElementProps {}

export function Anchor(props: AnchorProps) {
  return (
    <a target="_blank" rel="noreferrer" {...props}>
      {props.children}
    </a>
  );
}
