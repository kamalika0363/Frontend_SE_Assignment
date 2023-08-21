import mail from "/Features/mail.svg" 
import zap from "/Features/zap.svg"
import barChart from "/Features/bar-chart-2.svg"
import smile from "/Features/smile.svg"
import command from "/Features/command.svg"
import message from "/Features/message-circle.svg"

function Features (){

    const FeaturesArr = [
        {
            header: "Share team inboxes",
            subHead: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
            img: mail,
        },
        {
            header: "Deliver instant answers",
            subHead: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
            img: zap,
        },
        {
            header: "Manage your team with reports",
            subHead: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
            img: barChart,
        },
        {
            header: "Connect with customers",
            subHead: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
            img: smile,
        },
        {
            header: "Connect the tools you already use",
            subHead: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
            img: command,
        },
        {
            header: "Our people make the difference",
            subHead: "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
            img: message,
        }
    ]



    return(
        <div className="flex flex-col py-24 px-8">
        {/* main div */}
            <div className="text-center mb-16">
            {/* text part */}
                <p className="text-[#6941C6] text-base mb-3">
                    Features
                </p>

                <p className=" text-4xl text-[#101828] mb-5 font-semibold">
                Analytics that feels like it’s from the future

                </p>

                <p className="text-xl text-[#667085] sm:text-2xl sm:px-12 lg:px-72">
                Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                </p>

            </div>

            <div className="flex justify-around flex-wrap gap-8 sm:px-28 ">
            {/* svgs */}

                {
                    FeaturesArr.map ((step, index)=>(
                        <div key={index} className="flex items-center flex-col max-w-sm">
                            {/* mail svg */}
                            <div className="mb-5 bg-[#F4EBFF] rounded-full border-[#F9F5FF] p-3 border-8">
                                <img src={step.img}/>
                            </div>
                        
                            <p className=" text-xl">
                            {step.header}
                            </p>
                        
                            <p className=" text-base text-[#667085] text-center">
                            {step.subHead}
                            </p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Features;