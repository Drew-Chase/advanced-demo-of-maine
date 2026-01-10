import { cn, Link } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify-icon/react";
import React from "react";

type AnimatedLinkProps = {
    text: string;
    href: string;
    color?: "primary" | "secondary";
    classNames?: { link?: string, motion?: string };
    fontSize?: number;
}

export default function AnimatedLink(props: AnimatedLinkProps) {
    const [hover, setHover] = React.useState(false);
    return (
        <div className="relative w-fit">

            <Link href={props.href}
                style={{ fontSize: props.fontSize || 12 }}
                className={cn(props.classNames?.link, "text-white text-xs w-fit relative z-10 hover:text-black transition-colors duration-300")}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <p className="z-10 pl-2">{props.text}</p>
                <Icon icon="solar:arrow-right-broken" className="ml-4 text-2xl" />
            </Link>

            <motion.div
                className={cn(props.classNames?.motion, "w-full pointer-events-none absolute bottom-0 data-[color=primary]:bg-primary data-[color=secondary]:bg-secondary")}
                initial={{ height: "2px" }}
                animate={{ height: hover ? "24px" : "2px", transition: hover ? { type: "spring", bounce: 0.6 } : { type: "tween" } }}
                data-color={props.color}
            />
        </div>
    );
}