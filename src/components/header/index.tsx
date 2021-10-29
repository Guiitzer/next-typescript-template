import React from "react";
import Link from "next/link";

import { Logo } from "@components";

export const Header: React.FC = () => {
    return (
        <div className=" bg-gradient-to-r from-green-800 to-black p-2 justify-around items-center flex">
            <Logo />
            <Link href="/" passHref>
                <h1 className=" transition cursor-pointer text-white duration-500 ease-in-out hover:text-yellow-200 transform hover:-translate-y-1 hover:scale-110 ">
                    Home
                </h1>
            </Link>
        </div>
    );
};
