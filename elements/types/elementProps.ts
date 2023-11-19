import { CSSProperties } from "../../styling/types/css-properties";
import { AllHTMLTags } from "../../styling/types/html-elements";

export type ElementProps = {
  tag: AllHTMLTags;
  style?: CSSProperties;
  children?: string | Node | Node[];
  nestedChildren?: any; // falta implementar
};
