
import { Divider } from "@mantine/core";
import Profile from "../Profile/Profile";
import { profile } from "../Data/Talentdata";

const ProfilePage=()=>{
    return<div className="min-h-[90vh] bg-mine-shaft-950 font-['poppis']">
    <Divider mx="md" mb="xl"></Divider>
    <Profile {...profile}/>

    </div>
}
export default ProfilePage;