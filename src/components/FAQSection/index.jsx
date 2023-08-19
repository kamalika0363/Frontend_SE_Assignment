import React from "react";

function FAQ() {
  const FAQdata = [
    "Can I change my plan later?",
    "What is your cancellation policy?",
    "Can other info be added to an invoice?",
    "How does billing work?",
    "How do I change my account email?"
  ]
  return <div className="flex flex-col gap-16 py-24 items-center">
    <div className="flex flex-col px-8 gap-5 items-center w-full sm:w-auto">
      <h1 className="text-gray-900 text-center text-3xl md:text-4xl font-semibold">Frequently asked questions</h1>
      <p className="text-gray-500 text-center text-lg md:text-xl font-normal">Everything you need to know about the product and billing.</p>
    </div>
    <div className="flex flex-col px-8 gap-6 items-center w-full sm:w-[36rem] md:w-[48rem]">
      <div className="flex items-start gap-6">
        <div className="flex flex-col gap-2 items-start">
          <p className="text-gray-900 text-lg font-medium">Is there a free trial available?</p>
          <p className="text-gray-500 text-base font-normal">Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
        </div>
        <img src="/FAQSection/minusCircle.png" alt="" />
      </div>
      {FAQdata.map(content => {
        return <div className="flex items-start justify-between gap-6 pt-6 border-t-[1px] border-t-gray-200 w-full">
          <div className="flex flex-col gap-2 items-start">
            <p className="text-gray-900 text-lg font-medium">{content}</p>
          </div>
          <img src="/FAQSection/plusCircle.png" alt="" />
        </div>
      })}
    </div>
    <div className="flex flex-col gap-8 p-8 items-center rounded-2xl bg-gray-50 w-[20rem] sm:w-[36rem] md:w-[48rem] xl:w-[80rem]">
      <img src="/FAQSection/avatarGroup.png" alt="" />
      <div className="flex flex-col gap-2 items-center">
        <p className="text-gray-900 text-xl font-semibold">Still have questions?</p>
        <p className="text-gray-500 text-base font-normal">Can't find the answer you're looking for? Please chat to our friendly team.</p>
      </div>
      <button className="rounded-lg bg-[#7F56D9] py-2.5 px-4 text-white font-semibold">Get in touch</button>
    </div>
  </div>;
}

export default FAQ;
