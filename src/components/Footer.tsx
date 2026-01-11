import mainLogo from '../images/advanced-demo-logo.svg';

export default function Footer() {
    return (
        <footer className="w-full h-24 bg-primary relative flex flex-col">

            <div className="h-full flex flex-row ml-24 text-white text-xl items-center mt-[15px]">
                <img
                    src={mainLogo}
                    alt="Advanced Demo Logo"
                    className="w-[64px] h-[64px] invert flex flex-col"
                />
                <p className="ml-2">Advanced<br />Demo</p>
            </div>
            <p className="w-full italic text-[10px] flex justify-center text-white whitespace-nowrap">
                {new Date().getFullYear()} © Advanced Demo. All Rights Reserved. Website by <span className="font-bold ml-1 underline">LFIneractive LLC</span>.
            </p>
        </footer>
    );
}