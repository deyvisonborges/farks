type TextElements = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type ListElements = "ul" | "ol" | "li" | "dl" | "dt" | "dd";
type FormElements =
  | "form"
  | "input"
  | "button"
  | "textarea"
  | "select"
  | "label";
type MediaElements = "img" | "audio" | "video";
type TableElements = "table" | "tr" | "th" | "td" | "caption";
type SemanticElements =
  | "article"
  | "aside"
  | "footer"
  | "header"
  | "main"
  | "nav"
  | "section";
type InteractiveElements =
  | "a"
  | "button"
  | "details"
  | "summary"
  | "label"
  | "input";
type MetaElements = "head" | "meta" | "link" | "title";

export type AllHTMLTags =
  | TextElements
  | ListElements
  | FormElements
  | MediaElements
  | TableElements
  | SemanticElements
  | InteractiveElements
  | MetaElements;
