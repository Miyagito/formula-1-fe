import { Routes, Route } from 'react-router-dom';
import SignInSide from '../pages/SignIn';

const Example = () => <h1>EXAMPLE</h1>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInSide />} />
      <Route path="/Example" element={<Example />} />
    </Routes>
  );
};

export default AppRoutes;
