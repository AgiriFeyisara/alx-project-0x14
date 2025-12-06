import { ReactNode } from "react";
export interface ComponentsProps {
  children: ReactNode;
}
export interface ButtonProps {
  title: string;
  action?: () => void;
}
