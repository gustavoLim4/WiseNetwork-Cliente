import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { CONTEUDO_EMERGENCIA } from './util/util';
import { getMainGradient } from '../../util/Grandient';

export const Emergencia: React.FC = () => {
    return (
        <Box sx={{ position: 'relative', width: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', backgroundImage: `url(${CONTEUDO_EMERGENCIA.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', py: 6, }}>
            <Container sx={{ position: 'relative', zIndex: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
                    <Box sx={{ maxWidth: '600px' }}>
                        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 300, letterSpacing: 2, mb: -1 }}>
                            {CONTEUDO_EMERGENCIA.titlePart1}
                        </Typography>
                        <Typography variant="h2" sx={{ background: getMainGradient(), WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700, fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: .5 }}>
                            {CONTEUDO_EMERGENCIA.titlePart2}
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#ccc', lineHeight: 1.6, maxWidth: '500px' }}>
                            {CONTEUDO_EMERGENCIA.description}
                        </Typography>
                    </Box>
                    <Box>
                        <Button
                            variant="outlined"
                            href={CONTEUDO_EMERGENCIA.buttonLink}
                            target="_blank"
                            sx={{
                                color: '#fff',
                                borderColor: '#fff',
                                borderRadius: '12px',
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                textTransform: 'none',
                                borderWidth: '2px',
                                '&:hover': {
                                    borderWidth: '2px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderColor: '#0078be',
                                }
                            }}
                        >
                            {CONTEUDO_EMERGENCIA.buttonText}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};