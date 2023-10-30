import { Routes, Route } from 'react-router-dom';
import SignInSide from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const Example = () => <h1>EXAMPLE</h1>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInSide />} />
      <Route path="/Example" element={<Example />} />
      <Route path="/Admin" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
