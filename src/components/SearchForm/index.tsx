import { MagnifyingGlass } from "phosphor-react";
import {SearchFormContainer} from "./style";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Search a transaction" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  );
}