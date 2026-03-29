import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Cara_avialicao from "../../img/Cara_avialicao.png";
import CardAvali from "../../img/CardAvali.png";
import { estrelas_avaliacao, img_avaliacao, mes_avaliacao, message_avaliacao, nome_avaliacao } from "./styles/styles";
import { clientes } from "./util/util";

export default function Avaliacoes() {
    return (
        <Box sx={{ p: 2, borderRadius: 2, my: 5, }}>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: 4, }}>
                <Box sx={{ width: { xs: "100%", md: "26%" }, display: "flex", flexDirection: "column", alignItems: "center", }}  >
                    <Box
                        component="img"
                        src={Cara_avialicao}
                        alt="Cliente"
                        sx={{ width: 270, mb: 2, objectFit: "cover", }}
                    />
                </Box>
                <Box sx={{ width: { xs: "100%", md: "70%" } }}>
                    <Typography sx={{ color: "secondary.main", fontWeight: "bold" }}  >
                        NÓS SOMOS SINÔNIMO DE QUALIDADE!
                    </Typography>

                    <Typography variant="h4" sx={{ mb: 3, }}>
                        Veja o que nosso clientes dizem nas avaliações do Google!
                    </Typography>
                    <Box >
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={1}
                            autoplay={{ delay: 1500, disableOnInteraction: false }}
                            slidesPerView={3}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                600: { slidesPerView: 2 },
                                900: { slidesPerView: 3 },
                            }}
                        >
                            {clientes.map((cliente, index) => (
                                <SwiperSlide key={index}>
                                    <Box sx={{ position: "relative", width: "100%", maxWidth: 350, mx: "auto" }}>
                                        <Box
                                            component="img"
                                            src={CardAvali}
                                            alt="Avaliação"
                                            sx={{ width: "100%", height: "auto" }}
                                        />
                                        <Box component="img" src={cliente.imagem} alt={cliente.nome} sx={img_avaliacao} />
                                        <Typography sx={nome_avaliacao}>{cliente.nome}</Typography>
                                        <Typography sx={mes_avaliacao}>{cliente.tempo}</Typography>
                                        <Box component="img" src={cliente.estrelas} alt={cliente.estrelas} sx={estrelas_avaliacao} />
                                        <Typography sx={message_avaliacao}>{cliente.mensagem}</Typography>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}