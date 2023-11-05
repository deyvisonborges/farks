const fs = require("fs");
const { JSDOM } = require("jsdom");

export function makeElement(tag: any, { children }: { children: any }) {
  const el = document.createElement(tag) as HTMLElement;
  if (typeof children === "string") {
    el.textContent = children;
  } else if (Array.isArray(children)) {
    children.forEach((child) => el.appendChild(child));
  } else if (children instanceof Node) {
    el.appendChild(children);
  }
  return el;
}

export function makeClassName(length = 10) {
  const characters = ["a", "b", "c", "d", "e", "f", "farks"];
  const generated = Array.from({ length }, () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  });
  return `farks-${generated.join("")}`;
}

const Button = makeElement("div", { children: "oi" });

export function render() {
  const dom = new JSDOM(`
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        ${Button.outerHTML}
      </body>
    </html>
  `);

  fs.writeFileSync("index.html", dom.serialize());
}

render();
