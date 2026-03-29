import React from 'react';
import { Box, Typography, Button, Container } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { getMainGradient } from "../../util/Grandient";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CONTEUDO_CATALOGO } from './util/util';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Catalogo: React.FC = () => {
    return (
        <Container maxWidth="lg" sx={{ my: 10 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", flexWrap: "wrap", mb: 1 }}>
                    <Typography variant="h3" sx={{ fontWeight: 700, fontSize: { xs: 32, md: 40 } }}>
                        {CONTEUDO_CATALOGO.tituloPrincipal}
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 700, fontSize: { xs: 32, md: 40 }, background: getMainGradient(), WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}  >
                        {CONTEUDO_CATALOGO.tituloDestaque}
                    </Typography>
                </Box>
                <Typography sx={{ color: 'text.secondary', px: 2 }}>
                    {CONTEUDO_CATALOGO.descricao}
                </Typography>
            </Box>

            <Box sx={{ position: 'relative', px: { xs: 1, md: 2 } }}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        900: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                    }}
                    style={{ padding: '60px 20px' }}
                >
                    {CONTEUDO_CATALOGO.categorias.map((cat, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    '&:hover .borda-efeito': {
                                        transform: 'translate(-1.7px, -20px)',
                                        opacity: 0,
                                    },
                                    '&:hover .card-conteudo': {
                                        transform: 'translateY(-15px)',
                                    }
                                }}
                            >
                                <Box
                                    className="borda-efeito"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: 340,
                                        border: '2px solid',
                                        borderColor: 'primary.main',
                                        borderRadius: '20px',
                                        zIndex: 1,
                                        transform: 'translate(-15px, -14px)',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    }}
                                />

                                <Box className="card-conteudo" sx={{ position: 'relative', zIndex: 2, borderRadius: '20px', overflow: 'hidden', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', }}>
                                    <Box
                                        component="img"
                                        src={cat.imagem}
                                        alt={cat.nome}
                                        sx={{
                                            width: '100%',
                                            height: "100%",
                                            objectFit: 'cover',
                                            display: 'block'
                                        }}
                                    />
                                    <Box sx={{ py: 1.5, textAlign: 'center' }}>
                                        <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.1rem', background: getMainGradient(), WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} >
                                            {cat.nome}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                <Button component="a" href="https://wa.me/5511974292939?text=Ol%C3%A1!%20Encontrei%20a%20Wise%20Inform%C3%A1tica%20pelo%20site%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20e%20valores.%20Obrigado!" target="_blank" rel="noopener noreferrer" endIcon={<WhatsAppIcon />} variant="contained" color="secondary" sx={{ px: 6, py: 1.5, fontWeight: 700, fontSize: '1rem' }} >
                    {CONTEUDO_CATALOGO.textoBotao}
                </Button>
            </Box>
        </Container>
    );
};