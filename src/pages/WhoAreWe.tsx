import { Icon } from "@iconify-icon/react";
import ContactUs from "../components/ContactUs";
import WalmartLogo from "../images/WalmartLogo.svg";
import MaineGovLogo from "../images/MaineGovLogo.svg";
import { Image } from "@heroui/react";

export default function WhoAreWe() {
    const people = [
        {
            firstName: "Spencer",
            lastName: "Gordon",
            suffix: "",
            role: "Owner & Operator Since 2020",
            phone: "+1 (207) 123-4567",
            isDark: true
        },
        {
            firstName: "Scott",
            lastName: "Gordon",
            suffix: "(Sr)",
            role: "Owner & Operator Since 2020",
            phone: "+1 (207) 123-4567",
            isDark: false
        },
        {
            firstName: "Scott",
            lastName: "Gordon",
            suffix: "(Jr)",
            role: "Owner & Operator Since 2020",
            phone: "+1 (207) 123-4567",
            isDark: false
        },
    ];

    const timelineItems = [
        {
            year: "2020",
            title: "Built Waterville Walmart",
            subtitle: "under budget",
            number: "01",
            description: (
                <>
                    Built the Waterville Walmart attachment in 2022. This was completed <span className="text-[#FFD701] font-bold underline">6 months</span> before the deadline and <span className="text-[#FFD701] font-bold underline">$15k</span> under budget
                </>
            )
        },
        {
            year: "2023",
            title: "Built Waterville Walmart",
            subtitle: "under budget",
            number: "02",
            description: (
                <>
                    Built the Waterville Walmart attachment in 2022. This was completed <span className="text-[#FFD701] font-bold underline">6 months</span> before the deadline and <span className="text-[#FFD701] font-bold underline">$15k</span> under budget
                </>
            )
        },
        {
            year: "2026",
            title: "Built Waterville Walmart",
            subtitle: "under budget",
            number: "03",
            description: (
                <>
                    Built the Waterville Walmart attachment in 2022. This was completed <span className="text-[#FFD701] font-bold underline">6 months</span> before the deadline and <span className="text-[#FFD701] font-bold underline">$15k</span> under budget
                </>
            )
        }
    ];

    return (
        <div className="w-full bg-white relative flex flex-col items-center overflow-x-hidden">
            {/* Background Blobs (Absolute - decorative, must be absolute) */}
            <div className="absolute top-[11.73px] left-[calc(50%-550px)] w-[473.6px] h-[291.31px] rounded-[93px] -rotate-[20.27deg] pointer-events-none"
                style={{
                    background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 215, 1, 0.25) 0%, rgba(202, 241, 139, 0.25) 100%)",
                    filter: "blur(87.5px)",
                    zIndex: 0
                }}
            />
            <div className="absolute top-[415px] left-[calc(50%+150px)] w-[447px] h-[199px] rounded-[93px] pointer-events-none"
                style={{
                    background: "rgba(255, 215, 1, 0.5)",
                    filter: "blur(87.5px)",
                    zIndex: 0
                }}
            />
            <div className="absolute top-[936.73px] left-[calc(50%+100px)] w-[473.6px] h-[562.51px] rounded-[93px] -rotate-[7.92deg] pointer-events-none"
                style={{
                    background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 215, 1, 0.25) 0%, rgba(202, 241, 139, 0.25) 100%)",
                    filter: "blur(87.5px)",
                    zIndex: 0
                }}
            />

            {/* Header Section */}
            <section className="mt-20 flex flex-col items-center text-center px-4 z-10 w-full">
                <h1 className="w-full max-w-[767px] text-5xl font-medium text-black">
                    Our <span className="underline">mission</span> is to make work <span className="italic">meaningful</span>
                </h1>
                <p className="w-full max-w-[767px] mt-2 text-base text-black font-light">
                    Lorem ipsum dolor sit amet consectetur. Euismod iaculis gravida eleifend vulputate aliquet amet ornare euismod blandit. Lectus elit ipsum id enim eu neque vivamus tristique ultricies. Nunc sit hac nibh nisi habitasse vestibulum orci. Augue duis eget sed feugiat dignissim.
                </p>
            </section>

            {/* Video Player Section */}
            <section className="mt-[29px] w-full max-w-[872px] px-4 z-10">
                <div
                    className="w-full h-[349px] rounded-[27px] overflow-hidden shadow-[0px_0px_15px_rgba(0,0,0,0.5)] group flex flex-col justify-end bg-neutral-800 bg-cover bg-center"
                    style={{ backgroundImage: "url(.jpg)" }}
                >
                    {/* Overlay */}
                    <div className="flex-1 flex flex-col justify-end bg-black/30 backdrop-blur-[2px] transition-opacity group-hover:bg-black/20">
                        {/* Content Section */}
                        <div className="flex flex-row justify-between items-end p-6 text-white">
                            <div className="flex flex-col">
                                <h3 className="text-lg font-normal">Our latest Commercial</h3>
                                <p className="text-sm italic font-extralight mt-1 opacity-80">Fall 2026</p>
                            </div>

                            {/* Play Button */}
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                                <Icon icon="solar:play-bold" className="text-black/80 text-lg ml-0.5" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="mt-[85px] w-full flex flex-col items-center gap-[26px] z-10" style={{ fontFamily: "'Roboto', sans-serif" }}>
                {/* Title Container */}
                <div className="w-full max-w-[1280px] px-4 md:px-[186px] flex flex-col items-start">
                    <h2 className="w-full text-5xl italic font-normal text-black tracking-normal" style={{ fontVariant: "all-small-caps" }}>
                        Our Family
                    </h2>
                    <p className="w-full text-base font-light text-black mt-2">
                        Since the start we've been a family owned and operated company, handed down from father to sons
                    </p>
                </div>

                {/* Cards Container */}
                <div className="flex flex-row justify-center items-stretch gap-7 flex-wrap pb-[100px] w-full max-w-[1280px] px-4">
                    {people.map((person, idx) => (
                        <div
                            key={idx}
                            className={`w-[282px] rounded-[17px] relative flex flex-col overflow-hidden transition-all hover:-translate-y-1 ${person.isDark ? 'bg-[#161616]' : 'bg-[#E9E9E9]'}`}
                        >
                            {/* Decorative Background Blob */}
                            {person.isDark && (
                                <div className="absolute top-[220px] left-[-120px] w-[447px] h-[199px] rounded-[93px] -rotate-[31.12deg] pointer-events-none"
                                    style={{
                                        background: "rgba(255, 215, 1, 0.4)",
                                        filter: "blur(87.5px)",
                                        zIndex: 0
                                    }}
                                />
                            )}

                            {/* Person Image Area */}
                            <div className="m-3 h-[360px] rounded-[29px] bg-[#222] shrink-0 z-10">
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(.jpg)" }} />
                            </div>

                            {/* Person Name & Role */}
                            <div className="ml-3 mb-2 flex flex-col z-10">
                                <h3 className={`text-s uppercase ${person.isDark ? 'text-white' : 'text-black'}`}>
                                    <span>{person.firstName}</span> <span className="font-bold">{person.lastName}</span> <span className="text-xs">{person.suffix}</span>
                                </h3>
                                <div className={`w-[110px] h-[2px] rounded-full mt-[1px] mb-[2px] ${person.isDark ? 'bg-secondary' : 'bg-primary'}`} />
                                <p className={`text-xs italic font-light ${person.isDark ? 'text-white/70' : 'text-black/70'}`}>
                                    {person.role}
                                </p>
                            </div>

                            {/* Social Buttons */}
                            <div className="mt-auto mb-5 px-3 flex flex-row items-center gap-2 z-10">
                                <a href="#" className="w-8 h-8 bg-[#0866FF] rounded-[5px] flex items-center justify-center hover:opacity-90">
                                    <Icon icon="mynaui:facebook-solid" className="text-white text-xl" />
                                </a>
                                <a href="#" className={`w-8 h-8 rounded-[5px] flex items-center justify-center hover:opacity-90 ${person.isDark ? 'bg-white' : 'bg-black'}`}>
                                    <Icon icon="ic:baseline-email" className={`text-lg ${person.isDark ? 'text-black' : 'text-white'}`} />
                                </a>
                                <a href="#" className={`flex-1 h-8 rounded-[5px] flex flex-row items-center px-2 gap-2 hover:opacity-90 ${person.isDark ? 'bg-white' : 'bg-black'}`}>
                                    <Icon icon="tabler:phone-filled" className={`text-sm ${person.isDark ? 'text-black' : 'text-white'}`} />
                                    <span className={`text-xs font-light ${person.isDark ? 'text-black' : 'text-white'}`} style={{ fontVariant: "all-small-caps" }}>
                                        {person.phone}
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Dark Timeline Section */}
            <section className="w-full bg-black relative flex flex-col items-center pt-[50px] pb-5 overflow-hidden">
                {/* Internal Blobs (decorative) */}
                <div className="absolute left-[calc(50%-800px)] w-[437.24px] h-[465.59px] rounded-[93px] pointer-events-none"
                    style={{
                        background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 215, 1, 0.1) 0%, rgba(202, 241, 139, 0.1) 100%)",
                        filter: "blur(87.5px)",
                        transform: "matrix(0.89, 0.45, -0.68, 0.73, 0, 0)"
                    }}
                />
                <div className="absolute bottom-[-200px] right-[calc(50%-800px)] w-[437.24px] h-[465.59px] rounded-[93px] pointer-events-none"
                    style={{
                        background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 215, 1, 0.15) 0%, rgba(202, 241, 139, 0.15) 100%)",
                        filter: "blur(87.5px)",
                        transform: "matrix(0.89, 0.45, -0.68, 0.73, 0, 0)"
                    }}
                />

                {/* Section Title */}
                <h2 className="text-3xl font-bold text-white text-center max-w-[420px] z-10 px-4">
                    150+ companies have grown their infrastructure with us
                </h2>

                {/* Brand Logos Bar */}
                <div className="ml-10 mt-12 w-full flex flex-row justify-start items-center gap-10 opacity-30 px-8 md:pl-36 z-10 flex-wrap">
                    <Image src={WalmartLogo} alt="Walmart" />
                    <Image src={MaineGovLogo} alt="Maine.gov" />
                    <Image src={WalmartLogo} alt="Walmart" />
                    <Image src={MaineGovLogo} alt="Maine.gov" />
                    <Image src={WalmartLogo} alt="Walmart" />
                    <Image src={MaineGovLogo} alt="Maine.gov" />
                </div>

                {/* Separator Line */}
                <div className="ml-10 w-full px-8 md:pl-36 z-10 mt-3 md:pr-36">
                    <div className="w-full h-[1px] bg-white/30" />
                </div>

                {/* Timeline Horizontal Area */}
                <div className="mt-9 w-full z-10 overflow-x-auto overflow-y-hidden no-scrollbar px-8 md:px-36">
                    <div className="flex flex-col">
                        {/* Timeline Content Row */}
                        <div className="flex flex-row">
                            {timelineItems.map((item, idx) => (
                                <div key={idx} className="flex-shrink-0 w-[396px] flex flex-col border-l border-white/20 pl-7">
                                    {/* Year Badge */}
                                    <div className="w-14 h-6 bg-[#FFD701]/25 rounded-[4px] flex items-center justify-center">
                                        <span className="text-secondary font-bold size-4 flex justify-center items-center">{item.year}</span>
                                    </div>

                                    <div className="mt-2 flex flex-col">
                                        <h4 className="text-3xl font-bold text-white">{item.title}</h4>
                                        <p className="text-lg text-white opacity-80 font-normal mt-0.5">{item.subtitle}</p>
                                    </div>

                                    <p className="mt-5 text-base text-white/50 font-normal max-w-[304px]">
                                        {item.description}
                                    </p>

                                    <div className="mt-5 mb-4">
                                        <span className="text-base font-bold text-white opacity-80">{item.number}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Diamond Markers Row with Horizontal Line */}
                        <div className="flex flex-row items-center pb-1">
                            {timelineItems.map((_, idx) => (
                                <div key={idx} className="w-[396px] flex flex-row items-center">
                                    {/* Diamond Marker */}
                                    <div
                                        className={`w-[10px] h-[10px] border border-[#FFD701] rotate-45 shadow-[0px_0px_4.5px_#FFD701] -ml-1 shrink-0 ${idx === 0 ? "bg-[#9F8603]/50" : idx === 1 ? "bg-[#9F8603]/70" : "bg-[#9F8603]"}`}
                                    />
                                    {/* Horizontal Line Segment */}
                                    <div className="flex-1 h-[1px] bg-white/30" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Edge Fade for Scroll Hint */}
                <div className="absolute right-0 top-0 bottom-0 w-[150px] bg-gradient-to-l from-black to-transparent pointer-events-none hidden md:block" />
            </section>
            <ContactUs />
        </div >
    );
}

WhoAreWe.isNavDark = true;