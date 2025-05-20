import "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      span: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLSpanElement>,
        HTMLSpanElement
      >;
    }
  }
}
