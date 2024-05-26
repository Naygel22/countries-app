import { useState } from "react";

type SearchFormProps = {
  onSearch: (searchItem: string) => void
}

export const SearchForm = ({ onSearch }: SearchFormProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for a country..."
      />
    </form>
  );
};
