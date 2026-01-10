import history from "../images/history.png";
import AnimatedLink from "./AnimatedLink";

export default function History() {
    return (
        <div className="flex flex-row m-20 h-[500px] gap-4">
            <div className="text-left w-[50%]">
                <h3 className="text-2xl uppercase">Since 2020</h3>
                <h1 className="text-5xl font-semibold">Advanced Demo has been
                    proudly serving central Maine
                </h1>
                <p className="mt-10">
                    For six years and two generations, Advanced Demo has remained a family-run Maine first company, first starting as a small demolition outfit to now leading the state’s commercial construction industry.  Despite our growth and success, we remain committed to the principles that guided us from the very start, quality, safety and community.
                </p>
                <AnimatedLink className="mt-2" text="Learn more about us" href="/building-with-purpose" color="primary" fontSize={12} />
            </div>
            <div style={{ backgroundImage: `url(${history})` }} className="w-[50%] min-w-[500px] h-[500px] bg-cover bg-center" />
        </div>
    );
}