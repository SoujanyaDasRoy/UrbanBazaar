"use client"

import React from 'react';
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
    return (
        <nav className="bg-[#fcfc85] shadow-sm">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="semibold text-xl">UrbanBazaar</span>
                </Link>

                {/* Navigation Menu */}
                <NavigationMenu>
                    <NavigationMenuList>
                        {/* Home Link */}
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={cn(
                                    "px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md"
                                )}>
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        {/* Categories Dropdown */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={cn(
                                "px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md"
                            )}>
                                Categories
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 w-[200px]">
                                    <li>
                                        <Link href="/categories/electronics" legacyBehavior passHref>
                                            <NavigationMenuLink className={cn(
                                                "block p-2 hover:bg-gray-100 rounded-md"
                                            )}>
                                                Electronics
                                            </NavigationMenuLink>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/categories/fashion" legacyBehavior passHref>
                                            <NavigationMenuLink className={cn(
                                                "block p-2 hover:bg-gray-100 rounded-md"
                                            )}>
                                                Fashion
                                            </NavigationMenuLink>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/categories/home" legacyBehavior passHref>
                                            <NavigationMenuLink className={cn(
                                                "block p-2 hover:bg-gray-100 rounded-md"
                                            )}>
                                                Home & Kitchen
                                            </NavigationMenuLink>
                                        </Link>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* Deals Link */}
                        <NavigationMenuItem>
                            <Link href="/deals" legacyBehavior passHref>
                                <NavigationMenuLink className={cn(
                                    "px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md"
                                )}>
                                    Deals
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        {/* Cart Link */}
                        <NavigationMenuItem>
                            <Link href="/cart" legacyBehavior passHref>
                                <NavigationMenuLink className={cn(
                                    "px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md"
                                )}>
                                    Cart
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    );
};

export default Navbar;
