import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Chip, 
  Grid, 
  Rating, 
  Collapse, 
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  IconButton,
  InputAdornment,
  Paper
} from '@mui/material';
import { 
  FaChevronDown, 
  FaChevronUp, 
  FaSearch, 
  FaFilter, 
  FaStar, 
  FaBuilding, 
  FaCalendarAlt, 
  FaTag
} from 'react-icons/fa';

// Dados de exemplo para os feedbacks
const feedbacksData = [
  {
    id: 1,
    title: "Problemas com durabilidade do produto",
    company: "TechGadgets Ltda",
    category: "Produto",
    subcategory: "Qualidade",
    date: "2025-05-15",
    summary: "Comprei o smartphone modelo X há apenas 3 meses e já apresenta problemas na bateria e na tela.",
    details: "Sou cliente da TechGadgets há anos e sempre confiei na qualidade dos produtos. Porém, o último smartphone que adquiri (modelo X) começou a apresentar problemas sérios após apenas 3 meses de uso. A bateria não dura mais que 4 horas, mesmo com uso moderado, e a tela está apresentando manchas escuras no canto superior. Já tentei contato com o suporte técnico, mas não obtive resposta satisfatória. Espero que a empresa possa resolver este problema, pois o aparelho ainda está na garantia.",
    status: "Em análise",
    rating: 2,
    images: []
  },
  {
    id: 2,
    title: "Interface do aplicativo confusa",
    company: "SoftSolutions S.A.",
    category: "Produto",
    subcategory: "Software",
    date: "2025-05-10",
    summary: "O novo design do aplicativo está muito confuso e difícil de navegar.",
    details: "Após a última atualização, o aplicativo ficou completamente diferente e muito mais difícil de usar. Botões importantes foram escondidos em submenus, o processo de pagamento agora requer mais cliques e a performance geral está mais lenta. Sugiro que a empresa considere um redesign mais intuitivo ou pelo menos ofereça uma opção para usar o layout antigo. Muitos usuários nos grupos de discussão estão relatando os mesmos problemas.",
    status: "Respondido",
    rating: 3,
    images: []
  },
  {
    id: 3,
    title: "Excelente qualidade do novo modelo",
    company: "EletroMax",
    category: "Produto",
    subcategory: "Desempenho",
    date: "2025-05-20",
    summary: "O novo modelo de notebook superou todas as minhas expectativas em termos de desempenho.",
    details: "Comprei o notebook modelo ProBook X3 há um mês e estou extremamente satisfeito. A velocidade de processamento é impressionante, mesmo executando softwares pesados de edição de vídeo. A bateria dura facilmente um dia inteiro de trabalho e o sistema de refrigeração é muito eficiente, mantendo o equipamento sempre em temperatura adequada. Parabéns à EletroMax pelo excelente produto! Recomendo fortemente para profissionais que precisam de alto desempenho.",
    status: "Publicado",
    rating: 5,
    images: []
  },
  {
    id: 4,
    title: "Problemas com atualizações automáticas",
    company: "SoftSolutions S.A.",
    category: "Produto",
    subcategory: "Software",
    date: "2025-05-05",
    summary: "As atualizações automáticas estão causando perda de dados e configurações personalizadas.",
    details: "Venho enfrentando sérios problemas com as atualizações automáticas do software de gestão. A cada atualização, perco configurações personalizadas e, em alguns casos, até dados importantes. O mais frustrante é que não há opção para desativar as atualizações automáticas ou escolher quais atualizações instalar. Isso tem prejudicado seriamente minha produtividade. Sugiro implementar um sistema de backup automático antes das atualizações e dar mais controle aos usuários sobre o processo de atualização.",
    status: "Em análise",
    rating: 2,
    images: []
  },
  {
    id: 5,
    title: "Design inovador, mas problemas de usabilidade",
    company: "DesignTech Inc.",
    category: "Produto",
    subcategory: "Design",
    date: "2025-05-18",
    summary: "O novo produto tem design revolucionário, mas sacrifica a usabilidade básica.",
    details: "O novo dispositivo SmartHome Controller tem um design realmente inovador e fica lindo na minha sala. No entanto, após algumas semanas de uso, percebi que o design prioriza a estética em detrimento da funcionalidade. Os botões são difíceis de identificar no escuro, a tela sensível ao toque frequentemente registra toques acidentais e a interface de usuário prioriza animações bonitas em vez de respostas rápidas. Sugiro um redesign que mantenha a beleza do produto, mas melhore significativamente a experiência do usuário e a praticidade no dia a dia.",
    status: "Publicado",
    rating: 3,
    images: []
  }
];

// Componente principal da página de Feedbacks
const FeedbacksPage = () => {
  // Estados para controle de filtros
  const [categoryFilter, setCategoryFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  
  // Estado para controlar quais cartões estão expandidos
  const [expandedCards, setExpandedCards] = useState({});
  
  // Função para alternar a expansão de um cartão
  const handleExpandCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  // Função para filtrar os feedbacks
  const filteredFeedbacks = feedbacksData.filter(feedback => {
    // Filtro por categoria
    if (categoryFilter && feedback.category !== categoryFilter) return false;
    
    // Filtro por empresa
    if (companyFilter && feedback.company !== companyFilter) return false;
    
    // Filtro por data (simplificado - apenas verifica se a data contém o texto)
    if (dateFilter && !feedback.date.includes(dateFilter)) return false;
    
    // Filtro por termo de busca (verifica título e resumo)
    if (searchTerm && 
        !feedback.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !feedback.summary.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  // Ordenar feedbacks
  const sortedFeedbacks = [...filteredFeedbacks].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date) - new Date(a.date); // Mais recentes primeiro
    } else if (sortBy === 'rating') {
      return b.rating - a.rating; // Melhor avaliação primeiro
    }
    return 0;
  });
  
  // Extrair categorias e empresas únicas para os filtros
  const categories = [...new Set(feedbacksData.map(f => f.category))];
  const companies = [...new Set(feedbacksData.map(f => f.company))];
  
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#003366', mb: 4 }}>
        Feedbacks
      </Typography>
      
      {/* Seção de filtros */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <FaFilter style={{ marginRight: '8px' }} /> Filtros
        </Typography>
        
        <Grid container spacing={2}>
          {/* Busca */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Buscar feedbacks"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaSearch />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          
          {/* Ordenação */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Ordenar por</InputLabel>
              <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                label="Ordenar por"
              >
                <MenuItem value="date">Data (mais recentes)</MenuItem>
                <MenuItem value="rating">Avaliação (melhores primeiro)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          {/* Filtro por categoria */}
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Categoria</InputLabel>
              <Select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                label="Categoria"
                startAdornment={<FaTag style={{ marginRight: '8px' }} />}
              >
                <MenuItem value="">Todas</MenuItem>
                {categories.map(category => (
                  <MenuItem key={category} value={category}>{category}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          
          {/* Filtro por empresa */}
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Empresa</InputLabel>
              <Select
                value={companyFilter}
                onChange={(e) => setCompanyFilter(e.target.value)}
                label="Empresa"
                startAdornment={<FaBuilding style={{ marginRight: '8px' }} />}
              >
                <MenuItem value="">Todas</MenuItem>
                {companies.map(company => (
                  <MenuItem key={company} value={company}>{company}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          
          {/* Filtro por data */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Data"
              type="date"
              variant="outlined"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaCalendarAlt />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          
          {/* Botão para limpar filtros */}
          <Grid item xs={12}>
            <Button 
              variant="outlined" 
              onClick={() => {
                setCategoryFilter('');
                setCompanyFilter('');
                setDateFilter('');
                setSearchTerm('');
                setSortBy('date');
              }}
              sx={{ mt: 1 }}
            >
              Limpar Filtros
            </Button>
          </Grid>
        </Grid>
      </Paper>
      
      {/* Resultados */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1">
          {sortedFeedbacks.length} {sortedFeedbacks.length === 1 ? 'feedback encontrado' : 'feedbacks encontrados'}
        </Typography>
      </Box>
      
      {/* Lista de feedbacks */}
      <Grid container spacing={3}>
        {sortedFeedbacks.length > 0 ? (
          sortedFeedbacks.map(feedback => (
            <Grid item xs={12} key={feedback.id}>
              <Card 
                elevation={3} 
                sx={{ 
                  mb: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-3px)'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                      {feedback.title}
                    </Typography>
                    <Rating value={feedback.rating} readOnly precision={0.5} />
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    <Chip 
                      icon={<FaBuilding size={14} />} 
                      label={feedback.company} 
                      size="small" 
                      sx={{ bgcolor: '#e3f2fd' }}
                    />
                    <Chip 
                      icon={<FaTag size={14} />} 
                      label={feedback.category} 
                      size="small" 
                      sx={{ bgcolor: '#e8f5e9' }}
                    />
                    {feedback.subcategory && (
                      <Chip 
                        label={feedback.subcategory} 
                        size="small" 
                        sx={{ bgcolor: '#f1f8e9' }}
                      />
                    )}
                    <Chip 
                      icon={<FaCalendarAlt size={14} />} 
                      label={new Date(feedback.date).toLocaleDateString('pt-BR')} 
                      size="small" 
                      sx={{ bgcolor: '#fff8e1' }}
                    />
                    <Chip 
                      label={feedback.status} 
                      size="small" 
                      color={
                        feedback.status === 'Respondido' ? 'success' : 
                        feedback.status === 'Em análise' ? 'warning' : 
                        'default'
                      }
                      variant="outlined"
                    />
                  </Box>
                  
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {feedback.summary}
                  </Typography>
                </CardContent>
                
                <CardActions sx={{ justifyContent: 'flex-end', px: 2, pb: 2 }}>
                  <Button
                    onClick={() => handleExpandCard(feedback.id)}
                    endIcon={expandedCards[feedback.id] ? <FaChevronUp /> : <FaChevronDown />}
                    sx={{ textTransform: 'none' }}
                  >
                    {expandedCards[feedback.id] ? 'Ver menos' : 'Ver mais'}
                  </Button>
                </CardActions>
                
                <Collapse in={expandedCards[feedback.id]} timeout="auto" unmountOnExit>
                  <Divider />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Detalhes do Feedback
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {feedback.details}
                    </Typography>
                    
                    {feedback.images && feedback.images.length > 0 && (
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle1" gutterBottom>
                          Imagens
                        </Typography>
                        <Grid container spacing={1}>
                          {feedback.images.map((image, index) => (
                            <Grid item xs={6} sm={4} md={3} key={index}>
                              <Box
                                component="img"
                                src={image}
                                alt={`Imagem ${index + 1} do feedback`}
                                sx={{
                                  width: '100%',
                                  height: 'auto',
                                  borderRadius: 1,
                                  cursor: 'pointer'
                                }}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    )}
                    
                    {feedback.status === 'Respondido' && (
                      <Box sx={{ mt: 3,
(Content truncated due to size limit. Use line ranges to read in chunks)