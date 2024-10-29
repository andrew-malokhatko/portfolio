import Image from "next/image";
import educations from "@/lib/education";

const EducationMap = () => {
  return (
    <div className='relative w-full flex border border-border-dark p-4 rounded-md overflow-hidden'>
        <div className='absolute top-0 left-10 w-[1px] bg-foreground h-full' />
        <div className='flex flex-col gap-8'>
            {educations.map(({year, degree, institution, description, image}) => (
                <div className='flex items-center gap-10 z-10' key={institution}>
                    <Image src={image} alt="University logo" className="rounded-full" width={50} height={50} />
                    <div className='flex flex-col'>
                        <p className='text-text-shadow text-xs'>{year}</p>
                        <h4 className='text-lg font-semibold'>{institution}</h4>
                        <p className='text-sm text-foreground-secondary mt-1'>{degree}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default EducationMap;