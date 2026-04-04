import React from 'react';
import { Box, Typography, Stack, IconButton, Button, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Logo from "../../img/Logo.png";
import { getMainGradient } from '../../util/Grandient';
import { NAV_LINKS } from '../NavBar/util/util';

export const Footer: React.FC = () => {
    return (
        <Box component="footer" sx={{ width: '100%', bgcolor: 'white' }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'flex-start', px: { xs: 2, md: 10 }, py: 6, gap: 4 }}>

                <Box sx={{ flex: 1 }}>
                    <Box sx={{ mb: 2 }}>
                        <Box
                            component="img"
                            src={Logo}
                            alt="Wise Network Logo"
                            sx={{ width: '220px', height: 'auto', display: 'block', mb: 3 }}
                        />
                    </Box>
                    <Stack direction="row" spacing={3}>
                        <IconButton component="a" href="https://wa.me/5511974292939?text=Ol%C3%A1!%20Encontrei%20a%20Wise%20Inform%C3%A1tica%20pelo%20site%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20e%20valores.%20Obrigado!" target="_blank" rel="noopener noreferrer" sx={{ background: getMainGradient(), color: 'white', '&:hover': { opacity: 0.9 } }}><WhatsAppIcon sx={{ fontSize: 40 }} /></IconButton>
                        <IconButton component="a" href="https://www.instagram.com/wiseinformatica/" target="_blank" rel="noopener noreferrer" sx={{ background: getMainGradient(), color: 'white', '&:hover': { opacity: 0.9 } }}><InstagramIcon sx={{ fontSize: 40 }} /></IconButton>
                        <IconButton component="a" href="https://www.facebook.com/Wiseinformatica" target="_blank" rel="noopener noreferrer" sx={{ background: getMainGradient(), color: 'white', '&:hover': { opacity: 0.9 } }}><FacebookIcon sx={{ fontSize: 40 }} /></IconButton>
                    </Stack>
                </Box>

                <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontWeight: 'bold', mb: 1, fontSize: 23 }}>Contato</Typography>
                    <Stack spacing={1.5}>
                        <ContactItem icon={<WhatsAppIcon sx={{ color: '#1D4B89' }} />} text="(11) 99916-9836" />
                        <ContactItem icon={<PhoneIcon sx={{ color: '#1D4B89' }} />} text="(11) 4152-2743" />
                        <ContactItem icon={<EmailIcon sx={{ color: '#1D4B89' }} />} text="loja@wisenetwork.com.br" />
                        <ContactItem icon={<LocationOnIcon sx={{ color: '#1D4B89' }} />} text="alçada Antares, 233 - Centro de Apoio 2 - Alphaville - SP - Cep. 06541-065" />
                    </Stack>
                </Box>

                <Box sx={{ flex: 1, width: '100%' }}>
                    <Typography sx={{ fontWeight: 'bold', mb: 1, fontSize: 20 }}>
                        Endereço
                    </Typography>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.9258240464274!2d-46.880816290113614!3d-23.463139957900925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf031684513e4f%3A0x884426545a4faecb!2sWise%20Network%20Inform%C3%A1tica%20e%20Papelaria!5e0!3m2!1spt-BR!2sbr!4v1774557326281!5m2!1spt-BR!2sbr" width="400" height="210" style={{ border: 0, borderRadius: 10, boxShadow: '0 0px 10px rgba(0, 0, 0, 0.36)' }} loading="lazy"></iframe>
                </Box>
            </Box>

            <Box sx={{ bgcolor: '#1D4B89', py: 2, px: { xs: 2, md: 10 }, display: 'flex', lexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: 4 }}>
                <Stack direction="row" spacing={4}>
                    {NAV_LINKS.map((item, index) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            data-aos="zoom-in"
                            data-aos-delay={index * 200}
                            sx={{
                                color: 'white',
                                textDecoration: 'none',
                                fontWeight: item.active ? 'bold' : 500,
                                fontSize: '1.1rem',
                                '&:hover': {
                                    opacity: 0.8,
                                },
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </Stack>

                <Button
                    variant="contained"
                    href="https://wa.me/5511974292939?text=Ol%C3%A1!%20Encontrei%20a%20Wise%20Inform%C3%A1tica%20pelo%20site%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20e%20valores.%20Obrigado!"
                    target="_blank"
                    data-aos="zoom-in"
                    data-aos-delay={NAV_LINKS.length * 200}
                    rel="noopener noreferrer"
                    endIcon={<ArrowForwardIcon sx={{ color: '#019ED5' }} />}
                    sx={{
                        bgcolor: 'white',
                        color: '#019ED5',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        px: 4,
                        textTransform: 'none',
                        '&:hover': { bgcolor: '#f0f0f0' }
                    }}
                >
                    Fale conosco
                </Button>
            </Box>
            <Box sx={{ py: 3, textAlign: 'center' }}>
                <Typography sx={{ color: '#252525', mb: 1 }}>
                    Copyright © <b style={{ color: "#181818" }}>WiseNetwork</b>. (Lei 9610 de 18/03/2026)
                </Typography>
                <Typography sx={{ color: '#252525' }}>
                    Desenvolvedor :{' '}
                    <Link
                        href="https://www.instagram.com/Codetech_dvp"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: '#181818', textDecoration: 'none', fontWeight: 'bold' }}
                    >
                        @Codetech_dvp
                    </Link>
                </Typography>
            </Box>

        </Box>
    );
};

const ContactItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <Stack direction="row" spacing={1.5} alignItems="flex-start">
        <Box sx={{ mt: 0.3, }}>{icon}</Box>
        <Typography variant="body2" sx={{ color: '#333', fontSize: '1rem' }}>{text}</Typography>
    </Stack>
);