import Hero from "../components/Hero";
import BuildingWithPurpose from "../components/BuildingWithPurpose";
import History from "../components/History";
import ContactUs from "../components/ContactUs";

export default function Home() {
    return (
        <div className="-mt-[83px]">
            <Hero />
            <BuildingWithPurpose />
            <History />
            <ContactUs />
        </div>
    );
}