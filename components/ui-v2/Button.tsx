import {
  type ComponentPropsWithoutRef,
  type ForwardedRef,
  forwardRef,
} from "react";
import clsx from "clsx";
import Link from "next/link";

const buttonThemes = ["primary", "secondary", "light-primary"] as const;

type ButtonProps = {
  children: React.ReactNode;
  theme?: (typeof buttonThemes)[number];
} & (ComponentPropsWithoutRef<"button"> | ComponentPropsWithoutRef<"a">);

const ButtonComponent = (
  { className, children, theme = "primary", ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>,
) => {
  const isLink = "href" in props && props.href;
  const ComponentName = isLink ? Link : "button";

  return (
    <ComponentName
      // @ts-ignore
      ref={ref}
      // @ts-ignore
      type={isLink ? undefined : props.type ?? "button"}
      className={clsx(
        "px-6 py-2 rounded-lg border-2 block",
        {
          "bg-gradient-to-br from-indigo-600 to-indigo-800 text-slate-100 hover:from-indigo-500 hover:to-indigo-700 hover:text-white border-transparent":
            theme === "primary",
          "border-indigo-400 text-indigo-400 hover:text-indigo-500 transition-colors hover:border-indigo-500 shadow-sm":
            theme === "light-primary",
        },
        className,
      )}
      {...props}
    >
      {children}
    </ComponentName>
  );
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(ButtonComponent);
