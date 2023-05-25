import { FormEvent } from "react";

export interface EventHandler extends FormEvent<HTMLFormElement> {
  target: HTMLFormElement;
}