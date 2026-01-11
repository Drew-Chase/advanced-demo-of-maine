import mainLogo from '../images/advanced-demo-logo.svg';

export default function Footer() {
    return (
        <footer className="w-full h-[92px] bg-[#2A5240] relative">
            <img
                src={mainLogo}
                alt="Advanced Demo Logo"
                className="absolute w-[64px] h-[64px] left-[100px] top-[17px] invert"
            />
            <div className="absolute left-[175px] top-[50%] -translate-y-1/2 flex flex-col text-white leading-[0.8] text-[24px]">
                <span>Advanced</span>
                <span>Demo</span>
            </div>
            <p className="absolute w-[340px] h-[12px] left-1/2 -translate-x-1/2 top-[75px] font-sans italic font-normal text-[10px] leading-[12px] flex items-center text-white whitespace-nowrap">
                {new Date().getFullYear()} © Advanced Demo. All Rights Reserved. Website by <span className="font-bold ml-1 underline">LFIneractive LLC</span>.
            </p>
        </footer>
    );
}