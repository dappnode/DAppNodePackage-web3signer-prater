import { AiFillHome } from "react-icons/ai";
import { BsFillKeyFill } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";

interface NavBarData {
  title: string;
  path: string;
  icon: any;
  cname: string;
}

export const navBarData: NavBarData[] = [
  {
    title: "Dashboard",
    path: "/",
    icon: AiFillHome,
    cname: "nav-text",
  },
  {
    title: "Keymanager",
    path: "/keymanager",
    icon: BsFillKeyFill,
    cname: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: AiFillInfoCircle,
    cname: "nav-text",
  },
];
