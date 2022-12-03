import {SummaryCard, SummaryContainer} from "./style";
import {ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from "phosphor-react";
import React from "react";
import {priceFormatter} from "../../utils/formatter";
import {useSummary} from "../../hooks/useSummry";

export function Summary() {
  const summary = useSummary();
  return (
    <SummaryContainer>

      <SummaryCard>
        <header>
          <span>Incomes</span>
          <ArrowCircleUp size={28} color="#274726"/>
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Expenses</span>
          <ArrowCircleDown size={28} color="#b43128"/>
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant={"green"}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={28} color="#fff"/>
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>

    </SummaryContainer>



  )}