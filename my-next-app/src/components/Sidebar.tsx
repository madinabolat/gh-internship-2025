import Link from "next/link"

export default function Sidebar() {
    return (
    <div>
        {/* <h1>Sidebar</h1> */}
        <ul>
            <li>
                <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link href="/conversations">Conversations</Link>
            </li>
            <li>
                <Link href="/integrations">Integrations</Link>
            </li>
            <li>
                <Link href="/appointments">Appointments</Link>
            </li>
            <li>
                <Link href="/emailmarketing">Email Marketing</Link>
            </li>
            <li>
                <Link href="/settings">Settings</Link>
            </li>
        </ul>
    </div>
    );
  }
  