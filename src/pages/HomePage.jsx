import React from 'react';
import { Container, Typography, Button, Box, Paper, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaUserPlus, FaBuilding } from 'react-icons/fa';

const HomePage = () => {
  return (
    <>
      {/* Hero Section com imagem de fundo */}
      <Box
        sx={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url("/atendimento.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '80px 16px',
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: 4
        }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            mb: 3
          }}
        >
          Bem-vindo(a) ao Opina+!
        </Typography>
        
        <Typography 
          variant="h5" 
          component="p" 
          sx={{ 
            maxWidth: '800px',
            mb: 5,
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}
        >
          Sua voz importa. Conectando clientes e empresas para um futuro melhor.
          Compartilhe suas experiências e ajude a melhorar produtos e serviços.
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mt: 2 }}>
          <Button 
            component={Link}
            to="/cadastro"
            variant="contained" 
            color="primary"
            startIcon={<FaUserPlus />}
            sx={{ 
              bgcolor: '#1976d2', 
              padding: '12px 24px',
              borderRadius: '30px',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                bgcolor: '#1565c0'
              }
            }}
          >
            Cadastre-se como Cliente
          </Button>
          
          <Button 
            component={Link}
            to="/cadastro-empresa"
            variant="contained"
            startIcon={<FaBuilding />}
            sx={{ 
              bgcolor: 'white', 
              color: '#003366',
              padding: '12px 24px',
              borderRadius: '30px',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                bgcolor: '#f5f5f5'
              }
            }}
          >
            Cadastre minha Empresa
          </Button>
        </Box>
      </Box>

      {/* Seção de benefícios */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ mb: 6, fontWeight: 'bold', color: '#003366' }}
        >
          Por que usar o Opina+?
        </Typography>
        
        <Grid container spacing={4}>
          {/* Card 1 */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ 
              padding: 3, 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: 10,
              }
            }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
                Feedback Direto
              </Typography>
              <Typography variant="body1">
                Envie suas opiniões diretamente para as empresas e veja como seus comentários fazem a diferença na melhoria de produtos e serviços.
              </Typography>
            </Paper>
          </Grid>
          
          {/* Card 2 */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ 
              padding: 3, 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: 10,
              }
            }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
                Análise de Dados
              </Typography>
              <Typography variant="body1">
                Empresas recebem insights valiosos através de dashboards interativos e relatórios detalhados sobre a experiência dos clientes.
              </Typography>
            </Paper>
          </Grid>
          
          {/* Card 3 */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ 
              padding: 3, 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: 10,
              }
            }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
                Comunicação Eficiente
              </Typography>
              <Typography variant="body1">
                Estabeleça um canal direto de comunicação entre clientes e empresas, promovendo transparência e confiança.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: '#003366', color: 'white', py: 6, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Pronto para começar?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Junte-se a milhares de usuários e empresas que já estão transformando feedback em melhorias reais.
          </Typography>
          <Button 
            component={Link}
            to="/cadastro"
            variant="contained" 
            sx={{ 
              bgcolor: 'white', 
              color: '#003366',
              padding: '12px 24px',
              borderRadius: '30px',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                bgcolor: '#f5f5f5'
              }
            }}
          >
            Comece Agora
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
