"use client";

import Link from "next/link";
import clsx from "clsx";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

interface NavbarProps {
  elements: Array<{
    label: string;
    href: string;
  }>;
}

export const Navbar = ({ elements }: NavbarProps) => {
  const pathname = usePathname();
  return (
    <NavigationMenu className='flex justify-between items-center'>
      <NavigationMenuList className='flex px-2 gap-2'>
        {elements.map((element) => (
          <NavigationMenuItem key={element.label}>
            <Link
              href={element.href}
              className={clsx(
                "hover:border-b-2 border-zinc-800 p-2",
                element.href === pathname && "border-b-2 border-zinc-800",
              )}
            >
              {element.label}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
