import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { DataGrid } from '@mui/x-data-grid';

const feedbackData = {
  meses: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  quantidades: [5, 12, 8, 20, 15, 10],
};

const colunasUsuarios = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'nome', headerName: 'Nome', width: 150 },
  { field: 'email', headerName: 'E-mail', width: 200 },
  { field: 'tipo', headerName: 'Tipo', width: 130 },
];

const linhasUsuarios = [
  { id: 1, nome: 'João Silva', email: 'joao@email.com', tipo: 'Admin' },
  { id: 2, nome: 'Maria Oliveira', email: 'maria@email.com', tipo: 'Cliente' },
];

export default function AdminDashboard() {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: '#0d3c61',
          mb: 4,
        }}
      >
        Painel Administrativo
      </Typography>

      <Grid container spacing={4}>
        {/* Gráfico de Feedbacks */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ mb: 2, color: '#0d3c61', fontWeight: 600 }}
              >
                Feedbacks por Mês
              </Typography>
              <BarChart
                xAxis={[{ scaleType: 'band', data: feedbackData.meses }]}
                series={[{ data: feedbackData.quantidades }]}
                width={500}
                height={300}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Tabela de Usuários */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{ mb: 2, color: '#0d3c61', fontWeight: 600 }}
              >
                Gerenciamento de Usuários
              </Typography>
              <Box
                sx={{
                  height: 300,
                  borderRadius: 2,
                  '& .MuiDataGrid-root': {
                    border: 'none',
                  },
                }}
              >
                <DataGrid
                  rows={linhasUsuarios}
                  columns={colunasUsuarios}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  sx={{
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                  }}
                />
              </Box>

              <Box mt={2} display="flex" justifyContent="flex-end">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#0d3c61',
                    '&:hover': {
                      backgroundColor: '#094372',
                    },
                    borderRadius: 2,
                    paddingX: 3,
                    paddingY: 1,
                    fontWeight: 'bold',
                  }}
                >
                  + Novo Usuário
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
