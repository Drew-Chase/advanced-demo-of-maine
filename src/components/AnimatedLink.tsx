import { cn, Link } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify-icon/react";
import React from "react";

type AnimatedLinkProps = {
    text: string;
    href: string;
    color?: "primary" | "secondary";
    className?: string;
    classNames?: { link?: string, motion?: string };
    fontSize?: number;
}

export default function AnimatedLink(props: AnimatedLinkProps) {
    const [hover, setHover] = React.useState(false);
    return (
        <div className={cn("relative w-fit", props.className)}>

            <Link href={props.href}
                style={{ fontSize: props.fontSize || 12 }}
                className={cn("text-black text-xs w-fit relative z-10 data-[color=primary]:hover:text-white data-[color=secondary]:hover:text-black transition-colors duration-300", props.classNames?.link)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                data-color={props.color}
            >
                <p className="z-10 pl-2">{props.text}</p>
                <Icon icon="solar:arrow-right-broken" className="ml-4 text-2xl" />
            </Link>

            <motion.div
                className={cn("w-full pointer-events-none absolute bottom-0 data-[color=primary]:bg-primary data-[color=secondary]:bg-secondary", props.classNames?.motion)}
                initial={{ height: "2px" }}
                animate={{ height: hover ? "24px" : "2px", transition: hover ? { type: "spring", bounce: 0.6 } : { type: "tween" } }}
                data-color={props.color}
            />
        </div>
    );
}