import React from "react";
import { Form, Input, Button, Textarea } from "@heroui/react";


export default function ContactUs() {
    const [action, setAction] = React.useState<string | null>(null);

    return (
        <div id="contact-container" className="w-full bg-[#F4F4F4] flex justify-center py-20 relative">
            <div className="w-full max-w-[1600px] px-8 flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-[32px] leading-[38px] font-roboto font-normal text-black uppercase">Contact Us</h2>
                    <div className="w-[203px] h-[1px] bg-[#2A5240] rounded-full"></div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row items-start gap-4 w-full">
                    {/* Left Side: Form */}
                    <div className="w-full flex-1">
                        <Form
                            className="flex flex-col gap-5 w-full"
                            validationBehavior="native"
                            onReset={() => setAction("reset")}
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                const data = Object.fromEntries(formData);
                                setAction(`submit ${JSON.stringify(data)}`);
                            }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                <Input
                                    label="First Name"
                                    labelPlacement="outside"
                                    placeholder="John"
                                    name="firstName"
                                    radius="none"
                                    classNames={{
                                        label: "text-black text-base",
                                        input: "text-[#5F5959] text-base",
                                        inputWrapper: "bg-transparent border border-black/50 hover:bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent shadow-none h-[47px]"
                                    }}
                                />
                                <Input
                                    label="Last Name"
                                    labelPlacement="outside"
                                    placeholder="Smith"
                                    name="lastName"
                                    radius="none"
                                    classNames={{
                                        label: "text-black text-base",
                                        input: "text-[#5F5959] text-base",
                                        inputWrapper: "bg-transparent border border-black/50 hover:bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent shadow-none h-[47px]"
                                    }}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                <Input
                                    label="Organization"
                                    labelPlacement="outside"
                                    placeholder="Business, Inc."
                                    name="organization"
                                    radius="none"
                                    classNames={{
                                        label: "text-black text-base",
                                        input: "text-[#5F5959] text-base",
                                        inputWrapper: "bg-transparent border border-black/50 hover:bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent shadow-none h-[47px]"
                                    }}
                                />
                                <Input
                                    label="Email"
                                    labelPlacement="outside"
                                    placeholder="name@email.com"
                                    name="email"
                                    type="email"
                                    radius="none"
                                    classNames={{
                                        label: "text-black text-base",
                                        input: "text-[#5F5959] text-base",
                                        inputWrapper: "bg-transparent border border-black/50 hover:bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent shadow-none h-[47px]"
                                    }}
                                />
                            </div>

                            <Input
                                label={<span className="text-black text-base">Phone <span className="text-[10px] font-light">(Optional)</span></span>}
                                labelPlacement="outside"
                                placeholder="name@email.com"
                                name="phone"
                                radius="none"
                                classNames={{
                                    label: "text-black text-base",
                                    input: "text-[#5F5959] text-base",
                                    inputWrapper: "bg-transparent border border-black/50 hover:bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent shadow-none h-[47px]"
                                }}
                            />

                            <Textarea
                                label="Message"
                                labelPlacement="outside"
                                placeholder="How can we help you?"
                                name="message"
                                radius="none"
                                disableAnimation
                                disableAutosize
                                classNames={{
                                    label: "text-black text-base",
                                    input: "text-[#5F5959] text-base h-full resize-none",
                                    inputWrapper: "bg-transparent border border-black/50 hover:bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent shadow-none h-[202px]"
                                }}
                            />

                            <Button
                                type="submit"
                                radius="none"
                                className="bg-[#FFD701] text-black font-roboto font-bold uppercase w-[165px] h-[37px] text-sm justify-start px-4"
                            >
                                Get in touch
                            </Button>

                            {action && (
                                <div className="text-small text-default-500 p-2 bg-gray-100 rounded border border-black/10">
                                    Action: <code>{action}</code>
                                </div>
                            )}
                        </Form>
                    </div>

                    {/* Right Side: Map */}
                    <div className="relative lg:mt-6 flex-1 w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d91176.15307606918!2d-69.50075960903322!3d44.427935663948105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1768020818091!5m2!1sen!2sus"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="shadow-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}