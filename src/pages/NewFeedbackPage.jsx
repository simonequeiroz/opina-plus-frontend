import React from 'react';
import { Container, Typography, TextField, Button, Box, Paper, FormControl, InputLabel, Select, MenuItem, TextareaAutosize } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const NewFeedbackPage = () => {
  const navigate = useNavigate();

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    // Placeholder for feedback submission logic
    console.log('Feedback submitted');
    // Navigate to 'My Feedbacks' or home after submission
    navigate('/meus-feedbacks'); 
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mt: 8, mb: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography component="h1" variant="h5" gutterBottom>
          Enviar Novo Feedback
        </Typography>
        <Box component="form" onSubmit={handleFeedbackSubmit} noValidate sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="companyName"
            label="Nome da Empresa ou Serviço"
            name="companyName"
            autoFocus
            // Add autocomplete or suggestions later if needed
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="feedbackTitle"
            label="Título do Feedback"
            name="feedbackTitle"
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="feedback-type-label">Tipo de Feedback</InputLabel>
            <Select
              labelId="feedback-type-label"
              id="feedbackType"
              name="feedbackType"
              label="Tipo de Feedback"
              defaultValue="reclamacao" 
            >
              <MenuItem value="reclamacao">Reclamação</MenuItem>
              <MenuItem value="sugestao">Sugestão</MenuItem>
              <MenuItem value="elogio">Elogio</MenuItem>
              <MenuItem value="duvida">Dúvida</MenuItem>
            </Select>
          </FormControl>
          
          <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>Descrição Detalhada:</Typography>
          <TextareaAutosize 
            aria-label="descrição detalhada do feedback"
            minRows={5}
            placeholder="Descreva aqui seu feedback..."
            style={{ width: '100%', padding: '8px', fontFamily: 'inherit', fontSize: 'inherit', border: '1px solid #ccc', borderRadius: '4px' }}
            required
          />

          <Box sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              component="label" // Allows the button to act as a label for a hidden file input
              startIcon={<AttachFileIcon />}
            >
              Anexar Arquivos (Opcional)
              <input
                type="file"
                hidden
                multiple // Allow multiple files if needed
                // Add onChange handler for file uploads later
              />
            </Button>
            {/* Display selected file names here later */}
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enviar Feedback
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default NewFeedbackPage;
