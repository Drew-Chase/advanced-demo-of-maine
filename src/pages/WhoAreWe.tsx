import { Icon } from "@iconify-icon/react";

export default function WhoAreWe() {
    const people = [
        { firstName: "Spencer", lastName: "Gordon", suffix: "", role: "Owner & Operator Since 2020", phone: "+1 (207) 123-4567", isDark: true },
        { firstName: "Scott", lastName: "Gordon", suffix: "(Sr)", role: "Owner & Operator Since 2020", phone: "+1 (207) 123-4567", isDark: false },
        { firstName: "Scott", lastName: "Gordon", suffix: "(Jr)", role: "Owner & Operator Since 2020", phone: "+1 (207) 123-4567", isDark: false },
    ];

    return (
        <div className="w-full bg-white relative overflow-hidden">
            {/* Decorative gradient blurs */}
            <div
                className="absolute top-3 -left-4 w-[474px] h-[291px] rounded-[93px] -rotate-[20deg] pointer-events-none"
                style={{
                    background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 215, 1, 0.25) 0%, rgba(202, 241, 139, 0.25) 100%)",
                    filter: "blur(87.5px)",
                }}
            />
            <div
                className="absolute top-[415px] right-0 w-[447px] h-[199px] rounded-[93px] pointer-events-none"
                style={{
                    background: "rgba(255, 215, 1, 0.5)",
                    filter: "blur(87.5px)",
                }}
            />
            <div
                className="absolute top-[937px] right-[100px] w-[474px] h-[563px] rounded-[93px] -rotate-[8deg] pointer-events-none"
                style={{
                    background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 215, 1, 0.25) 0%, rgba(202, 241, 139, 0.25) 100%)",
                    filter: "blur(87.5px)",
                }}
            />

            {/* Mission Section */}
            <section className="flex flex-col items-center pt-10 pb-8 px-4">
                <h1 className="text-5xl font-medium text-black text-center max-w-[767px] leading-[56px]">
                    Our <span className="underline">mission</span> is to make work <span className="italic">meaningful</span>
                </h1>
                <p className="text-base font-normal text-black text-center max-w-[767px] mt-6 leading-[19px]">
                    Lorem ipsum dolor sit amet consectetur. Euismod iaculis gravida
                    eleifend vulputate aliquet amet ornare euismod blandit. Lectus elit
                    ipsum id enim eu neque vivamus tristique ultricies. Nunc sit hac nibh
                    nisi habitasse vestibulum orci. Augue duis eget sed feugiat dignissim.
                </p>
            </section>

            {/* Video Player Section */}
            <section className="flex justify-center px-8 md:px-16 py-8">
                <div
                    className="w-full max-w-[1060px] h-[349px] rounded-[27px] overflow-hidden flex flex-col justify-end"
                    style={{
                        filter: "drop-shadow(0px 0px 15px #000000)",
                        background: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgba(128, 128, 128, 0.5)",
                        backdropFilter: "blur(2px)",
                    }}
                >
                    {/* Content */}
                    <div className="flex flex-row justify-between items-end p-6">
                        <div className="flex flex-col">
                            <h3 className="text-lg font-normal text-white leading-[21px]">Our latest Commercial</h3>
                            <p className="text-sm italic font-extralight text-white leading-[16px]">Fall 2026</p>
                        </div>

                        {/* Play Button */}
                        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                            <Icon icon="solar:play-bold" className="text-black/80 text-lg ml-0.5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Our Family Section */}
            <section className="flex flex-col items-center gap-[26px] py-16 px-8 md:px-16">
                {/* Title & Subtitle */}
                <div className="flex flex-col items-start w-full max-w-[1060px]">
                    <h2
                        className="text-5xl italic font-normal text-black leading-[56px]"
                        style={{ fontVariant: "all-small-caps" }}
                    >
                        Our Family
                    </h2>
                    <p className="text-base font-light text-black leading-[19px]">
                        Since the start we’ve been a family owned and operated company, handed down from father to sons
                    </p>
                </div>

                {/* People Cards */}
                <div className="flex flex-row justify-center items-center gap-[27px] flex-wrap">
                    {people.map((person, index) => (
                        <div
                            key={index}
                            className={`w-[282px] h-[486px] rounded-[17px] flex flex-col overflow-hidden ${person.isDark ? "bg-[#161616]" : "bg-[#E9E9E9]"}`}
                        >
                            {/* Image placeholder area */}
                            <div className="mx-[10px] mt-[9px] w-[262px] h-[361px] rounded-[29px] bg-gray-400/30 flex-shrink-0" />

                            {/* Title section */}
                            <div className="flex flex-col px-[10px] mt-2">
                                <h3
                                    className={`text-2xl leading-[28px] ${person.isDark ? "text-white" : "text-black"}`}
                                    style={{ fontVariant: "all-small-caps" }}
                                >
                                    <span className="font-normal">{person.firstName}</span>{" "}
                                    <span className="font-bold">{person.lastName}</span>
                                    {person.suffix && (
                                        <span className="text-sm font-light ml-1">{person.suffix}</span>
                                    )}
                                </h3>
                                <div className={`w-[110px] h-[2px] rounded-full ${person.isDark ? "bg-secondary" : "bg-primary"}`} />
                                <p className={`text-xs italic font-light mt-1 leading-[14px] ${person.isDark ? "text-white" : "text-black"}`}>
                                    {person.role}
                                </p>
                            </div>

                            {/* Links section */}
                            <div className="flex flex-row items-center gap-[5px] px-[11px] mt-auto mb-5">
                                {/* Facebook */}
                                <a href="#" className="w-[33px] h-[32px] bg-[#0866FF] rounded-[5px] flex items-center justify-center">
                                    <Icon icon="mdi:facebook" className="text-white text-2xl" />
                                </a>

                                {/* Email */}
                                <a
                                    href="#"
                                    className={`w-[32px] h-[32px] rounded-[5px] flex items-center justify-center ${person.isDark ? "bg-white" : "bg-black"}`}
                                >
                                    <Icon icon="ic:baseline-email" className={`text-lg ${person.isDark ? "text-black" : "text-white"}`} />
                                </a>

                                {/* Phone */}
                                <a
                                    href="#"
                                    className={`h-[32px] px-2 rounded-[5px] flex items-center gap-2 ${person.isDark ? "bg-white" : "bg-black"}`}
                                >
                                    <Icon icon="tabler:phone-filled" className={`text-sm ${person.isDark ? "text-black" : "text-white"}`} />
                                    <span
                                        className={`text-xs font-light leading-[14px] ${person.isDark ? "text-black" : "text-white"}`}
                                        style={{ fontVariant: "all-small-caps" }}
                                    >
                                        {person.phone}
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}