import * as Dialog from "@radix-ui/react-dialog";
import {ArrowCircleDown, ArrowCircleUp, X} from "phosphor-react";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./style";
import * as zod from 'zod';
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useContext} from "react";
import {TransactionContext} from "../../contexts/TransactionContext";

const newTransactionModalSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  tag: zod.string(),
  type: zod.enum(['income', 'outcome']),
});

type NewTransactionModalInputs = zod.infer<typeof newTransactionModalSchema>;
export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionContext);

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionModalInputs>({
    resolver: zodResolver(newTransactionModalSchema),
    defaultValues: {
      type: 'income'
    }
  })

  async function handleCreateNewTransaction(data: NewTransactionModalInputs) {
    const { description, price, tag, type } = data;

    await createTransaction({
      description,
      price,
      tag,
      type,
    });

    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <CloseButton>
          <X />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            placeholder="Description"
            type="text"
            required
            {...register('description')}
          />
          <input
            placeholder="Price"
            type="number"
            required
            {...register('price', {valueAsNumber: true })}
          />
          <input
            placeholder="Tag"
            type="text"
            required
            {...register('tag')}
          />
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />Income</TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />Outcome</TransactionTypeButton>
                </TransactionType>
              )
            }}
          />
          <button type="submit" disabled={isSubmitting}>Create</button>
        </form>

      </Content>
    </Dialog.Portal>
  )
}