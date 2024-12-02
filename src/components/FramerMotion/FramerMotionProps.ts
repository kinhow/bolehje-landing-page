import { HTMLAttributes } from "react";
import { MotionProps } from "motion/react";

export type ClassNameWithIdProps =  Pick<HTMLAttributes<HTMLElement>, "id" | "className">;
export type MotionFramerProps = MotionProps & ClassNameWithIdProps & { delay?: number };
 