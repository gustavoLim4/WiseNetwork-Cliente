import React from 'react';
import { Box, TextField, Button, Typography, Stack, Container } from '@mui/material';
import FundoContato from "../../img/FundoContato.png"
import { getMainGradient } from '../../util/Grandient';
export const Contato: React.FC = () => {
    return (
        <Box sx={{ width: '100%', height: 500, backgroundImage: `url(${FundoContato})`, backgroundSize: 'cover', display: 'flex', alignItems: 'center', py: 3, }} id="contato" >
            <Container maxWidth="lg">
                <Stack direction="row" justifyContent="flex-end">
                    <Box sx={{ width: { xs: '100%', md: '50%' }, color: 'white' }}>
                        <Typography sx={{ fontWeight: 700, mb: 0, fontSize: 45 }}>
                            FALE CONOSCO
                        </Typography>
                        <Typography sx={{ fontWeight: 700, mt: -2, fontSize: 45, background: getMainGradient(), WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', }}>
                            HOJE MESMO !
                        </Typography>

                        <Stack component="form" spacing={2} sx={{ mt: 1 }}>
                            <TextField
                                fullWidth
                                placeholder="Digite seu nome"
                                variant="outlined"
                            />

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <TextField
                                    fullWidth
                                    placeholder="Exemplo@gmail.com"
                                    variant="outlined"
                                />
                                <TextField
                                    fullWidth
                                    placeholder="(00) 00000-0000"
                                    variant="outlined"

                                />
                            </Stack>

                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                placeholder="Deixe sua mensagem"
                                variant="outlined"
                            />

                            <Button
                                variant="contained"
                                fullWidth
                                size="large"
                                sx={{
                                    background: 'linear-gradient(to right, #00adef, #071d49)',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    py: 1.5,
                                    '&:hover': {
                                        opacity: 0.9,
                                    },
                                }}
                            >
                                ENVIAR
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};
