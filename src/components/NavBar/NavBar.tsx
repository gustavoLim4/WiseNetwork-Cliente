import React from 'react';
import { Toolbar, Button, Stack, Container, Box, Link, Fab } from '@mui/material';
import { LOGO_CONFIG, NAV_LINKS, type NavItem } from './util/util';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const NavBar: React.FC = () => {
    return (
        <Box component="nav" sx={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1100, bgcolor: 'background.default', py: 1, boxShadow: '0px 2px 10px rgba(0,0,0,0.05)', borderBottom: '1px solid', borderColor: 'divider' }} >
            <Container >
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Box>
                        <Link href={LOGO_CONFIG.href} sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', transition: 'opacity 0.2s', '&:hover': { opacity: 0.8 } }} >
                            <img src={LOGO_CONFIG.src} alt={LOGO_CONFIG.alt} style={{ width: 120, objectFit: 'contain', background: 'background.default' }} />
                        </Link>
                    </Box>

                    <Stack direction="row" spacing={4} alignItems="center">
                        <Stack direction="row" spacing={3}>
                            {NAV_LINKS.map((item: NavItem) => (
                                <Link key={item.label} href={item.href} underline="none"
                                    sx={{ color: item.active ? 'secondary.main' : 'text.primary', fontWeight: 600, fontSize: '0.95rem', '&:hover': { color: 'secondary.main', }, }}>
                                    {item.label}
                                </Link>
                            ))}
                        </Stack>

                        <Button href="https://wa.me/5511974292939?text=Ol%C3%A1!%20Encontrei%20a%20Wise%20Inform%C3%A1tica%20pelo%20site%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20e%20valores.%20Obrigado!" target="_blank" rel="noopener noreferrer" variant="contained" color="secondary" endIcon={<WhatsAppIcon />} sx={{ borderRadius: '6px', px: 2, fontWeight: 600, fontSize: '0.95rem' }} >
                            Fale conosco
                        </Button>
                    </Stack>
                </Toolbar>
            </Container>
            <Fab
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
                href="https://wa.me/5511974292939?text=Ol%C3%A1!%20Encontrei%20a%20Wise%20Inform%C3%A1tica%20pelo%20site%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%20e%20valores.%20Obrigado!"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                    zIndex: 1300,
                    bgcolor: '#143460',
                    color: '#fff',
                    '&:hover': {
                        bgcolor: '#1D4B89'
                    }
                }
                }
            >
                <WhatsAppIcon fontSize='large' />
            </Fab>
        </Box >
    );
};