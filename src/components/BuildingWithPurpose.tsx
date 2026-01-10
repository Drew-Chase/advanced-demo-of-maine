import Image from "../images/building-with-purpose.jpg";
import AnimatedLink from "./AnimatedLink";
export default function BuildingWithPurpose() {
    return (
        <div className="w-full h-[560px] relative overflow-hidden content-center text-white">
            <div className="ml-10 md:ml-40 flex flex-col gap-4">
                <h1 className="text-4xl">Building with Purpose</h1>
                <p className="text-wrap w-[50%] min-w-[300px] max-w-[600px]">Building With Purpose is our shared commitment to deliver exceptional  results on every project, making a lasting, positive impact on our  clients, communities, people, business partners and our industry through the things we build and do.</p>
                <AnimatedLink classNames={{ link: "text-white" }} text="Learn more about us" href="/building-with-purpose" color="secondary" fontSize={12} />
            </div>
            <div className="w-full h-full absolute inset-0 -z-10">
                <div className="absolute inset-0 w-full h-full bg-black/30 z-10" />
                <div style={{ backgroundImage: `url('${Image}')` }} className={"w-full h-full bg-cover bg-center grayscale"} />
            </div>
        </div>
    );
}