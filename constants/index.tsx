import { House, List, BriefcaseBusinessIcon, Album } from "lucide-react";

export const navLinks = [
  { icon: <House size={25} />, label: "Home", href: "/" },
  { icon: <List size={25} />, href: "/jobs", label: "Browse Jobs" },
  {
    icon: <BriefcaseBusinessIcon size={25} />,
    href: "/jobs/post",
    label: "Post A Jobs",
  },
  { icon: <Album size={25} />, href: "/about", label: "About" },
];
