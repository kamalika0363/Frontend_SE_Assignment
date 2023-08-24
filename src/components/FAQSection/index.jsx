function FAQ() {
  const FAQdata = [
    "Can I change my plan later?",
    "What is your cancellation policy?",
    "Can other info be added to an invoice?",
    "How does billing work?",
    "How do I change my account email?",
  ];
  return (
    <div className="flex flex-col gap-16 py-12 items-center">
      <div className="flex flex-col px-8 gap-5 items-center w-full sm:w-auto">
        <h1 className="text-gray-900 text-center text-3xl md:text-4xl font-semibold">
          Frequently asked questions
        </h1>
        <p className="text-gray-500 text-center text-lg md:text-xl font-normal">
          Everything you need to know about the product and billing.
        </p>
      </div>
      <div className="flex flex-col px-8 gap-6 items-center w-full sm:w-[36rem] md:w-[48rem]">
        <div className="flex items-start gap-6">
          <div className="flex flex-col gap-2 items-start">
            <p className="text-gray-900 text-lg font-medium">
              Is there a free trial available?
            </p>
            <p className="text-gray-500 text-base font-normal">
              Yes, you can try us for free for 30 days. If you want, we&apos;ll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.
            </p>
          </div>
          <img src="/FAQSection/minusCircle.png" alt="" />
        </div>
        {FAQdata.map((content, index) => (
          <div
            key={index}
            className="flex items-start justify-between gap-6 pt-6 border-t-[1px] border-t-gray-200 w-full"
          >
            <div className="flex flex-col gap-2 items-start">
              <p className="text-gray-900 text-lg font-medium">{content}</p>
            </div>
            <img src="/FAQSection/plusCircle.png" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
