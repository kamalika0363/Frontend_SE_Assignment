import React from "react";

function UserSection()
{
    return <div>  <div class="py-20 px-12 sm:p-32  bg-gray-50 ">
    <div class="flex-col text-center ">
   <div class="flex justify-center gap-3"> <img  src="/UserSection/Logomark.svg"></img>
    <img src="/UserSection/Logotype.svg"></img></div>
    
    <div class="font-inter text-2xl md:text-3xl lg:text-4xl font-medium px-1 ">
      
       <div class="Main my-4"> We’ve been using Untitled to kick start every new project and can’t imagine working without it.</div>
    </div>
   
    <div >
       <div class=" flex justify-center "> <img  src="/UserSection/Avatar.png"></img></div>
       <h6 class="text-lg font-medium mt-4"> Candice Wu </h6>
       <h6 class="text-base font-light"> Product Manager, Sisyphus</h6>
    </div>
</div>

</div></div>;

}

export default UserSection;
