"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import clsx from "clsx";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../components/Tooltip";
import styles from "./Slider.module.css";

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  showTooltip?: boolean;
}

const Slider = React.forwardRef<HTMLElement, SliderProps>(
  ({ className, showTooltip = false, ...props }, ref) => {
    const [value, setValue] = React.useState<number[]>(
      (props.defaultValue as number[]) ?? [0]
    );
    const [showTooltipState, setShowTooltipState] = React.useState(false);
    const handlePointerDown = () => {
      setShowTooltipState(true);
    };

    const handlePointerUp = () => {
      setShowTooltipState(false);
    };

    React.useEffect(() => {
      document.addEventListener("pointerup", handlePointerUp);
      return () => {
        document.removeEventListener("pointerup", handlePointerUp);
      };
    }, []);

    return (
      <SliderPrimitive.Root
        ref={ref}
        className={clsx(styles.slider, className)}
        onValueChange={setValue}
        onPointerDown={handlePointerDown}
        {...props}
      >
        <SliderPrimitive.Track className={styles.track}>
          <SliderPrimitive.Range className={styles.range} />
        </SliderPrimitive.Track>
        <TooltipProvider>
          <Tooltip open={showTooltip && showTooltipState}>
            <TooltipTrigger asChild>
              <SliderPrimitive.Thumb
                className={styles.thumb}
                onMouseEnter={() => setShowTooltipState(true)}
                onMouseLeave={() => setShowTooltipState(false)}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>{value[0]}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </SliderPrimitive.Root>
    );
  }
);

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
