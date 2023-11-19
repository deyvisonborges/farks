/* eslint-disable @typescript-eslint/no-var-requires */
import * as path from "path";
const fs = require("fs");

type ChildSelector = {
  __childSelector: {
    [tag: string]: Record<string, unknown>
  }
}

type Style = {
  [attribute: string]: string | Record<string, string> 
} & ChildSelector


type StyleConfig = {
  [property: string]: string | Record<string, unknown>;
};

type StaileProps = {
  [key: string]: StyleConfig;
};

export function staile(options: StaileProps) {
  // if (!options.style) {
  //   console.error('No styles provided.')
  //   return
  // }
  console.log({} as typeof options)

  const classNames: { [key: keyof typeof options]: string } = {}; // Objeto para armazenar os nomes de classe

  const css = generateCSS(options.style, classNames); // Passando o objeto classNames para a função generateCSS

  // Escreva o CSS no arquivo ou faça o que desejar com ele
  fs.writeFileSync(path.resolve(__dirname, "styles.css"), css);

  return { classNames } as const;
}

function generateCSS(
  styleConfig: StyleConfig,
  classNames: { [key: string]: string },
  selector = ""
): string {
  let css = "";

  for (const property in styleConfig) {
    const styleValue = styleConfig[property];

    // Gere um nome de classe único
    const className = `class-${Math.random().toString(36).substr(2, 5)}`;

    // Adicione o nome de classe gerado ao objeto classNames
    classNames[property] = className;

    // Verifica se a propriedade é um seletor
    if (property === "__childSelector") {
      css += `.${className} > {\n`;
      css += generateCSS(styleValue as StyleConfig, classNames, selector);
      css += "}\n";
    } else if (property === "__universalSelector") {
      css += `.${className} * {\n`;
      css += generateCSS(styleValue as StyleConfig, classNames, selector);
      css += "}\n";
    } else {
      css += `.${className} {\n`;
      css += `${property}: ${JSON.stringify(styleValue)};\n`;
      css += "}\n";
    }
  }

  return css;
}

// Exemplo de uso
const usage = staile({
  container: {
    color: "red",
    fontSize: "16px",
    
    
  },
  content: {
    
  },
});

console.log(usage);

// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
// https://davidwalsh.name/add-rules-stylesheets
// https://medium.com/@ashusingh584/chokidar-11290855e2cb