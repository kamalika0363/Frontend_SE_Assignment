import Datagrid from "./datagrid"
import 'tailwindcss/tailwind.css';
import image from "/Analytics section/Image.png"

function Statistics(){
    return(
     <div className="flex  content-center justify-center gap-x-[6rem] my-[3rem] xl:my-[4rem] ">
       <Datagrid/>
       <div className="flex-1 flex justify-center content-center max-[990px]:hidden md:basis-1/3  " >
        <img  src={image} alt="" />
        </div>

       
     </div>
    )
}

export default Statistics