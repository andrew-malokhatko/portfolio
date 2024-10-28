interface ProjectCardProps {
  name: string;
  description: string;
  backgroundImage: string;
}

const ProjectCard = ({ name, description, backgroundImage }: ProjectCardProps) => {
  return (
    <div 
      className="relative w-72 h-96 rounded-lg overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </div>
  );
};
