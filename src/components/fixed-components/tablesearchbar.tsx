import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface TableSearchbarProps {
  onSearch: (query: string) => void;
}

const TableSearchbar: React.FC<TableSearchbarProps> = ({ onSearch }) => {
  const [searchString, setSearchString] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchString);
  };

  return (
    <div className="flex items-center py-4">
      <form onSubmit={handleSearch}>
        <Input
          placeholder="Pesquisar"
          value={searchString}
          onChange={handleChange}
        ></Input>
      </form>
      <Button type="submit" variant={'default'}>
        Search
      </Button>
    </div>
  );
};

export default TableSearchbar;
