import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Fund, Profile, Transfer } from './components/Account';
import { PublicRoute, PrivateRoute } from './components/Routes';
import Account from './pages/Account';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index path="" element={(<PublicRoute><User /></PublicRoute>)} />
          <Route path=":userId" element={(<PrivateRoute><Account /></PrivateRoute>)}>
            <Route index path="" element={(<PrivateRoute><Profile /></PrivateRoute>)} />
            <Route path="fund" element={(<PrivateRoute><Fund /></PrivateRoute>)} />
            <Route path="transfer" element={(<PrivateRoute><Transfer /></PrivateRoute>)} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
