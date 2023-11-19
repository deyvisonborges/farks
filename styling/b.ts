/* eslint-disable @typescript-eslint/no-var-requires */
import * as path from "path";
const fs = require("fs");

type StyleConfig = {
  [property: string]: string | Record<string, unknown>;
};

type StaileProps = {
  [key: string]: StyleConfig;
};

export function staile(options: StaileProps): { [key: string]: string } {
  const classNames: { [key: string]: string } = {};

  for (const key in options) {
    const style = options[key];
    const className = `staile__${key}__${Math.random()
      .toString(36)
      .substr(2, 5)}`;
    classNames[key] = className;
  }

  return classNames;
}

function generateCSS(
  styleConfig: StyleConfig,
  classNames: { [key: string]: string },
  selector = ""
): string {
  let css = "";

  for (const property in styleConfig) {
    const styleValue = styleConfig[property];

    if (property === "__childSelector") {
      if (typeof styleValue === "object") {
        // Handling child selector
        const childSelector = generateCSS(styleValue as StyleConfig, classNames, selector);
        for (const childTag in styleValue) {
          css += `.${classNames[property]} ${childTag} {\n${childSelector}\n}\n`;
        }
      }
    } else if (property === "__universalSelector") {
      if (typeof styleValue === "object") {
        // Handling universal selector
        const universalSelector = generateCSS(styleValue as StyleConfig, classNames, selector);
        css += `.${classNames[property]} * {\n${universalSelector}\n}\n`;
      }
    } else {
      css += `.${classNames[property]} {\n${property}: ${JSON.stringify(styleValue)};\n}\n`;
    }
  }

  return css;
}

// Defina o tipo para as classes geradas
type GeneratedStyles = { [key: string]: string };

// Use o tipo correto para 'styles'
const styles: GeneratedStyles = staile({
  container: {
    color: "red",
    fontSize: "16px",
    __childSelector: {
      a: {
        color: 'blue'
      }
    }
  },
  content: {},
});

console.log(styles);

// Função para renderizar a árvore de estilos
function renderStyleTree(data: StaileProps) {
  const styleTree: StaileProps = {};

  for (const key in data) {
    styleTree[key] = data[key];
  }

  return styleTree;
}

const renderedStyles = renderStyleTree(styles as any);

console.log(renderedStyles);
