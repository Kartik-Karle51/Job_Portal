import { Avatar } from "@mantine/core";
import Data from "../Data/Data";

const Working=()=>{
    const {work}=Data();
return <div className="mt-20 pb-5">
<div className="text-4xl mb-10 font-semibold text-mine-shaft-100 text-center">
    How it <span className="text-bright-sun-400">Works ?</span> 
</div>

<div className="text-lg text-mine-shaft-300 text-center w-1/2 mx-auto mb-10">Effortlessly navigate through the progress and land your dream job.</div>
<div className="flex gap-5 px-16 justify-between items-center">
    <div className="relative">
    <img className="w-[30rem]" src="/Working/Girl.png" alt="Girl" />
    <div className="w-36 flex flex-col gap-1 items-center border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md absolute top-[15%] right-0">
       <Avatar src="avatar1.png" className="!h-16 !w-16"/>
       <div className="text-sm font-semibold text-mine-shaft-200 text-center">
        Complete your profile
       </div>
       <div className="text-xs text-mine-shaft-300 ">70% Completed</div>

    </div>
    </div>
    <div className="flex flex-col gap-10">
      {
        work.map((item,index)=>  <div className="flex items-center gap-4">
        <div className="p-3.5 bg-bright-sun-300 rounded-full">
            <img src={`/Working/${item.name}.png`} alt={item.name}className="w-20"/>
        </div>
        <div>
        <div className="text-mine-shaft-200 text-xl font-semibold">{item.name}</div>
        <div className="text-mine-shaft-300">{item.desc}</div>
        </div>
    </div>)
      }
    </div>
</div>

</div>
}
export default Working;