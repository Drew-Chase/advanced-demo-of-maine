import { Icon } from "@iconify-icon/react";

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
            {/* Background Blobs (Absolute) */}
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
            <section className="mt-[76px] flex flex-col items-center text-center px-4 z-10 w-full">
                <h1 className="w-full max-w-[767px] text-5xl font-medium leading-[56px] text-black">
                    Our <span className="underline">mission</span> is to make work <span className="italic">meaningful</span>
                </h1>
                <p className="w-full max-w-[767px] mt-[18px] text-base leading-[19px] text-black font-light">
                    Lorem ipsum dolor sit amet consectetur. Euismod iaculis gravida eleifend vulputate aliquet amet ornare euismod blandit. Lectus elit ipsum id enim eu neque vivamus tristique ultricies. Nunc sit hac nibh nisi habitasse vestibulum orci. Augue duis eget sed feugiat dignissim.
                </p>
            </section>

            {/* Video Player Section */}
            <section className="mt-[29px] w-full max-w-[872px] px-4 z-10">
                <div className="relative w-full h-[349px] rounded-[27px] overflow-hidden shadow-[0px_0px_15px_rgba(0,0,0,0.5)] group">
                    {/* Background / Image Placeholder */}
                    <div className="absolute inset-0 bg-neutral-800 bg-cover bg-center" style={{ backgroundImage: "url(.jpg)" }} />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity group-hover:bg-black/20" />

                    {/* Content Section */}
                    <div className="absolute inset-x-[25px] bottom-[25px] flex justify-between items-end text-white">
                        <div className="flex flex-col">
                            <h3 className="text-lg font-normal leading-[21px]">Our latest Commercial</h3>
                            <p className="text-sm italic font-extralight leading-[16px] mt-1 opacity-80 decoration-transparent">Fall 2026</p>
                        </div>

                        {/* Play Button */}
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                            <Icon icon="solar:play-bold" className="text-black/80 text-lg ml-0.5" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="mt-[85px] w-full flex flex-col items-center gap-[26px] z-10" style={{ fontFamily: "'Roboto', sans-serif" }}>
                {/* Title Container */}
                <div className="w-full max-w-[1280px] px-[186px] flex flex-col items-start self-center">
                    <h2 className="w-full text-5xl italic font-normal leading-[56px] text-black tracking-normal" style={{ fontVariant: "all-small-caps" }}>
                        Our Family
                    </h2>
                    <p className="w-full text-base font-light leading-[19px] text-black mt-2">
                        Since the start we've been a family owned and operated company, handed down from father to sons
                    </p>
                </div>

                {/* Cards Container */}
                <div className="flex flex-row justify-center items-center gap-[27px] flex-wrap pb-[100px] w-full max-w-[1280px]">
                    {people.map((person, idx) => (
                        <div key={idx} className={`w-[282px] h-[486px] rounded-[17px] relative flex flex-col overflow-hidden transition-all hover:-translate-y-1 ${person.isDark ? 'bg-[#161616]' : 'bg-[#E9E9E9]'}`}>
                            {/* Decorative Background Blob (Rectangle 14) */}
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
                            <div className="mx-[10px] mt-[9px] w-[262px] h-[361px] rounded-[29px] bg-[#222] overflow-hidden shrink-0 z-10 relative">
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(.jpg)" }} />
                            </div>

                            {/* Person Name & Role */}
                            <div className="px-[10px] mt-[3px] z-10">
                                <h3 className={`text-2xl leading-[28px] ${person.isDark ? 'text-white' : 'text-black'}`} style={{ fontVariant: "all-small-caps", fontWeight: 400 }}>
                                    <span className="font-normal">{person.firstName}</span> <span className="font-bold">{person.lastName}</span> {person.suffix}
                                </h3>
                                <div className={`w-[110px] h-[2px] rounded-full mt-[1px] mb-[2px] ${person.isDark ? 'bg-[#FFD701]' : 'bg-[#2A5240]'}`} />
                                <p className={`text-xs italic font-light leading-[14px] ${person.isDark ? 'text-white/70' : 'text-black/70'}`} style={{ fontWeight: 300 }}>
                                    {person.role}
                                </p>
                            </div>

                            {/* Social Buttons Overlay/Pinned to bottom */}
                            <div className="mt-auto mb-[20px] px-[10px] flex items-center gap-[5px] z-10">
                                <a href="#" className="w-[33px] h-[32px] bg-[#0866FF] rounded-[5px] flex items-center justify-center hover:opacity-90">
                                    <Icon icon="mynaui:facebook-solid" className="text-white text-xl" />
                                </a>
                                <a href="#" className={`w-[32px] h-[32px] rounded-[5px] flex items-center justify-center hover:opacity-90 ${person.isDark ? 'bg-white' : 'bg-black'}`}>
                                    <Icon icon="ic:baseline-email" className={`text-lg ${person.isDark ? 'text-black' : 'text-white'}`} />
                                </a>
                                <a href="#" className={`flex-1 h-[32px] rounded-[5px] flex items-center px-[10px] gap-2 hover:opacity-90 ${person.isDark ? 'bg-white' : 'bg-black'}`}>
                                    <Icon icon="tabler:phone-filled" className={`text-sm ${person.isDark ? 'text-black' : 'text-white'}`} />
                                    <span className={`text-xs font-light leading-[14px] ${person.isDark ? 'text-black' : 'text-white'}`} style={{ fontVariant: "all-small-caps" }}>
                                        {person.phone}
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Dark Timeline Section */}
            {/* Dark Timeline Section */}
            <section className="w-full bg-black relative flex flex-col items-center pt-[50px] pb-[70px] overflow-hidden">
                {/* Internal Blobs */}
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
                <h2 className="text-3xl font-bold text-white text-center max-w-[420px] leading-[38px] z-10 px-4">
                    150+ companies have grown their infrastructure with us
                </h2>

                {/* Brand Logos Bar */}
                <div className="mt-[50px] w-full max-w-[1240px] flex flex-row justify-start items-center gap-[40px] opacity-60 px-8 md:pl-[20px] z-10 flex-wrap">
                    <div className="flex items-center gap-1.5 translate-y-[2px]">
                        <span className="text-white text-3xl font-bold tracking-tight" style={{ fontFamily: "'Roboto', sans-serif" }}>Walmart</span>
                        <Icon icon="bi:asterisk" className="text-[#FFD701] text-[22px] rotate-[15deg] font-bold" />
                    </div>
                    <div className="flex items-center">
                        <span className="text-white text-3xl font-serif tracking-tight">Maine</span>
                        <span className="text-white text-xl font-serif">.gov</span>
                    </div>
                    <div className="flex items-center gap-1.5 translate-y-[2px]">
                        <span className="text-white text-3xl font-bold tracking-tight" style={{ fontFamily: "'Roboto', sans-serif" }}>Walmart</span>
                        <Icon icon="bi:asterisk" className="text-[#FFD701] text-[22px] rotate-[15deg] font-bold" />
                    </div>
                    <div className="flex items-center">
                        <span className="text-white text-3xl font-serif tracking-tight">Maine</span>
                        <span className="text-white text-xl font-serif">.gov</span>
                    </div>
                    <div className="flex items-center gap-1.5 translate-y-[2px]">
                        <span className="text-white text-3xl font-bold tracking-tight" style={{ fontFamily: "'Roboto', sans-serif" }}>Walmart</span>
                        <Icon icon="bi:asterisk" className="text-[#FFD701] text-[22px] rotate-[15deg] font-bold" />
                    </div>
                    <div className="flex items-center">
                        <span className="text-white text-3xl font-serif tracking-tight">Maine</span>
                        <span className="text-white text-xl font-serif">.gov</span>
                    </div>
                </div>

                {/* Separator Line */}
                <div className="w-full max-w-[1240px] px-8 md:pl-[20px] z-10 mt-[10px]">
                    <div className="w-full h-[1px] bg-white/30" />
                </div>

                {/* Timeline Horizontal Area */}
                <div className="mt-[34px] w-full relative z-10">
                    {/* Timeline List Scrollable Container */}
                    <div className="w-full flex justify-center overflow-x-auto overflow-y-hidden no-scrollbar px-8 md:px-[143px]">
                        <div className="flex flex-row gap-[23px] relative pb-[20px]">
                            {timelineItems.map((item, idx) => (
                                <div key={idx} className="flex-shrink-0 w-[396px] relative flex flex-row">
                                    {/* Vertical Marker Line */}
                                    <div className="w-[1px] h-full bg-white/20 shrink-0 relative">
                                        {/* Diamond Marker at bottom of vertical line */}
                                        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[10px] h-[10px] border border-[#FFD701] rotate-45 shadow-[0px_0px_4.5px_#FFD701] ${idx === 0 ? "bg-[#9F8603]/50" : idx === 1 ? "bg-[#9F8603]/70" : "bg-[#9F8603]"
                                            }`} />
                                    </div>

                                    <div className="ml-[28px] flex flex-col pt-0">
                                        {/* Year Badge */}
                                        <div className="w-[55px] h-[26px] bg-[#FFD701]/25 rounded-[4px] flex items-center justify-center -translate-x-[92px] absolute">
                                            <span className="text-[#FFD701] font-bold text-[18px]">{item.year}</span>
                                        </div>

                                        <div className="mt-[7px]">
                                            <h4 className="text-3xl font-bold text-white leading-[33px]">{item.title}</h4>
                                            <p className="text-lg text-white opacity-80 font-normal leading-[21px] mt-0.5">{item.subtitle}</p>
                                        </div>

                                        <p className="mt-[20px] text-base text-white/50 leading-[19px] font-normal max-w-[304px]">
                                            {item.description}
                                        </p>

                                        <div className="mt-5 mb-[15px]">
                                            <span className="size-4 font-bold text-white opacity-80">{item.number}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Horizontal Line at bottom across all items */}
                            <div className="absolute bottom-[20px] left-0 right-0 h-[1px] bg-white/30" />
                        </div>
                    </div>

                    {/* Edge Fade for Scroll Hint */}
                    <div className="absolute right-0 top-0 bottom-0 w-[150px] bg-gradient-to-l from-black to-transparent pointer-events-none hidden md:block" />
                </div>
            </section>
        </div>
    );
}