import React from "react";
import Link from "next/link";

import { LogoFramer } from "@/assets/Logo";

import { cn } from "@/lib/utils";

const Logo = ({ inverse = false, width, height, className } : {
  inverse?: boolean
  width?: number
  height?: number
  className?: string
}) => {
  return (
    <Link href="/" className={cn(`flex items-center space-x-2 cursor-pointer`, className)}>
      <LogoFramer inverse={inverse} width={width} height={height} />
      <p className={`tracking-tighter font-bold ${inverse ? "text-white" : "text-black"}`}>
        Framer
      </p>
    </Link>
  );
};

export default Logo;