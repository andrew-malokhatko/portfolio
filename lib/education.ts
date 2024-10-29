import { StaticImageData } from "next/image";

import STU_LOGO from "@/public/stulogo.png"
import EINSTEIN_LOGO from "@/public/einsteinlogo.png"

interface Education {
  year: string;
  institution: string;
  degree: string;
  description: string;
  image:  StaticImageData;
}

const educations: Education[]= [
  {
    year: 'Sep 2024 - Present',
    institution: 'Slovak University of Technologies',
    degree: 'Freshman\'s year at Computer science',
    description: 'Specialized in Artificial Intelligence and Machine Learning',
    image: STU_LOGO
  },
  {
    year: 'Sep 2022 - Jun 2024',
    institution: 'Gymnasium of Albert Einstein',
    degree: 'Mathematical bilingval gymnasium with focus on mathematics',
    description: 'Major in Software Engineering, Minor in Mathematics',
    image: EINSTEIN_LOGO
  },
];

export default educations;