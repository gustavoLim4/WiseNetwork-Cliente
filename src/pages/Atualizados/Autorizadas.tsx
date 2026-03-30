import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ReactFastMarquee from "react-fast-marquee";
import { TECH_BRANDS } from './util/util';
const Marquee = (ReactFastMarquee as any).default || ReactFastMarquee;

export const Autorizadas: React.FC = () => {
    return (
        <Container maxWidth={false} sx={{ py: 6, overflow: 'hidden' }} id='autorizadas' >
            <Typography data-aos="fade-left" variant="h3" sx={{ fontWeight: 700, mb: 1, color: 'text.primary', textAlign: "center", fontSize: { xs: '2rem', md: '2.5rem' } }} >
                Marcas Autorizadas
            </Typography>

            <Typography data-aos="fade-right" variant="body1" sx={{ color: 'text.secondary', fontSize: '1rem', textAlign: 'center', mb: 4 }} >
                Trabalhamos com as melhores marcas do mercado, garantindo qualidade e confiança nos nossos serviços.
            </Typography>

            <Marquee speed={80} pauseOnHover={true} gradient={false}>
                <Box sx={{ display: 'flex', gap: 4, py: 2, px: 2 }}>
                    {TECH_BRANDS.map((brand, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: { xs: 150, md: 180 },
                                height: 170,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                mx: 1
                            }}
                        >
                            <img
                                src={brand.imagem}
                                alt={`Marca ${brand.nome}`}
                                style={{
                                    width: 1000,
                                    height: 100,
                                    objectFit: 'contain',
                                }}
                            />
                        </Box>
                    ))}
                </Box>
            </Marquee>
        </Container>
    );
};
