import {SummaryCard, SummaryContainer} from "./style";
import {ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from "phosphor-react";
import React from "react";

export function Summary() {
  return (
    <SummaryContainer>

      <SummaryCard>
        <header>
          <span>Incomes</span>
          <ArrowCircleUp size={28} color="#274726"/>
        </header>
        <strong>$ 1000,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Expenses</span>
          <ArrowCircleDown size={28} color="#b43128"/>
        </header>
        <strong>$ 1000,00</strong>
      </SummaryCard>

      <SummaryCard variant={"green"}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={28} color="#fff"/>
        </header>
        <strong>$ 1000,00</strong>
      </SummaryCard>

    </SummaryContainer>



  )}