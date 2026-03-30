import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Stack, Container, CircularProgress} from '@mui/material';
import FundoContato from "../../img/FundoContato.png";
import { getMainGradient } from '../../util/Grandient';
import { maskNome, maskTelefone } from '../../util/masks';

export const Contato: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEnviar = () => {
    if (!nome || !mensagem) return;

    setLoading(true);

    const numeroWhatsApp = "5511944892012";

    const texto = `*Mensagem de contato - Wise Network*
    
    *Nome:* ${nome}
    *Telefone:* ${telefone}
    *Email:* ${email}
    *Mensagem:* ${mensagem}`;

    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(texto)}`;

    window.location.href = url;

    setTimeout(() => {
      setLoading(false);
      setNome('');
      setEmail('');
      setTelefone('');
      setMensagem('');
    }, 500);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: 500,
        backgroundImage: `url(${FundoContato})`,
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        py: 3
      }}
      id="contato"
    >
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="flex-end">
          <Box sx={{ width: { xs: '100%', md: '50%' }, color: 'white' }}>

            <Typography data-aos="fade-right" sx={{ fontWeight: 700, fontSize: 45 }}>
              FALE CONOSCO
            </Typography>

            <Typography
              sx={{
                fontWeight: 700,
                mt: -2,
                fontSize: 45,
                background: getMainGradient(),
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              data-aos="fade-left"
            >
              HOJE MESMO !
            </Typography>

            <Stack spacing={2} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                placeholder="Digite seu nome"
                value={nome}
                 onChange={(e) => setNome(maskNome(e.target.value))}
              />

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  placeholder="Exemplo@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  fullWidth
                  placeholder="(00) 00000-0000"
                  value={telefone}
                  onChange={(e) => setTelefone(maskTelefone(e.target.value))}
                />
              </Stack>

              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder="Deixe sua mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />

              <Button
                onClick={handleEnviar}
                variant="contained"
                fullWidth
                size="large"
                disabled={loading}
                sx={{
                  background: 'linear-gradient(to right, #00adef, #071d49)',
                  color: 'white',
                  fontWeight: 'bold',
                  py: 1.5,
                  '&:hover': {
                    opacity: 0.9
                  }
                }}
              >
                {loading ? (
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CircularProgress size={20} sx={{ color: 'white' }} />
                    <span>Enviando...</span>
                  </Stack>
                ) : (
                  "ENVIAR"
                )}
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};