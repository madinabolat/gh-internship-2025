"use client" 
import Link from "next/link"
import { useState } from "react"

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed)

    }
    return (
    <div className={`${isCollapsed ? "w-16": "w-64"}`}>
        {/* <p>toggle is {isCollapsed ? "Collapsed":"Expanded"}</p> */}
        <button onClick={toggleCollapse}>+</button> 
        <ul>
            <li>
                <Link href="/dashboard">{isCollapsed ? "D": "Dashboard"}</Link>
            </li>
            <li>
                <Link href="/conversations">{isCollapsed ? "D": "Conversations"}</Link>
            </li>
            <li>
                <Link href="/integrations">{isCollapsed ? "I": "Integrations"}</Link>
            </li>
            <li>
                <Link href="/appointments">{isCollapsed ? "A": "Appointments"}</Link>
            </li>
            <li>
                <Link href="/emailmarketing">{isCollapsed ? "E": "Email Marketing"}</Link>
            </li>
            <li>
                <Link href="/settings">{isCollapsed ? "S": "Settings"}</Link>
            </li>
        </ul>
    </div>
    );
  }
  