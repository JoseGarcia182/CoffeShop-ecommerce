'use client'

import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const MenuMobile = () => {
  return (
    
    <Popover>
        <PopoverTrigger>
            <Menu />
        </PopoverTrigger>
        <PopoverContent>
            <Link href="/categories/cafe-molido" className="block" >Café molido</Link>
            <Link href="/categories/cafe-capsulas" className="block" >Café en capsulas</Link>
            <Link href="/categories/cafe-grano" className="block" >Café en grano</Link>
        </PopoverContent>
    </Popover>
   
  );
};

export default MenuMobile;
