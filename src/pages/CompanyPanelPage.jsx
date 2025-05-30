import React from 'react';
import { Box, Container, Grid, Paper, Typography, Link } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { DataGrid } from '@mui/x-data-grid';
import { FaRegClock, FaRegListAlt, FaRegStar, FaExclamationCircle } from 'react-icons/fa';

// Mock data for demonstration
const mockFeedbacks = [
  { id: 1, title: 'Bateria do Smartphone Z dura pouco', date: '2025-05-28', customer: 'Ana Silva', status: 'Pendente', rating: 2 },
  { id: 2, title: 'Notebook Pro X esquenta demais', date: '2025-05-27', customer: 'Carlos Souza', status: 'Em análise', rating: 3 },
  { id: 3, title: 'Excelente Smartwatch Y', date: '2025-05-26', customer: 'Beatriz Lima', status: 'Respondido', rating: 5 },
  { id: 4, title: 'Tablet K com tela riscada na entrega', date: '2025-05-25', customer: 'Daniel Costa', status: 'Pendente', rating: 1 },
  { id: 5, title: 'Software da Smart TV lento', date: '2025-05-24', customer: 'Eduarda Alves', status: 'Respondido', rating: 3 },
  { id: 6, title: 'Fone de ouvido sem fio com ótimo som', date: '2025-05-23', customer: 'Felipe Martins', status: 'Publicado', rating: 4 },
  { id: 7, title: 'Carregador parou de funcionar', date: '2025-05-22', customer: 'Gabriela Rocha', status: 'Pendente', rating: 2 },
];

// Calculate metrics
const totalFeedbacks = mockFeedbacks.length;
const pendingFeedbacks = mockFeedbacks.filter(f => f.status === 'Pendente').length;
const averageRating = totalFeedbacks > 0 ? (mockFeedbacks.reduce((sum, f) => sum + f.rating, 0) / totalFeedbacks).toFixed(1) : 'N/A';

// Prepare data for the bar chart (distribution by rating) - CORRECTED
const ratingCounts = {
  1: 0, 2: 0, 3: 0, 4: 0, 5: 0 // Initialize all counts to 0
};
mockFeedbacks.forEach(f => {
  if (ratingCounts[f.rating] !== undefined) {
    ratingCounts[f.rating]++;
  }
});

const chartData = {
  // Ensure all labels are present
  labels: ['1 Estrela', '2 Estrelas', '3 Estrelas', '4 Estrelas', '5 Estrelas'],
  series: [
    {
      // Ensure data array corresponds to all labels
      data: [
        ratingCounts[1],
        ratingCounts[2],
        ratingCounts[3],
        ratingCounts[4],
        ratingCounts[5],
      ],
      label: 'Número de Feedbacks',
      color: '#1976d2' // Primary color
    },
  ],
};

// Define columns for the DataGrid
const columns = [
  { field: 'title', headerName: 'Título', flex: 2, minWidth: 250 },
  {
    field: 'date',
    headerName: 'Data',
    flex: 1,
    minWidth: 120,
    valueFormatter: (params) => new Date(params.value).toLocaleDateString('pt-BR'),
  },
  { field: 'customer', headerName: 'Cliente', flex: 1, minWidth: 150 },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    minWidth: 120,
    renderCell: (params) => (
      <Typography
        variant="body2"
        sx={{
          color: params.value === 'Pendente' ? 'error.main' :
                 params.value === 'Em análise' ? 'warning.main' :
                 params.value === 'Respondido' ? 'success.main' :
                 'text.secondary',
          fontWeight: 'medium'
        }}
      >
        {params.value}
      </Typography>
    ),
  },
  {
    field: 'rating',
    headerName: 'Avaliação',
    flex: 1,
    minWidth: 100,
    renderCell: (params) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <FaRegStar style={{ color: '#faaf00', marginRight: '4px' }} />
        {params.value}
      </Box>
    ),
  },
  {
    field: 'actions',
    headerName: 'Ações',
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    flex: 1,
    minWidth: 100,
    renderCell: (params) => (
      // In a real app, this would link to a feedback detail page or open a modal
      <Link href="#" underline="hover" onClick={(e) => { e.preventDefault(); alert(`Ver detalhes do feedback ID: ${params.id}`); }}>
        Ver Detalhes
      </Link>
    ),
  },
];

// Widget Component
const MetricWidget = ({ title, value, icon, color }) => (
  <Paper elevation={3} sx={{ p: 3, display: 'flex', alignItems: 'center', height: '100%' }}>
    <Box sx={{ fontSize: '2.5rem', color: color || 'primary.main', mr: 2 }}>
      {icon}
    </Box>
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{value}</Typography>
      <Typography variant="body2" color="text.secondary">{title}</Typography>
    </Box>
  </Paper>
);

const CompanyPanelPage = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#003366', mb: 4 }}>
        Painel da Empresa
      </Typography>

      {/* Widgets de Métricas - Usando Grid v2 */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid xs={12} sm={6} md={3}>
          <MetricWidget title="Feedbacks Pendentes" value={pendingFeedbacks} icon={<FaExclamationCircle />} color="error.main" />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <MetricWidget title="Total de Feedbacks" value={totalFeedbacks} icon={<FaRegListAlt />} />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <MetricWidget title="Avaliação Média" value={averageRating} icon={<FaRegStar />} color="#faaf00" />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          {/* Placeholder for another metric */}
          <MetricWidget title="Taxa de Resposta" value="85%" icon={<FaRegClock />} />
        </Grid>
      </Grid>

      {/* Gráfico e Tabela - Usando Grid v2 */}
      <Grid container spacing={3}>
        {/* Gráfico de Barras - CORRECTED */}
        <Grid xs={12} lg={5}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Distribuição de Avaliações
            </Typography>
            <Box sx={{ height: 300 }}>
              <BarChart
                // Ensure xAxis data matches the labels array length
                xAxis={[{ scaleType: 'band', data: chartData.labels }]}
                series={chartData.series}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                tooltip={{ trigger: 'item' }}
                // Optional: Define y-axis domain if needed, otherwise it adjusts automatically
                // yAxis={[{ min: 0 }]} 
              />
            </Box>
          </Paper>
        </Grid>

        {/* Tabela de Feedbacks */}
        <Grid xs={12} lg={7}>
          <Paper elevation={3} sx={{ height: 500, width: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold	', p: 2 }}>
              Últimos Feedbacks Recebidos
            </Typography>
            <DataGrid
              rows={mockFeedbacks}
              columns={columns}
              pageSizeOptions={[5, 10]}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 5 },
                },
                sorting: {
                  sortModel: [{ field: 'date', sort: 'desc' }],
                },
              }}
              autoHeight={false} // Set to false to use the fixed height
              sx={{ border: 0 }} // Remove default border
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CompanyPanelPage;
