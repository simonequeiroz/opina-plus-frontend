import React from 'react';
import { Container, Typography, Box, Card, CardContent, Chip, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// Mock data for demonstration (filtered for the logged-in user)
const mockMyFeedbacks = [
  { id: 1, title: 'Problema com Login', company: 'Tech Solutions', status: 'Aberto', date: '27/05/2025' },
  { id: 6, title: 'Sugestão de Recurso', company: 'App Masters', status: 'Em Análise', date: '22/05/2025' },
];

const getStatusChipColor = (status) => {
  switch (status) {
    case 'Aberto': return 'error';
    case 'Em Análise': return 'warning';
    case 'Resolvido': return 'success';
    default: return 'default';
  }
};

const MyFeedbacksPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Meus Feedbacks Enviados
        </Typography>
        <Button variant="contained" component={Link} to="/novo-feedback">
          Enviar Novo Feedback
        </Button>
      </Box>

      {/* Feedback Cards */}
      {mockMyFeedbacks.length > 0 ? (
        <Grid container spacing={3}>
          {mockMyFeedbacks.map((feedback) => (
            <Grid item xs={12} sm={6} md={4} key={feedback.id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {feedback.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Empresa: {feedback.company}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Chip label={feedback.status} color={getStatusChipColor(feedback.status)} size="small" />
                    <Typography variant="body2" color="text.secondary">
                      {feedback.date}
                    </Typography>
                  </Box>
                  {/* Add a button/link to view details later */}
                  {/* <Button size="small" sx={{ mt: 1 }}>Ver Detalhes</Button> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography sx={{ mt: 4, textAlign: 'center' }} color="text.secondary">
          Você ainda não enviou nenhum feedback.
        </Typography>
      )}
    </Container>
  );
};

export default MyFeedbacksPage;
