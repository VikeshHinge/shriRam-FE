import { IoTvOutline } from "react-icons/io5";
import { TbFridge, TbWashMachine, TbSofa } from "react-icons/tb";
import { GiCooler } from "react-icons/gi";
import { LuAirVent } from "react-icons/lu";
import { MdOutlineDining } from "react-icons/md";
import { PiDresserFill } from "react-icons/pi";

import { LiaChairSolid } from "react-icons/lia";
import { FaToiletPortable } from "react-icons/fa6";

export const HeaderItems = [
  { name: "TV", value: "TV", icon: IoTvOutline },
  { name: "Fridge", value: "FRIDGE", icon: TbFridge },
  { name: "Washing Machine", value: "WASHING MACHINE", icon: TbWashMachine },
  { name: "Almirah", value: "ALMIRAH", icon: FaToiletPortable },
  { name: "Dressing Table", value: "DRESSING TABLE", icon: PiDresserFill },
  { name: "Dining Table", value: "DINING TABLE", icon: MdOutlineDining },
  { name: "Sofa", value: "SOFA", icon: TbSofa },
  { name: "Chairs", value: "CHAIRS", icon: LiaChairSolid },
  { name: "Cooler", value: "COOLER", icon: GiCooler },
  { name: "AC", value: "AC", icon: LuAirVent },
];
