import TopBarIcon from "../TopBarIcon/TopBarIcon";
import {FiBox} from "react-icons/fi";

const TopBar = () => {
  return (
    <div className={"fixed w-[inherit] flex items-center justify-center space-x-5 bg-blue-400 font-bold h-16"}>
      <TopBarIcon icon={<FiBox size={"30"} />} />
      <TopBarIcon icon={<FiBox size={"30"} />} />
      <TopBarIcon icon={<FiBox size={"30"} />} />
      <TopBarIcon icon={<FiBox size={"30"} />} />
      <TopBarIcon icon={<FiBox size={"30"} />} />
    </div>
  )
}
export default TopBar;