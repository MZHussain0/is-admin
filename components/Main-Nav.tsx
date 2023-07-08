﻿"use client";
import { useParams, usePathname } from "next/navigation";
import React, { FC } from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface MainNavProps {
  className: string;
}

const MainNav: FC<MainNavProps> = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      label: "Overview",
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathname === `/${params.storeId}/settings`,
    },
  ];
  return (
    <div className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}>
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default MainNav;