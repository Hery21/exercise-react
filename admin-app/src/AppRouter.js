import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ItemPage from './Pages/ItemPage';
import CategoryPage from './Pages/CategoryPage';

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ItemPage />
                    }
          />
          <Route
            path="categories"
            element={
              <CategoryPage />
                    }
          />
          <Route
            path="*"
            element={
              <h1>404 Not Found</h1>
                    }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
