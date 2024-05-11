import { Card as ShadCnCard } from "../../@/components/ui/card";
import clsx from "clsx";

const themes = ["primary", "secondary", "light-primary"] as const;
interface CardProps {
  children: React.ReactNode;
  className?: string;
  theme?: (typeof themes)[number];
}

export const Card = ({ children, className, theme = "primary" }: CardProps) => {
  return (
    <ShadCnCard
      className={clsx(
        "transition-colors rounded-xl shadow-md",
        {
          "bg-gradient-to-bl from-indigo-500 to-25% to-indigo-700 text-slate-50 hover:to-35%":
            theme === "primary",
          "border-indigo-400 border-2 shadow-lg": theme === "light-primary",
        },
        className,
      )}
    >
      {children}
    </ShadCnCard>
  );
};
