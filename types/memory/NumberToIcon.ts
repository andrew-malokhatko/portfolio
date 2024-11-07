import { LucideIcon, Star } from "lucide-react";
import { Square } from "lucide-react";
import { Circle } from "lucide-react";
import { Triangle } from "lucide-react";
import { Club } from "lucide-react";
import { Spade } from "lucide-react";
import { Sparkle } from "lucide-react";
import { Heart } from "lucide-react";

const numberToIcon: {[id: number]: LucideIcon} = 
{
    0 : Star,
    1 : Square,
    2 : Circle,
    3 : Triangle,
    4 : Club,
    5 : Spade,
    6 : Sparkle,
    7 : Heart,
}

export default numberToIcon