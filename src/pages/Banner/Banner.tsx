import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import videoFundo from "../../img/videoFundo.mp4";
import { getMainGradient } from '../../util/Grandient';


export const Banner: React.FC = () => {

    return (
        <Box sx={{ position: 'relative', height: "700px", overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', }}  >
            <video
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                }}
            >
                <source src={videoFundo} type="video/mp4" />
            </video>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(20, 52, 96, 0.75)',
                    zIndex: 1
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <Typography data-aos="zoom-in" data-aos-delay="0" sx={{ mt:3,fontSize: 60, letterSpacing: "0.03em", fontWeight: 700, background: getMainGradient(), WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', }}>
                    Seja bem-vindo à Wise Network
                </Typography>
                <Typography data-aos="zoom-in" data-aos-delay="300" sx={{ fontSize: 50, letterSpacing: "0.03em", color: '#fff', fontWeight: 500, mb: 4 }}>
                    Assistência Técnica Autorizada
                </Typography>
                <Button data-aos="zoom-in" data-aos-delay="600" href="https://wa.me/5511974292939?text=Ol%C3%A1!%20Encontrei%20a%20Wise%20Inform%C3%A1tica%20pelo%20site%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20e%20valores.%20Obrigado!" target="_blank" rel="noopener noreferrer" variant="contained" sx={{ background: getMainGradient(), borderRadius: '10px', px: 4, py: 1.5, fontSize: '1rem', fontWeight: 600, textTransform: 'none', border: 'none', '&:hover': { filter: 'brightness(1.1)', background: getMainGradient(), } }} >
                    Entrar em contato com a Wise Network
                </Button>
            </Container>
        </Box>
    );
};