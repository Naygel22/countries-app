import { useState } from "react";
import styles from "./SearchForm.module.css"

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
        className={styles.searchForm}
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for a country..."
      />
    </form>
  );
};
