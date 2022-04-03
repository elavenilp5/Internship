import React from "react"
import HomeIcon from "@mui/icons-material/Home"
import SettingsIcon from "@mui/icons-material/Settings"
import SearchIcon from "@mui/icons-material/Search"
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined"

export const SidebarData = [
  {
    icon: <HomeIcon sx={{ fontSize: "50px" }} />,
    link: "/home",
  },
  {
    icon: (
      <SettingsIcon
        sx={{
          fontSize: "50px",
        }}
      />
    ),
    link: "/settings",
  },
  {
    icon: (
      <SearchIcon
        sx={{
          fontSize: "50px",
        }}
      />
    ),
    link: "/search",
  },
  {
    icon: (
      <HelpOutlineOutlinedIcon
        sx={{
          fontSize: "50px",
          color: "info.main",
        }}
      />
    ),
    link: "/help",
  },
]
