from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import requests
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

# CORS config so React can fetch from this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development only, restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/financial-data")
def get_financial_data(
    start_year: int = None,
    end_year: int = None,
    min_revenue: int = None,
    max_revenue: int = None,
    min_net_income: int = None,
    max_net_income: int = None,
    sort_key: str = None,
    sort_order: str = "asc",
):
    # Replace <api key> with your actual API key
    API_KEY = os.getenv('REACT_APP_API_KEY')
    api_url = f"https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey={API_KEY}"
    response = requests.get(api_url)
    data = response.json() if response.status_code == 200 else []

    # Filter logic
    if start_year:
        data = [d for d in data if d.get("date") and int(d["date"][:4]) >= start_year]
    if end_year:
        data = [d for d in data if d.get("date") and int(d["date"][:4]) <= end_year]
    if min_revenue:
        data = [d for d in data if d.get("revenue") and d["revenue"] >= min_revenue]
    if max_revenue:
        data = [d for d in data if d.get("revenue") and d["revenue"] <= max_revenue]
    if min_net_income:
        data = [d for d in data if d.get("netIncome") and d["netIncome"] >= min_net_income]
    if max_net_income:
        data = [d for d in data if d.get("netIncome") and d["netIncome"] <= max_net_income]

    # Sort logic
    if sort_key in ["date", "revenue", "netIncome"]:
        reverse_sort = True if sort_order == "desc" else False
        if sort_key == "date":
            data.sort(key=lambda x: x.get("date", ""), reverse=reverse_sort)
        else:
            data.sort(key=lambda x: x.get(sort_key, 0), reverse=reverse_sort)

    return data
