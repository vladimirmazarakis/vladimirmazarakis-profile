'use client';

import { Button } from "@nextui-org/button";
import { MouseEventHandler } from "react";

export default function SocialButton({children, className, ariaLabel, link}: {children: React.ReactNode, className: string, ariaLabel: string, link: string}){
    const openLink = () => {
        window.open(link);
    };

    return (
        <Button radius='full' size='lg' onClick={openLink} className={`w-full sm:w-auto ${className}`} aria-label={ariaLabel}>
            {children}
        </Button>
    )
}