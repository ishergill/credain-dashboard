import React from "react";

interface CardTotalAmountProps {
  totalAmount?: number;
}

const CardTotalAmount = ({ totalAmount }: CardTotalAmountProps) => {
  return (
    <div className="bg-slate-100 p-8 w-[300px] h-[150px] rounded shadow flex">
<img width="70" height="70" src="https://img.icons8.com/color/48/all.png" alt="all"/>
<div className="ml-2">
      <div className="text-lg font-semibold">Total Amount</div>
      <div className="mt-2">
        <div className="mb-2">{totalAmount}k USD</div>
      </div>
    </div>
    </div>
  );
};

export default CardTotalAmount;
