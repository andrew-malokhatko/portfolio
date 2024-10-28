import { StaticImageData } from "next/image";
import Image from "next/image";

import STU_LOGO from "@/public/stulogo.png"
import EINSTEIN_LOGO from "@/public/einsteinlogo.png"

interface Education {
  year: string;
  institution: string;
  degree: string;
  description: string;
  image:  StaticImageData;
}

const mockEducation: Education[]= [
  {
    year: 'Sep 2024 - Present',
    institution: 'Slovak University of Technologies',
    degree: 'Bachelors degree in Computer science',
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

const EducationMap = () => {
  return (
    <div className='relative w-full flex border border-border-dark p-4 rounded-md overflow-hidden'>
        <div className='absolute top-0 left-10 w-[1px] bg-white h-full' />
        <div className='flex flex-col gap-8'>
            {mockEducation.map(({year, degree, institution, description, image}) => (
                <div className='flex items-center gap-10 z-10' key={institution}>
                    <Image src={image} alt="University logo" className="rounded-full" width={50} height={50} />
                    <div className='flex flex-col'>
                        <p className='text-gray-400 text-xs'>{year}</p>
                        <h4 className='text-xl'>{institution}</h4>
                        <p className='text-sm mt-1'>{degree}</p>
                       
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default EducationMap;


/*
    <div className="max-w-3xl mx-auto p-5 relative">
      <h2 className="text-center text-2xl font-bold mb-10">Education Journey</h2>
      <div className="before:absolute before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:h-full before:bg-gray-700">
        {mockEducation.map((edu, index) => (
          <div key={index} className="my-10 relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-gray-700 rounded-full"></div>
            <div className="w-[45%] ml-[55%] p-5 bg-gray-100 rounded">
              <h3 className="font-bold mb-2">{edu.degree}</h3>
              <h4 className="text-gray-600 mb-2">{edu.institution}</h4>
              <p className="text-gray-400 mb-2">{edu.year}</p>
              <p className="text-gray-700">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
*/