"use client" 
import Link from "next/link"
import { useState } from "react"
import { RiMenuLine, RiCloseLine } from "react-icons/ri"
import { HiOutlineViewGrid, HiChatAlt2, HiAdjustments, HiCalendar, HiMail, HiCog } from "react-icons/hi";


export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed)

    }
    return (
    <div className={`${isCollapsed ? "w-16": "w-64"}`}>
        {/* <p>toggle is {isCollapsed ? "Collapsed":"Expanded"}</p> */}
        <button 
        onClick={toggleCollapse}>
        {isCollapsed? <RiCloseLine size = {24}/> :  
        <div className="flex items-center gap-2">
        <span>MailGenie</span>
        {isCollapsed ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
      </div>
        }
        </button> 
        <ul>
            <li>
                <Link href="/dashboard">{isCollapsed ? <HiOutlineViewGrid size = {24}/>: "Dashboard"}</Link>
            </li>
            <li>
                <Link href="/conversations">{isCollapsed ? <HiChatAlt2 size = {24}/>: "Conversations"}</Link>
            </li>
            <li>
                <Link href="/integrations">{isCollapsed ? <HiAdjustments size = {24}/>: "Integrations"}</Link>
            </li>
            <li>
                <Link href="/appointments">{isCollapsed ? <HiCalendar size = {24}/>: "Appointments"}</Link>
            </li>
            <li>
                <Link href="/emailmarketing">{isCollapsed ? <HiMail size = {24}/>: "Email Marketing"}</Link>
            </li>
            <li>
                <Link href="/settings">{isCollapsed ? <HiCog size = {24}/>: "Settings"}</Link>
            </li>
        </ul>
    </div>
    );
  }
  