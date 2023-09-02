import React from "react";

interface CardNumTransactionsProps {
  numTransactions?: number;
}

const CardNumTransactions = ({ numTransactions }: CardNumTransactionsProps) => {
  return (
    <div className="bg-violet-100 p-8 w-[300px] h-[150px]  rounded shadow flex">
      <img width="70" height="50" src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/external-money-bag-business-vitaliy-gorbachev-blue-vitaly-gorbachev.png" alt="external-money-bag-business-vitaliy-gorbachev-blue-vitaly-gorbachev" />
      <div className="ml-2">
        <div className="text-md font-semibold">Number of Transactions</div>
        <div className="mt-1">
          <div className="mb-2">{numTransactions} K</div>
        </div>
      </div>
    </div>
  );
};

export default CardNumTransactions;
