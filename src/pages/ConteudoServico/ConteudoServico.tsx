import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { CONTEUDO_SERVICOS } from './util/util';


export const ConteudoServico: React.FC = () => {
    return (
        <Box component="section" sx={{ bgcolor: 'background.default' }} id="servicos"  >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 10 }}>
                    <Typography  sx={{ color: 'secondary.main', fontWeight: 900,  letterSpacing: '0.1rem' }}>
                        {CONTEUDO_SERVICOS.nossoH}
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: 'text.primary', fontSize: { xs: '2rem', md: '2.5rem' } }}  >
                        {CONTEUDO_SERVICOS.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1rem' }}>
                        {CONTEUDO_SERVICOS.description}
                    </Typography>
                </Box>

                <Grid container spacing={5} sx={{ mb: 12 }}>
                    {CONTEUDO_SERVICOS.items.map((servico, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: 1, }} >
                                <Box
                                    component="img"
                                    src={servico.icon}
                                    alt={servico.title}
                                    sx={{ width: 80, height: 80, mb: 3, objectFit: 'contain', }}
                                />

                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary',  }} >
                                    {servico.title}
                                </Typography>

                                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '0.8rem',textAlign: "center" }}   >
                                    {servico.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};