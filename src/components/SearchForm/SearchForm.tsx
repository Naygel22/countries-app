import { useState } from "react";
import styles from "./SearchForm.module.css"

type SearchFormProps = {
  onSearch: (searchItem: string) => void
}

export const SearchForm = ({ onSearch }: SearchFormProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <form>
      <input
        className={styles.searchForm}
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search for a country..."
      />
    </form>
  );
};
