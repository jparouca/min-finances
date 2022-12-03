import { MagnifyingGlass } from "phosphor-react";
import {SearchFormContainer} from "./style";
import * as zod from 'zod';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useContext} from "react";
import {TransactionContext} from "../../contexts/TransactionContext";

const searchFormSchema = zod.object({
  query: zod.string(),
});
type SearchFormInputs = zod.infer<typeof searchFormSchema>
export function SearchForm() {
  const {fetchTransactions} = useContext(TransactionContext)
  const {
    register,
    handleSubmit,
    formState: {isSubmitting}
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text" placeholder="Search a transaction"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  );
}