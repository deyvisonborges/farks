"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.makeElement = void 0;
var fs = require("fs");
var JSDOM = require("jsdom").JSDOM;

function makeElement(tag, _a) {
  var children = _a.children;
  var dom = new JSDOM().window.document; // Use o document da instância JSDOM
  var el = dom.createElement(tag);

  if (typeof children === "string") {
    el.textContent = children;
  } else if (Array.isArray(children)) {
    children.forEach(function (child) {
      return el.appendChild(child);
    });
  } else if (children instanceof dom.Node) {
    el.appendChild(children);
  }

  return el;
}
exports.makeElement = makeElement;

var Button = makeElement("div", { children: "oi" });

function render() {
  var dom = new JSDOM(
    '\n    <html lang="en">\n      <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>Document</title>\n      </head>\n      <body>\n        '.concat(
      Button.outerHTML,
      "\n      </body>\n    </html>\n  "
    )
  );
  fs.writeFileSync("index.html", dom.serialize());
}
exports.render = render;
render();
