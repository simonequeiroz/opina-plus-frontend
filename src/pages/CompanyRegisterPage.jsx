import React from 'react';
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const CompanyRegisterPage = () => {
  const navigate = useNavigate();

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Placeholder para lógica de registro de empresa
    console.log('Registro de empresa enviado');
    // Navegar para página de login após registro bem-sucedido
    navigate('/login');
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 8, mb: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5" gutterBottom>
          Cadastro de Empresa
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: 'center' }}>
          Preencha os dados abaixo para cadastrar sua empresa.
          {' '}
          <Link to="/cadastro" style={{ textDecoration: 'underline' }}>
            Cadastrar como cliente?
          </Link>
        </Typography>
        
        <Box component="form" onSubmit={handleRegisterSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="companyName"
            label="Razão Social"
            name="companyName"
            autoComplete="organization"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="tradeName"
            label="Nome Fantasia"
            name="tradeName"
            autoComplete="organization"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="cnpj"
            label="CNPJ"
            name="cnpj"
            inputProps={{ 
              maxLength: 18,
              placeholder: "00.000.000/0000-00"
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Corporativo"
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
            Cadastrar Empresa
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

export default CompanyRegisterPage;
