import React from 'react'

import { Button } from "@/components/ui/button"

const Hero = () => {
    return (
        <div className="flex items-center justify-center flex-col bg-[linear-gradient(to_bottom,#FFFDE7,#FFFFFF)]">
            <div className="m-20">
                <div className="flex flex-col text-center m-5">
                    <div className="flex flex-row gap-3 items-center justify-center">
                        <h1 className="text-4xl font-bold">Welcome to</h1>
                        <div className="flex flex-row bg-[#f5f5dc] rounded-md p-2">
                            <span className="text-[#ffa54e] font-semibold text-4xl">Urban</span>
                            <span className="text-[#4caf50] font-semibold text-4xl">Bazaar</span>
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold">Shop Smarter Today!</h1>
                </div>
                <div className="flex text-center w-[40vw]">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                </div>
                <div className="flex items-center justify-center mt-5">
                    <Button className="px-6 rounded-full bg-[#222222] text-[#ffffff]">Shop</Button>
                    <Button variant="ghost" className="px-6 py-2 mx-3 rounded-full bg-[#f5f5dc]">Learn More</Button>
                </div>
            </div>
        </div>
    )
}
export default Hero
