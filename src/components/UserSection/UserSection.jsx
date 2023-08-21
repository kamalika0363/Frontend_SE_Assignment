
function UserSection() {
   return (
      <div>  
         <div className="py-20 px-12 sm:p-32  bg-gray-50 ">
            <div className="flex-col text-center ">
            <div className="flex justify-center gap-3"> <img  src="/UserSection/Logomark.svg"></img>
            <img src="/UserSection/Logotype.svg"></img></div>
            
            <div className="font-inter text-2xl md:text-3xl lg:text-4xl font-medium px-1 ">
               <div className="Main my-4"> We’ve been using Untitled to kick start every new project and can’t imagine working without it.</div>
            </div>
            
            <div >
               <div className=" flex justify-center mt-8 "> <img  src="/UserSection/Avatar.png"></img></div>
               <h6 className="text-lg font-medium mt-4"> Candice Wu </h6>
               <h6 className="text-base font-light"> Product Manager, Sisyphus</h6>
            </div>
         </div>

         </div>
      </div>
   )

}

export default UserSection;
