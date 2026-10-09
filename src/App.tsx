import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { UserGroups } from './pages/UserGroups';
import { Dashboard } from './pages/Dashboard';
import { AppAnalysis } from './pages/AppAnalysis';
import { Survey } from './pages/Survey';
import { Findings } from './pages/Findings';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<UserGroups />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="apps" element={<AppAnalysis />} />
          <Route path="survey" element={<Survey />} />
          <Route path="findings" element={<Findings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
