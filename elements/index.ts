import { ElementProps } from "./types/elementProps";

export function createElement(props: ElementProps) {
  const el = document.createElement(props.tag) as HTMLElement;

  if (props.style && Object.keys(props.style).length > 0) {
  }

  if (typeof props.children == "string") {
    el.appendChild(document.createTextNode(props.children));
    return;
  }

  if (!Array.isArray(props.children)) {
    el.appendChild(props.children!);
    return;
  }

  if (Array.isArray(props.children)) {
    for (const child in props.children) {
      if (typeof child !== "string") {
        el.appendChild(child);
      }
    }
  }

  return {
    component: el,
  };
}
