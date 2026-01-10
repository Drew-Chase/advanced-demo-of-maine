import Logo from "../images/advanced-demo-logo.svg";
import React from "react";
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Image, Divider } from "@heroui/react";

export default function Navigation() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pages = {
        "Who are we": "/who-are-we",
        "Projects": "/projects",
        "Services": "/services",
        "Career": "/career"
    };
    const menuItems = Object.keys(pages).map((item, index) => {
        const url = Object.values(pages)[index];
        const isCurrentPage = window.location.pathname === url;
        return (
            <>
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link href={url} color={isCurrentPage ? "primary" : "foreground"} aria-current="page" size="lg" className="w-full text-sm font-bold uppercase text-white">
                        {item}
                    </Link>
                </NavbarMenuItem>
                {index !== Object.keys(pages).length - 1 ? <div className="w-[2px] h-2 bg-white/30"></div> : null}
            </>
        );
    });

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} height={"83px"} maxWidth="full" classNames={{ wrapper: "px-0", base: "bg-transparent" }} position="static" isBlurred={false} >
            <Divider
                orientation="horizontal"
                className="absolute top-6 h-[1px] w-[calc(100%-95px)] right-2 bg-white"
            />
            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
                <NavbarBrand>
                    <Link href="/">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={80}
                            height={80}
                            style={{ top: "5px", left: "5px", filter: "invert(1)" }}
                        />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 pr-5" justify="end">
                {menuItems}
            </NavbarContent>

            <NavbarMenu>
                {menuItems}
            </NavbarMenu>
        </Navbar>);
}