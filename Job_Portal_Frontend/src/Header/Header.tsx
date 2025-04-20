import { Avatar, Indicator } from "@mantine/core";
import { IconBell, IconBriefcase, IconSettings } from "@tabler/icons-react";
import Navlinks from "./NavLinks";

const Header = () => {
    return (
        <div className="w-full bg-mine-shaft-950 h-20 text-white flex justify-between px-6 items-center font-['poppins']">
            <div className="flex gap-1 items-center text-bright-sun-400"><IconBriefcase className="h-8 w-8" stroke={2.5} />
                <div className="text-3xl font-semibold">DreamHire</div>
            </div>
            {Navlinks()}
            <div className="flex items-center gap-3">
                
                <div className="flex items-center gap-2">
                    <div>
                        KK
                    </div>
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWEXZEcK46VFU6VDTgO3e1NqniAwSvxfUnSg&s"/>
                </div>
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <IconSettings stroke={1.5}/>
                </div>
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                    <Indicator color="bright-sun.4" size={8} offset={5} processing>
                <IconBell stroke={1.5}/>
                </Indicator>
                </div>
            </div>
        </div>
    )
}
export default Header;