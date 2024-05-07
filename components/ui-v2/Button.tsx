import {
  type ComponentPropsWithoutRef,
  type ForwardedRef,
  forwardRef,
} from "react";
import clsx from "clsx";
import Link from "next/link";

type ButtonProps =
  | ({
      children: React.ReactNode;
    } & ComponentPropsWithoutRef<"button">)
  | ComponentPropsWithoutRef<"a">;

const ButtonComponent = (
  { className, children, ...props }: ButtonProps,
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
        "p-6 py-2 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 text-slate-100 relative",
        "hover:from-indigo-600 hover:to-indigo-800 hover:text-white",
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
