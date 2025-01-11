# Financial Data Filtering App
## FrontEnd Website
[https://harutauchino.github.io/financial-data-filtering-app/](https://harutauchino.github.io/financial-data-filtering-app/)

## Github Page
[https://github.com/HarutaUchino/financial-data-filtering-app](https://github.com/HarutaUchino/financial-data-filtering-app)

This application fetches and displays annual income statements for Apple (AAPL) from the Financial Modeling Prep API. Users can filter and sort the data to analyze key financial metrics.

## 1. Project Structure

The project structure is organized as follows:

```
financial-data-filtering-app/
├── README.md
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── public/
│   └── index.html
└── src/
    ├── App.jsx
    ├── App.css
    ├── index.js
    |── index.css
    ├── components/
    │   ├── FinancialTable.jsx
    │   └── Filters.jsx
    └── services/
        └── api.js
```

### (Optional) If using FastAPI for a backend:
```
financial-data-filtering-app/
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── ...
└── ...
```

## 2. Setup Instructions

### 2.1. Frontend Setup (React with TailwindCSS)

1.  **Create a new React app:**

    ```bash
    npx create-react-app 1-financial
    cd 1-financial
    mkdir src/components
    ```

2.  **Install TailwindCSS:**

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

3.  **Configure Tailwind:**
    *   In `tailwind.config.js`, ensure the `content` array includes my source files.
    *   In `src/index.css` (or `App.css`), include the Tailwind directives:
        ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```

4.  **Install additional dependencies (if needed):**

    ```bash
    npm install axios
    ```

### 2.2. Backend Setup (Optional - FastAPI)

1.  **Create a `backend` folder** at the root of my project.
2.  **Install FastAPI & dependencies** in a separate virtual environment:

    ```bash
    cd backend
    python -m venv venv
    source venv/bin/activate  # or venv\Scripts\activate on Windows
    pip install fastapi uvicorn requests os dotenv
    ```

3.  **Create a `main.py` file** with my FastAPI application logic.

## 3. Running the Application

### 3.1. Frontend

1.  **Setting json**
    ```json
        "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject",
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    },  
    ```

2.  **Start the development server:**

    ```bash
    npm start
    ```

    The application will typically be accessible at `http://localhost:3000`.

### 3.2. Backend (Optional)

1.  **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2.  **Run the FastAPI server:**

    ```bash
    uvicorn main:app --reload
    ```

    The backend will typically be accessible at `http://localhost:8000`.


## 5. Deployment

### 5.1. Deploy to GitHub Pages (Frontend Only)

1.  **Install `gh-pages`:**

    ```bash
    npm install --save-dev gh-pages
    ```

2.  **Add deployment scripts** to my `package.json`:

    ```json
    {
      "homepage": "https://<my-username>.github.io/<repo-name>/",
      "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
      },
    }
    ```

3.  **Deploy:**

    ```bash
    npm run deploy
    ```

    my app should now be live at `https://<my-username>.github.io/<repo-name>/`.

## 6. Link to Deployed App

[Deployed on GitHub Pages](https://harutauchino.github.io/financial-data-filtering-app/)

## 7. Conclusion

This application provides a way to fetch, filter, and sort financial data for Apple (AAPL) using the Financial Modeling Prep API. It includes:

*   A React (JavaScript) frontend with TailwindCSS styling.
*   Filtering by date range, revenue range, and net income range.
*   Sorting by date, revenue, and net income.
*   A responsive design for desktop and mobile.
*   An optional FastAPI backend for server-side filtering and sorting.
*   A straightforward deployment process using GitHub Pages.

