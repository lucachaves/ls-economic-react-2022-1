import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import EconomicDetails from './pages/EconomicDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';

import { EconomicDataContextProvider } from './contexts/EconomicContext';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Menu />
      <div className="container">
        <EconomicDataContextProvider>
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="economic/:id"
              element={
                <ProtectedRoute>
                  <EconomicDetails />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </EconomicDataContextProvider>
      </div>
    </>
  );
}

export default App;
