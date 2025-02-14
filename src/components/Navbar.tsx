"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"


export default function Navbar() {
    return (
       <div className="flex flex-row justify-between bg-[#F5F5DC] py-1">
           <Image
                src="/logo.svg"
                alt="Logo"
                width={200}
                height={200}
                className="mx-2"
           />
           <div className="flex gap-2 mt-2 mr-4">
               <div>
                   <Button variant="link">Shop Now</Button>
                   <Button variant="link">
                       <Link href="/about">About</Link>
                   </Button>
                   <Button variant="link">Contact Us</Button>
               </div>
               <Button variant="secondary" asChild>
                   <Link href="/login">Login</Link>
               </Button>
               <Button variant="secondary">Sign Up</Button>
           </div>
       </div>
    )
}

