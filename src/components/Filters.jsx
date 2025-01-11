import React from "react";

function Filters({
  startYear,
  setStartYear,
  endYear,
  setEndYear,
  minRevenue,
  setMinRevenue,
  maxRevenue,
  setMaxRevenue,
  minNetIncome,
  setMinNetIncome,
  maxNetIncome,
  setMaxNetIncome,
}) {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium">Start Year</label>
        <input
          type="number"
          value={startYear}
          onChange={(e) => setStartYear(e.target.value)}
          className="border p-1 rounded"
          placeholder="e.g., 2018"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">End Year</label>
        <input
          type="number"
          value={endYear}
          onChange={(e) => setEndYear(e.target.value)}
          className="border p-1 rounded"
          placeholder="e.g., 2023"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Min Revenue</label>
        <input
          type="number"
          value={minRevenue}
          onChange={(e) => setMinRevenue(e.target.value)}
          className="border p-1 rounded"
          placeholder="e.g., 50000000"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Max Revenue</label>
        <input
          type="number"
          value={maxRevenue}
          onChange={(e) => setMaxRevenue(e.target.value)}
          className="border p-1 rounded"
          placeholder="e.g., 200000000"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Min Net Income</label>
        <input
          type="number"
          value={minNetIncome}
          onChange={(e) => setMinNetIncome(e.target.value)}
          className="border p-1 rounded"
          placeholder="e.g., 10000000"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Max Net Income</label>
        <input
          type="number"
          value={maxNetIncome}
          onChange={(e) => setMaxNetIncome(e.target.value)}
          className="border p-1 rounded"
          placeholder="e.g., 100000000"
        />
      </div>
    </div>
  );
}

export default Filters;
