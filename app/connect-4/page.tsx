import Connect4Board from '@/components/connect-4/Connect4Board';

const Home = () => {
  return (
    <main className="w-full min-h-[calc(100vh-120px)] flex items-center justify-center py-8">
      <Connect4Board></Connect4Board>
    </main>
  );
};

export default Home;