import { Menu, Button, Text, Avatar } from '@mantine/core';
import { Switch } from '@mantine/core';
<<<<<<< HEAD


=======
>>>>>>> 99166604a113c2ad9c6d83b6aed3b7323d6bd303
import { IconSun, IconMoon, IconLogout2 } from '@tabler/icons-react';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconUserCircle,
  IconFileText,
  
  IconMoonStars,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../Slices/UserSlice';


const  ProfileMenu=()=> {
  const dispatch=useDispatch();
  const user=useSelector((state:any)=>state.user);
  const [checked, setChecked] = useState(false);
  const [opened, setOpened] = useState(false);
  const handleLogout=()=>
  {
    dispatch(removeUser());
  }
  return (
    
    
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
      <Menu.Target>
      <div className="flex items-center cursor-pointer gap-2">
                    <div>
                        {user.name}
                    </div>
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWEXZEcK46VFU6VDTgO3e1NqniAwSvxfUnSg&s"/>
                </div>
      </Menu.Target>

      <Menu.Dropdown onChange={()=>setOpened(true)}>
        <Link to={"/profile"}>
        <Menu.Item leftSection={<IconUserCircle size={14} />}>
          Profile
        </Menu.Item>
        </Link>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText size={14} />}>
         Resume
        </Menu.Item>
        <Menu.Item
          leftSection={<IconMoon size={14} />}
          rightSection={
            <Switch  checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)}
      size="md"
      onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
      offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)" />}
    />
          }
        >
          Dark Mode 
        </Menu.Item>

        <Menu.Divider onClick={handleLogout} />

    
        <Menu.Item
          leftSection={<IconArrowsLeftRight size={14} />}
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<IconLogout2 size={14} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default ProfileMenu;