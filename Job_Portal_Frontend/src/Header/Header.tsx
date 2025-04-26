<<<<<<< HEAD
import { Avatar, Button, Indicator } from "@mantine/core";
import { IconBell, IconBriefcase, IconSettings } from "@tabler/icons-react";
import Navlinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";

const Header = () => {
    const location=useLocation();
    const user=useSelector((state:any)=>state.user);
=======
import { Avatar, Indicator } from "@mantine/core";
import { IconBell, IconBriefcase, IconSettings } from "@tabler/icons-react";
import Navlinks from "./NavLinks";
import { useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
    const location=useLocation();
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
    return location.pathname!="/signup" && location.pathname!="/login"?<div className="w-full bg-mine-shaft-950 
    px-6 text-white h-20 
    flex justify-between items-center font-['poppins']">
   
       
            <div className="flex gap-1 items-center text-bright-sun-400">
                <IconBriefcase className="h-8 w-8" stroke={2.5} />
                <div className="text-3xl font-semibold">DreamHire</div>
            </div>
            {Navlinks()}
            <div className="flex items-center gap-3">
                
               
<<<<<<< HEAD
                {user?<ProfileMenu/>:<Link to="/login">
                <Button variant="subtle" color="brightSun.4" >Login</Button></Link>}
=======
                <ProfileMenu/>
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <IconSettings stroke={1.5}/>
                </div>
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                    <Indicator color="bright-sun.4" size={8} offset={5} processing>
                <IconBell stroke={1.5}/>
                </Indicator>
                </div>
            </div>
        </div>:<></>
        
    
}
export default Header;