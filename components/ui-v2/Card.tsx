import { Card as ShadCnCard } from "../../@/components/ui/card";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <ShadCnCard
      className={clsx(
        "p-4 transition-colors rounded-xl shadow-md bg-gradient-to-bl from-indigo-500 to-25% to-indigo-700 text-slate-50 hover:to-35%",
        className,
      )}
    >
      {children}
    </ShadCnCard>
  );
};
