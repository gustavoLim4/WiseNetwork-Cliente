import React from 'react';
import { Box, Container, Typography, Stack, Paper } from '@mui/material';
import { CONTEUDO_SOBRE } from './util/util';
import { getMainGradient } from '../../util/Grandient';
import CountUp from '../../components/AnimatedNumber/AnimatedNumber';


export const Sobre: React.FC = () => {

    return (
        <Box id='sobre' component="section" sx={{ py: 10, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 6, }} >
                    <Box sx={{ flex: 1 }}>
                        <Typography data-aos="zoom-in" data-aos-delay="0" variant="overline" sx={{ color: 'secondary.main', fontWeight: 800, display: 'block', }}>
                            {CONTEUDO_SOBRE.NossaH}
                        </Typography>

                        <Typography data-aos="zoom-in" data-aos-delay="150" variant="h4" sx={{ mb: 1, }} >
                            {CONTEUDO_SOBRE.title}
                        </Typography>

                        <Typography data-aos="zoom-in" data-aos-delay="300" variant="body1" sx={{ color: 'text.secondary', mb: 5, fontSize: '0.95rem', textAlign: 'justify' }}>
                            {CONTEUDO_SOBRE.description}
                        </Typography>

                        <Stack direction="row" spacing={3}>
                            {CONTEUDO_SOBRE.stats.map((stat, index) => (
                                <Box
                                    data-aos="zoom-in"
                                    data-aos-delay={450 + index * 150}
                                    key={index}
                                    sx={{
                                        position: 'relative',
                                        flex: 1,
                                        cursor: 'pointer',
                                        '&:hover .border-line': {
                                            transform: 'translate(-5px, 0px)',
                                            opacity: 0,
                                        },
                                        '&:hover .main-card': {
                                            transform: 'translateY(-5px)',
                                        }
                                    }}
                                >
                                    <Box
                                        className="border-line"
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: 272,
                                            height: 115,
                                            border: '1.5px solid',
                                            borderColor: 'secondary.main',
                                            borderRadius: '16px',
                                            zIndex: 1,
                                            transform: 'translate(-5px, -10px)',
                                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                        }}
                                    />

                                    <Paper
                                        className="main-card"
                                        elevation={0}
                                        sx={{
                                            position: 'relative',
                                            zIndex: 2,
                                            p: 3,
                                            textAlign: 'center',
                                            borderRadius: '16px',
                                            bgcolor: 'background.paper',
                                            boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.14)',
                                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                            transform: 'translate(-2px, -4px)',
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                fontWeight: 800,
                                                background: getMainGradient(),
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                            }}
                                        >
                                            + {''}
                                            <CountUp end={parseInt(stat.value.replace(/\D/g, ''))} />
                                            {stat.value.replace(/\d/g, '')}
                                        </Typography>
                                        <Typography sx={{ fontSize: 18, mt: 1 }}>
                                            {stat.label}
                                        </Typography>
                                    </Paper>
                                </Box>
                            ))}
                        </Stack>
                    </Box>
                    <Box sx={{ flex: 1, position: 'relative', width: '100%' }}>
                        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: -15,
                                    right: { xs: 0, md: -15 },
                                    width: '100%',
                                    height: '100%',
                                    zIndex: 1,
                                }}
                            />
                            <Box
                                data-aos="zoom-in"
                                component="img"
                                src={CONTEUDO_SOBRE.image}
                                sx={{
                                    width: '100%',
                                    maxWidth: '550px',
                                    position: 'relative',
                                    zIndex: 2,
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};