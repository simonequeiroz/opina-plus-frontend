import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaBullhorn, FaSignInAlt, FaUserPlus, FaCog, FaPlusCircle, FaCommentDots, FaChartBar, FaSignOutAlt, FaBuilding } from 'react-icons/fa';

// Versão completa do Header com ícones restaurados e link para cadastro de empresa
const Header = ({ userType, onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#003366' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo como texto para evitar problemas com a imagem */}
        <Link to="/" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
          Opina+
        </Link>

        <Box>
          {/* Links com ícones */}
          <Button component={Link} to="/" sx={{ color: 'white', mx: 1 }} startIcon={<FaHome />}>Início</Button>
          <Button component={Link} to="/reclamacoes" sx={{ color: 'white', mx: 1 }} startIcon={<FaBullhorn />}>Feedbacks</Button>

          {/* Lógica condicional baseada no tipo de usuário */}
          {!userType ? (
            <>
              <Button component={Link} to="/login" sx={{ color: 'white', mx: 1 }} startIcon={<FaSignInAlt />}>Login</Button>
              <Button component={Link} to="/cadastro" sx={{ color: 'white', mx: 1 }} startIcon={<FaUserPlus />}>Cadastro</Button>
              <Button component={Link} to="/cadastro-empresa" sx={{ color: 'white', mx: 1 }} startIcon={<FaBuilding />}>Cadastro Empresa</Button>
              <Button component={Link} to="/PainelAdmin" sx={{ color: 'white', mx: 1 }} startIcon={<FaCog />}>Admin</Button>
            </>
          ) : (
            <>
              {userType === 'cliente' && (
                <>
                  <Button component={Link} to="/novo-feedback" sx={{ color: 'white', mx: 1 }} startIcon={<FaPlusCircle />}>Novo Feedback</Button>
                  <Button component={Link} to="/meus-feedbacks" sx={{ color: 'white', mx: 1 }} startIcon={<FaCommentDots />}>Meus Feedbacks</Button>
                </>
              )}
              {userType === 'empresa' && (
                <Button component={Link} to="/painel-empresa" sx={{ color: 'white', mx: 1 }} startIcon={<FaChartBar />}>Painel da Empresa</Button>
              )}
              <Button onClick={handleLogoutClick} sx={{ color: 'white', ml: 1 }} startIcon={<FaSignOutAlt />}>Sair</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
