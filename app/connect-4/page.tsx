import Connect4Board from '@/components/connect-4/Connect4Board';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full flex justify-between gap-4 mt-[10%] min-h-fit select-none mb-16">
      <Connect4Board></Connect4Board>
    </div>
  );
};

export default Home;