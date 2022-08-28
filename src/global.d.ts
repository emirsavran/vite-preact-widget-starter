import { JSX } from "preact";

export = JSX;
export as namespace JSX;

declare global {
  interface Window {
    app: { setName?: (name: string) => void };
  }
}
