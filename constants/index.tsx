import {  House, List, BriefcaseBusinessIcon } from "lucide-react"
export const NAV_ITEMS = [
    {icon: <House size={25}/> ,label: "Home", href: "/"},
    {icon: <List size={25}/>, label: "Browse Jobs", href: "/jobs"},
    {icon: <BriefcaseBusinessIcon size={25}/>, label: "Post A Job", href: "/jobs/post"},
]