import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router';

import './styles/global.css'
import { routes } from './data/routes'
import DefaultLayout from './layout/DefaultLayout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          {routes.map(({ id, url, component: Component }) =>
            <Route
              key={id}
              path={url}
              element={<Component />}
            />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
