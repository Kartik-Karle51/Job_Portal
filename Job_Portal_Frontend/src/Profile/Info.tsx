// import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil } from "@tabler/icons-react"
// import fields from ".././Data/Profile";
// import { useForm } from "@mantine/form";

// import Company from "../CompanyProfile/Company";
// import { updateProfile } from "../Services/ProfileService";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { ActionIcon } from "@mantine/core";
// import { successNotification } from "../Services/NotificationService";
// import { changeProfile } from "../Slices/ProfileSlice";
// import SelectInput from "./SelectInput";
// const Info=()=>{
//     const select=fields;
//     const dispatch=useDispatch();
//     const user=useSelector((state:any)=>state.user);
//     const profile=useSelector((state:any)=>state.profile);
//     const [edit,setEdit]=useState(false);
//     const handleClick=()=>{
//         if(!edit)
//         {
//             setEdit(true);
//             form.setValue({jobTitle:profile.jobTitle,company:profile.company,location:profile.location});
//         }
//         else
//         {
//             setEdit(false);
//             let updatedProfile={...profile,...form.getValue()};
//             dispatch(changeProfile(updatedProfile));
//             successNotification("Success","Profile Updated Successfully");
//         }
        
//     }
//     const form = useForm({
//         mode: 'controlled',
//         initialValues: {jobTitle: '', company: '',location:'' },
        
//     });
//     return<>
//     <div className="text-3xl font-semibold flex justify-between">{user.name} 
//         <ActionIcon onClick={ handleClick} variant="subtle" color="brightSun.4" size="lg" >{edit[0] ? 
//         <IconDeviceFloppy className="w-4/5 h-4/5" stroke={1.5}/> :
//          <IconPencil className="w-4/5 h-4/5" stroke={1.5}/>}</ActionIcon></div>
//     {
//         edit? <> <div className ="flex gap-10 [&>*] :w-1/2 my-3">
//             <SelectInput  form={form} name="jobTitle" {...select[0]}/>
//             <SelectInput form={form} name="company" {...select[1]}/>
//             </div>
//             <SelectInput form={form} name="location" {...select[2]}/>
//             <><div className="text-xl flex gap-1 items-center">
//                 <IconBriefcase className="h-5 w-5" stroke={1.5} />{profile.jobTitle} 
//             &bull; {profile.company}</div>
//             <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
//                 <IconMapPin className="h-5 w-5" stroke={1.5} />{profile.location}</div></>
    
//                 </>
// }

import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil } from "@tabler/icons-react";
import fields from ".././Data/Profile";
import Company from "../CompanyProfile/Company";
import { updateProfile } from "../Services/ProfileService";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionIcon } from "@mantine/core";
import { successNotification } from "../Services/NotificationService";
import { changeProfile } from "../Slices/ProfileSlice";
import SelectInput from "./SelectInput";
import { useForm } from "@mantine/form"; // ✅ Import useForm properly

const Info = () => {
  const select = fields;
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const profile = useSelector((state: any) => state.profile);
  const [edit, setEdit] = useState(false);

  const form = useForm({
    mode: 'controlled',
    initialValues: { jobTitle: '', company: '', location: '' },
  });

  const handleClick = () => {
    if (!edit) {
      setEdit(true);
      form.setValues({ jobTitle: profile.jobTitle, company: profile.company, location: profile.location }); // ✅ setValues, not setValue
    } else {
      setEdit(false);
      let updatedProfile = { ...profile, ...form.getValues() }; // ✅ form.values, not form.getValue()
      dispatch(changeProfile(updatedProfile));
      successNotification("Success", "Profile Updated Successfully");
    }
  };

  return (
    <>
      <div className="text-3xl font-semibold flex justify-between">
        {user.name}
        <ActionIcon onClick={handleClick} variant="subtle" color="brightSun.4" size="lg">
          {edit ? (
            <IconDeviceFloppy className="w-4/5 h-4/5" stroke={1.5} />
          ) : (
            <IconPencil className="w-4/5 h-4/5" stroke={1.5} />
          )}
        </ActionIcon>
      </div>

      {edit ? (
        <>
          <div className="flex gap-10 [&>*]:w-1/2 my-3">
            <SelectInput form={form} name="jobTitle" {...select[0]} />
            <SelectInput form={form} name="company" {...select[1]} />
          </div>
          <SelectInput form={form} name="location" {...select[2]} />
        </>
      ) : (
        <>
          <div className="text-xl flex gap-1 items-center">
            <IconBriefcase className="h-5 w-5" stroke={1.5} />
            {profile.jobTitle} &bull; {profile.company}
          </div>
          <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
            <IconMapPin className="h-5 w-5" stroke={1.5} />
            {profile.location}
          </div>
        </>
      )}
    </>
  );
};

export default Info;
