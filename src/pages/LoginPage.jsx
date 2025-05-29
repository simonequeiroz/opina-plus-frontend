import React from 'react';
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

// Placeholder for the actual login logic
const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Mock login logic: Determine user type based on email/password (replace with real auth)
    const email = event.target.email.value;
    let userType = 'cliente'; // Default to client
    if (email.includes('admin')) {
      userType = 'admin';
    } else if (email.includes('empresa')) {
      userType = 'empresa';
    }
    
    if (onLogin) {
      onLogin(userType);
    }
    // Navigate based on type (or let the parent component handle it)
    if (userType === 'admin') {
        navigate('/PainelAdmin');
    } else if (userType === 'empresa') {
        navigate('/painel-empresa');
    } else {
        navigate('/'); // Navigate clients to home or their dashboard
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleLoginSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* Add Remember me checkbox if needed */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
          <Box textAlign="center">
            <Link to="/cadastro" variant="body2">
              {"Não tem uma conta? Cadastre-se"}
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
