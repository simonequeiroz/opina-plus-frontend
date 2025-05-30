import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

// Import Page Components
import HomePage from '../pages/HomePage';
import FeedbacksPage from '../pages/FeedbacksPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import CompanyRegisterPage from '../pages/CompanyRegisterPage';
import AdminPanelPage from '../pages/AdminPanelPage';
import CompanyPanelPage from '../pages/CompanyPanelPage';
import NewFeedbackPage from '../pages/NewFeedbackPage';
import MyFeedbacksPage from '../pages/MyFeedbacksPage';
import NotFoundPage from '../pages/NotFoundPage';

// Main layout component including Header
const MainLayout = ({ userType, onLogout }) => (
  <div>
    <Header userType={userType} onLogout={onLogout} />
    <main style={{ padding: '0' }}> 
      <Outlet /> {/* Child routes will render here */}
    </main>
  </div>
);

// Router Configuration Component
const AppRoutes = () => {
  // Mock user state - TEMPORARILY set to 'empresa' for testing Company Panel
  const [userType, setUserType] = React.useState('empresa'); // null, 'cliente', 'empresa', 'admin'

  const handleLogin = (type) => {
    setUserType(type);
    // Navigate based on type after login - handled within LoginPage
  };

  const handleLogout = () => {
    setUserType(null);
    // Navigation back to home is handled in Header component
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout userType={userType} onLogout={handleLogout} />,
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'reclamacoes', element: <FeedbacksPage /> },
        { path: 'login', element: <LoginPage onLogin={handleLogin} /> },
        { path: 'cadastro', element: <RegisterPage /> },
        { path: 'cadastro-empresa', element: <CompanyRegisterPage /> }, // Nova rota para cadastro de empresa
        { path: 'PainelAdmin', element: <AdminPanelPage /> },
        { path: 'painel-empresa', element: <CompanyPanelPage /> },
        { path: 'novo-feedback', element: <NewFeedbackPage /> },
        { path: 'meus-feedbacks', element: <MyFeedbacksPage /> },
      ],
    },
    { path: '*', element: <NotFoundPage /> }
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
