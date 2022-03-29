import React from "react"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"
import PrintIcon from "@mui/icons-material/Print"
import EmailIcon from "@mui/icons-material/Email"
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp"
import AccountTreeIcon from "@mui/icons-material/AccountTree"

export default function Footer() {
  return (
    <div className="foot">
      <ul className="footlist">
        <li>
          <a href="" target="_blank" className="link footerbutton">
            <AccountTreeIcon /> AE/ECO-MP
          </a>
        </li>
        <li>
          <a href="" target="_blank" className="link footerbutton">
            <ArrowRightIcon />
            <EmailIcon />
            Contact Admin
          </a>
        </li>
        <li>
          <a href="" target="_blank" className="link footerbutton">
            <ArrowRightIcon />
            <PrintIcon />
            Print
          </a>
        </li>
        <li>
          <a href="" target="_blank" className="link footerbutton">
            <ArrowRightIcon />
            <ArrowCircleUpIcon />
            Change Request
          </a>
        </li>
        <li className="name">Welcome FIXED TERM Elavenil P</li>
      </ul>
    </div>
  )
}
