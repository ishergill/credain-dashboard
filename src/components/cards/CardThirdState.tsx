import React from "react";

interface CardThirdStateProps {
  NoOfthirdStateTransactions: number;
}

const CardThirdState = ({
  NoOfthirdStateTransactions,
}: CardThirdStateProps) => {
  return (
    <div className="bg-gray-200 p-8 w-[300px] h-[150px]  rounded shadow flex">
<img width="48" height="48" src="https://img.icons8.com/color/48/circular-arrows--v1.png" alt="circular-arrows--v1"/>
      <div className="ml-1">
        <div className="text-lg font-semibold">Previous Cycle</div>
        <div className="mt-2">
          <div className="mb-2">{NoOfthirdStateTransactions}</div>
        </div>
      </div>
    </div>
  );
};

export default CardThirdState;
