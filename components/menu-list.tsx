'use client'

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Café capsulas",
    href: "/category/capsula",
    description:
      "Rápido, limpio y delicioso. Cápsulas compatibles para que disfrutes un café perfecto en segundos.",
  },
  {
    title: "Café molido",
    href: "/category/molido",
    description:
      "Etiqueta de muestra NO ENTRAR ✋🚫",
  },
  {
    title: "Café en granos",
    href: "/category/granos",
    description:
      "Etiqueta de muestra NO ENTRAR ✋🚫",
  }
]

export function Menulist() {
  return (
    <NavigationMenu>
      <NavigationMenuList>

      <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Coffe<span className="font-bold">Shop</span>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Somos amantes del buen café. En nuestra coffee shop, seleccionamos granos de calidad, 
                    trabajamos con tostadores apasionados y buscamos ofrecer una experiencia que vaya más 
                    allá de una simple taza. Creemos en el café como un ritual, una pausa, un encuentro. 
                    Ya sea en grano, molido o en cápsulas, cada café que ofrecemos está pensado para que 
                    disfrutes ese momento como te gusta. Bienvenidos a nuestra comunidad cafetera.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Tienda">
                Accede a toda tu informacion, pedidos y mucho mas.
              </ListItem>
              <ListItem href="/ofers" title="Ofertas">
                Seccion dedicada a promociones y descuentos especiales. 
              </ListItem>
              <ListItem href="/" title="Accesorios">
                Productos complementarios como tazas, molinillos, pensas, etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuTrigger>Cafés</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/accesorios" passHref>
              Accesorios
          </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  if (!href) return null; // evita render si falta href

  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});


ListItem.displayName = "ListItem"
