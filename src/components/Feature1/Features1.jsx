import React from 'react'
import mail from '/Features1/cards/mail.svg'
import zap from '/Features1/cards/zap.svg'
import barchart from '/Features1/cards/bar-chart-2.svg'
import arrow from '/Features1/cards/arrow-right.svg'


export default function Features1() {
  return (
    
 <section className="flex mx-2 md:mx-4 flex-col items-center gap-12 pt-24">
  {/* ----------------------header section---------------------- */}
   <div className="top-container">
      <div className="badge-section text-xs m-auto text-[#6941C6] flex gap-3 pt-1 pr-1 pb-1 pl-1 rounded-2xl w-max items-center justify-center bg-gray-100">
      <p className="label-1 bg-[#F9F5FF] pl-1 pr-1 justify-start rounded-2xl">
      Features
      </p>
      </div>
     <div className="heading-section mt-3 flex flex-col gap-4 items-center">
     <h1 className="text-2xl md:text-4xl font-semibold text-center flex-wrap">
        Cutting-edge features for advanced analytics
     </h1>
     <p className="text-xl text-center text-[#667085] sm:text-xl sm:px-12 lg:px-72">
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
     </p>
      </div>
   </div>

   {/* ----------------------image section---------------------- */}
    <div className="img-container relative">
       <div className="img-section relative">
          <img className="  lg:w-[80%] m-auto" src="/Features1/mock_dashboard.png" />
          <img className="mobile absolute top-36 z-2 h-[85%] w-[35%] md:top-30 md:w-[30%] " src="/Features1/mobile_screen.png" />
       </div>
  {/* ----------------------footer cards section---------------------- */}
       <div className="cards flex flex-wrap gap-6 pt-20 py-10 ">
         <div className="card1n2 flex lg:mx-auto flex-wrap md:flex-wrap mx-auto justify-center">
            <div className="cards1  w-96  text-center sm:py-10">
         <div className="mail mx-44">
             <img src={mail} alt="" />
         </div>
         <p className=" text-xl">
           Share team inboxes
         </p>
         <p className=" text-base text-[#667085] text-center">
         Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
         </p>
         <button className="bottom flex items-center mx-auto text-[#6941C6]"> <span>Learn more </span><img src={arrow} alt="" />
         </button>
       </div>

       <div className="cards2 w-96 text-center mt-10">
         <div className="zap mx-44">
             <img src={zap} alt="" />
         </div>
         <p className=" text-xl">
         Deliver instant answers
         </p>
         <p className=" text-base text-[#667085] text-center">
         An all-in-one customer service platform that helps you balance everything your customers need to be happy.
         </p>
         <button className="bottom flex mx-auto text-[#6941C6]">Learn more <img src={arrow} className='' alt="" />
         </button>
            </div>
           </div>
            <div className="cards3 flex-col w-96 text-center mt-9 lg:flex mx-auto m-5">
         <div className="barchart mx-44">
             <img src={barchart} alt="" />
         </div>
         <p className=" text-xl">
         Manage your team with reports
         </p>
         <p className=" text-base text-[#667085] text-center">
          Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
          Learn more
         </p>
         <button className="bottom flex mx-auto text-[#6941C6]">Learn more <img src={arrow} alt="" />
         </button>
       </div>
       </div>
   

    </div>
 </section>

  )
}
