import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export const SidebarData = [
    {
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        icon: <SettingsIcon />,
        link: "/settings"
    },
    {
        icon: <SearchIcon />,
        link: "/search"
    },
    {
        icon: <HelpOutlineOutlinedIcon />,
        link: "/help"
    }
]