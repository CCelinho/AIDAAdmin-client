import { ClipLoader } from 'react-spinners';

interface ClipProps {
  size: number;
}

const Clip: React.FC<ClipProps> = ({ size }) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <ClipLoader size={size} color="#22d3ee" />
    </div>
  );
};

export default Clip;
