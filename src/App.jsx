import React, { useEffect, useState } from "react";
import axios from "axios";
import FinancialTable from "./components/FinancialTable";
import Filters from "./components/Filters";

function App() {
  const [financialData, setFinancialData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Filters
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [minRevenue, setMinRevenue] = useState("");
  const [maxRevenue, setMaxRevenue] = useState("");
  const [minNetIncome, setMinNetIncome] = useState("");
  const [maxNetIncome, setMaxNetIncome] = useState("");

  // Sorting
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // or "desc"

  useEffect(() => {
    const API_URL = `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${process.env.REACT_APP_API_KEY}`;    axios
      .get(API_URL)
      .then((res) => {
        const data = res.data || [];
        setFinancialData(data);
        setFilteredData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Filtering logic
  useEffect(() => {
    let data = [...financialData];

    // Date Range Filter
    if (startYear) {
      data = data.filter((item) => {
        const year = new Date(item.date).getFullYear();
        return year >= parseInt(startYear);
      });
    }

    if (endYear) {
      data = data.filter((item) => {
        const year = new Date(item.date).getFullYear();
        return year <= parseInt(endYear);
      });
    }

    // Revenue Range Filter
    if (minRevenue) {
      data = data.filter(
        (item) => item.revenue && item.revenue >= parseInt(minRevenue)
      );
    }
    if (maxRevenue) {
      data = data.filter(
        (item) => item.revenue && item.revenue <= parseInt(maxRevenue)
      );
    }

    // Net Income Range Filter
    if (minNetIncome) {
      data = data.filter(
        (item) => item.netIncome && item.netIncome >= parseInt(minNetIncome)
      );
    }
    if (maxNetIncome) {
      data = data.filter(
        (item) => item.netIncome && item.netIncome <= parseInt(maxNetIncome)
      );
    }

    // Sorting
    if (sortKey) {
      data.sort((a, b) => {
        let compareA = a[sortKey];
        let compareB = b[sortKey];

        // Convert dates to timestamp for correct sorting
        if (sortKey === "date") {
          compareA = new Date(a.date).getTime();
          compareB = new Date(b.date).getTime();
        }

        if (sortOrder === "asc") {
          return compareA - compareB;
        } else {
          return compareB - compareA;
        }
      });
    }

    setFilteredData(data);
  }, [
    financialData,
    startYear,
    endYear,
    minRevenue,
    maxRevenue,
    minNetIncome,
    maxNetIncome,
    sortKey,
    sortOrder,
  ]);

  const handleSort = (key) => {
    // If the user clicks the same column, toggle the sort order
    if (sortKey === key) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AAPL Financial Data (Annual)</h1>
      <Filters
        startYear={startYear}
        setStartYear={setStartYear}
        endYear={endYear}
        setEndYear={setEndYear}
        minRevenue={minRevenue}
        setMinRevenue={setMinRevenue}
        maxRevenue={maxRevenue}
        setMaxRevenue={setMaxRevenue}
        minNetIncome={minNetIncome}
        setMinNetIncome={setMinNetIncome}
        maxNetIncome={maxNetIncome}
        setMaxNetIncome={setMaxNetIncome}
      />
      <FinancialTable data={filteredData} onSort={handleSort} />
    </div>
  );
}

export default App;
