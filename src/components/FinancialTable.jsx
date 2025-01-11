import React from "react";

function FinancialTable({ data, onSort }) {
  return (
    <table className="min-w-full border-collapse border border-slate-300">
      <thead>
        <tr className="bg-gray-100">
          <th
            className="p-2 border border-slate-300 cursor-pointer"
            onClick={() => onSort("date")}
          >
            Date
          </th>
          <th
            className="p-2 border border-slate-300 cursor-pointer"
            onClick={() => onSort("revenue")}
          >
            Revenue
          </th>
          <th
            className="p-2 border border-slate-300 cursor-pointer"
            onClick={() => onSort("netIncome")}
          >
            Net Income
          </th>
          <th className="p-2 border border-slate-300">Gross Profit</th>
          <th className="p-2 border border-slate-300">EPS</th>
          <th className="p-2 border border-slate-300">Operating Income</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.date} className="hover:bg-gray-50">
            <td className="p-2 border border-slate-300">{item.date}</td>
            <td className="p-2 border border-slate-300">{item.revenue}</td>
            <td className="p-2 border border-slate-300">{item.netIncome}</td>
            <td className="p-2 border border-slate-300">{item.grossProfit}</td>
            <td className="p-2 border border-slate-300">{item.eps}</td>
            <td className="p-2 border border-slate-300">
              {item.operatingIncome}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FinancialTable;
