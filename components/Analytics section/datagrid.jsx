import Reviews from "./5starreview"
import Customers from "./globalcustomers"
import Downloads from "./globaldownloads"
import Roi from "./ROI"

function Datagrid(){
    return(

       
        <div className="grid grid-cols-1 self-center justify-center sm:grid-cols-2 gap-y-[2rem] max-[990px]:gap-x-[6rem]  md:basis-2/3 content-center justify-self-center  ">
            <Customers/>
            <Roi/>
            <Downloads/>
            <Reviews/>
        </div>
     
    )
}

export default Datagrid