import { AllHTMLTags } from "./html-elements";

type CustomClassName = string;

/**
 * @description
 * This S is a StyleConfig type config
 * 
 * @example
 * 
 * ```ts
 * const a: ChildSelector<{ color: "red" }> = {
 *   __childSelector: {
 *     a: {
 *       color: "red",
 *     },
 *   },
 * };
```
 * 
*/
export type ChildSelector<S> = {
  __childSelector: {
    [k in AllHTMLTags | CustomClassName]?: S;
  };
};
