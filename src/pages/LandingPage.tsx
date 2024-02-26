import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const [searchStr, setSearchStr] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchStr.length < 3) {
      return 'Please input at least 3 letters';
    } else {
      navigate(`/search-result/${searchStr}`);
    }
  };

  return (
    <form
      className="flex h-screen items-center justify-center"
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="Pesquisar"
        type="text"
        value={searchStr}
        onChange={(e) => setSearchStr(e.target.value)}
        className="mx-1 max-w-96"
      />
      <Button type="submit" size={'default'}>
        Search
      </Button>
    </form>
  );
}
