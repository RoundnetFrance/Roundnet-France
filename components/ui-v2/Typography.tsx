import {
  type ForwardedRef,
  forwardRef,
  type ComponentPropsWithoutRef,
} from "react";
import clsx from "clsx";

type TypographyProps = {
  children: React.ReactNode;
  variant?: React.ElementType;
  variantStyle?: React.ElementType;
} & ComponentPropsWithoutRef<"div">;

const TypographyComponent = (
  { children, variant = "p", variantStyle, ...props }: TypographyProps,
  ref: ForwardedRef<
    | HTMLDivElement
    | HTMLHeadingElement
    | HTMLParagraphElement
    | HTMLUListElement
  >,
) => {
  const Component = variant;
  const style = variantStyle ?? variant;

  return (
    <Component
      ref={ref}
      {...props}
      className={clsx(
        {
          "leading-7 [&:not(:first-child)]:mt-6 text-base font-normal scroll-m-0 text-zinc-600":
            style === "p",
          "leading-7 flex flex-col gap-2 ml-4 my-4 text-zinc-600":
            style === "ul",
          "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl":
            style === "h1",
          "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0":
            style === "h2",
          "scroll-m-20 text-2xl font-semibold tracking-tight": style === "h3",
          "scroll-m-20 text-xl font-semibold tracking-tight": style === "h4",
        },
        props.className,
      )}
    >
      {children}
    </Component>
  );
};

export const Typography = forwardRef<
  HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement | HTMLUListElement,
  TypographyProps
>(TypographyComponent);
