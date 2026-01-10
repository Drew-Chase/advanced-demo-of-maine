import { Link } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify-icon/react";
import React from "react";

export default function AnimatedLink() {
    const [hover, setHover] = React.useState(false);
    return (
        <div className="relative">
            <Link href="/building-with-purpose" className="text-white text-xs w-fit relative z-10 hover:text-black transition-colors duration-300" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <p className="z-10 pl-2">Learn more about us</p>
                <Icon icon="solar:arrow-right-broken" className="ml-4 text-2xl" />
            </Link>
            <motion.div className="pointer-events-none absolute bottom-0 w-[160px] bg-secondary" initial={{ height: "2px" }} animate={{ height: hover ? "24px" : "2px", transition: hover ? { type: "spring", bounce: 0.6 } : { type: "tween" } }} />
        </div>
    );
}