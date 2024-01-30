import { MoonLoader } from 'react-spinners';

const SpinnerLoader = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <MoonLoader size={150} color="#22d3ee" />
    </div>
  );
};

export default SpinnerLoader;
