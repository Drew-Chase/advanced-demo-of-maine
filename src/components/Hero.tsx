import BackgroundVideo from "../videos/BackgroundVideo.mp4";
import Logo from "../images/advanced-demo-logo.svg";
import { Button } from "@heroui/react";
import { Icon } from "@iconify-icon/react";

export default function Hero() {
    return (
        <div className="relative w-full h-dvh min-h-[500px] overflow-hidden">
            <div className="w-full h-full flex items-center justify-center flex-col">
                <img src={Logo} className="w-[340px] h-[340px] invert" />
                <div className="flex flex-row items-center justify-center gap-4 w-[500px]">
                    <Button radius="none" size="lg" fullWidth className="bg-white justify-start" >Get Started</Button>
                    <Button variant="ghost" radius="none" size="lg" fullWidth color="secondary">
                        <div className="w-full text-start">
                            Contact Us
                        </div>
                        <Icon icon="solar:arrow-right-broken" />
                    </Button>
                </div>
            </div>
            <div className="w-full h-full absolute top-0 left-0 -z-10">
                <div className="w-full h-full absolute backdrop-blur-sm video-overlay" />
                <video src={BackgroundVideo} autoPlay loop muted className="w-full h-full top-0 left-0 object-cover" />
            </div>
        </div>
    );
}