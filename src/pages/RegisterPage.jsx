import React from 'react';
import { Container, Typography, TextField, Button, Box, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = React.useState('cliente');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Placeholder para lógica de registro
    console.log('Registro de cliente enviado');
    // Navegar para página de login após registro bem-sucedido
    navigate('/login');
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 8, mb: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5" gutterBottom>
          Cadastro de Cliente
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: 'center' }}>
          Preencha os dados abaixo para se cadastrar como cliente.
          {' '}
          <Link to="/cadastro-empresa" style={{ textDecoration: 'underline' }}>
            Cadastrar como empresa?
          </Link>
        </Typography>
        
        <Box component="form" onSubmit={handleRegisterSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nome Completo"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de Email"
            name="email"
            autoComplete="email"
            type="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirmar Senha"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Cadastrar
          </Button>
          
          <Box textAlign="center">
            <Link to="/login" variant="body2">
              Já tem uma conta? Faça login
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
