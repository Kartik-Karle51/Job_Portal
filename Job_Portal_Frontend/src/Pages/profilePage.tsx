
import { Divider } from "@mantine/core";
import Profile from "../Profile/Profile";
<<<<<<< HEAD
=======
import { profile } from "../Data/Talentdata";
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303

const ProfilePage=()=>{
    return<div className="min-h-[90vh] bg-mine-shaft-950 font-['poppis']">
    <Divider mx="md" mb="xl"></Divider>
<<<<<<< HEAD
    <Profile/>
=======
    <Profile {...profile}/>
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303

    </div>
}
export default ProfilePage;