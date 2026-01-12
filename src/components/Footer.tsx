import mainLogo from '../images/advanced-demo-logo.svg';

export default function Footer() {
    return (
        <footer className="w-full grid grid-cols-3 items-center px-24 py-4">
            {/* Logo section */}
            <div className="flex flex-row text-black text-xl items-center">
                <img
                    src={mainLogo}
                    alt="Advanced Demo Logo"
                    className="h-16"
                />
                <p className="ml-2">Advanced<br />Demo</p>
            </div>

            {/* Copyright text - centered in the middle grid column */}
            <p className="italic text-[10px] text-black text-center">
                {new Date().getFullYear()} © Advanced Demo. All Rights Reserved. Website by <span className="font-bold ml-1 underline">LFIneractive LLC</span>.
            </p>
        </footer>
    );
}