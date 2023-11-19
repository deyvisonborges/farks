/**
 * A ideia nesse codigo eh gerar uma pagina com inumeros componentes, porem,
 * eu consigo injetar a ordem de prioridade deles.
 *
 * Por exemplo, eu posso renderizar primeiramente determinados
 * componentes, posso renderizar depois de renderizar quaisquer outros componentes,
 *
 * EU posso injetar os componentes sincrones e posso especificar os assincronos
 */

export function inject() {
  const pageEl = document.createElement("div");

  const syncComponents: Node[] = [];
  const asyncComponents: Node[] = [];

  syncComponents.map((sy) => pageEl.appendChild(sy));
  syncComponents.map((sy) => pageEl.appendChild(sy));

  // new Promise(resolve => {
  //   asyncComponents.
  // })
}
