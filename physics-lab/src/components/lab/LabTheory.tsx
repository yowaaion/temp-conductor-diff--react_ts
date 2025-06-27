import React from 'react';
import {
    Paper,
    Typography,
    Box,
    Divider,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    useTheme
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import ScienceIcon from '@mui/icons-material/Science';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

/**
 * Компонент для отображения теоретической части лабораторной работы
 * по акустооптическому методу измерения скорости распространения и затухания ультразвуковых волн
 */
export const LabTheory: React.FC = () => {
    const theme = useTheme();

    return (
        <Paper 
            elevation={3} 
            sx={{ 
                p: 3, 
                mt: 4,
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                    boxShadow: 6
                }
            }}
        >
            <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                    color: theme.palette.primary.main,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontWeight: 500
                }}
            >
                <ScienceIcon /> Теоретическая часть
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Typography variant="h6" gutterBottom fontWeight={500}>
                Акустооптический метод измерения скорости распространения и затухания ультразвуковых волн
            </Typography>

            <Typography paragraph>
                Акустооптика используется как весьма удобный инструмент для визуализации звуковых полей и исследования характеристик 
                распространения упругих волн. Ряд методик, разработанных для этих целей, рассмотрен в /48,52/. Скорость ультразвука 
                в исследуемом материале определяется выражением /48,49,51/:
            </Typography>

            <Box 
                sx={{ 
                    bgcolor: 'background.paper', 
                    p: 2, 
                    mb: 3, 
                    borderRadius: 1,
                    border: `1px solid ${theme.palette.divider}`
                }}
            >
                <Typography align="center" sx={{ fontFamily: 'monospace', fontSize: '1.1rem' }}>
                    V = λₒf / (2 sin θₑ)
                </Typography>
                <Typography align="right" variant="body2" color="text.secondary">
                    (3.1)
                </Typography>
            </Box>

            <Typography paragraph>
                где f - частота ультразвука, λₒ и θₑ - длина волны света и угол Брэгга вне образца. 
                Так как λₒ и f могут быть измерены с высокой точностью, то задача сводится к точному 
                определению в эксперименте угла 2θₑ между падающим и дифрагированным пучками света. 
                Точность определения 2θₑ зависит от ширины углового распределения интенсивности 
                дифрагированного света и повышается с увеличением частоты ультразвука. Согласно /48/, 
                относительная погрешность измерения скорости представляется в виде:
            </Typography>

            <Box 
                sx={{ 
                    bgcolor: 'background.paper', 
                    p: 2, 
                    mb: 3, 
                    borderRadius: 1,
                    border: `1px solid ${theme.palette.divider}`
                }}
            >
                <Typography align="center" sx={{ fontFamily: 'monospace', fontSize: '1.1rem' }}>
                    ΔV/V ≈ 2λ² / λₒL
                </Typography>
                <Typography align="right" variant="body2" color="text.secondary">
                    (3.2)
                </Typography>
            </Box>

            <Typography paragraph>
                и на частотах порядка сотен мегагерц может быть менее 1%. В (3.2) λ - длина волны звука, 
                L - толщина звукового пучка. Измерение затухания упругих волн основано на том, что в изотропной среде 
                интенсивность дифрагированного света пропорциональна интенсивности звука. Следовательно, 
                можно наблюдать экспоненциальное уменьшение интенсивности дифрагированного света при перемещении 
                светового пучка по кристаллу вдоль направления распространения звука.
            </Typography>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Методика измерения затухания ультразвука</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography paragraph>
                        Коуэн и Гордон показали /50/, что при измерении затухания акустооптическим 
                        методом нет необходимости использовать узкий световой пучок. Принимая во 
                        внимание, что интенсивность упругой волны спадает, как exp (-2αx), где 
                        α - коэффициент затухания звука на единицу длины, они нашли, что перемещение 
                        светового пучка в направлении x на расстояние Δx — изменяет интенсивность 
                        дифрагированного света пропорционально exp(-2αΔx) независимо от ширины светового пучка.
                    </Typography>
                    <Typography paragraph>
                        Таким образом, затухание звука в децибелах на единицу длины определяется выражением:
                    </Typography>
                    
                    <Box 
                        sx={{ 
                            bgcolor: 'background.paper', 
                            p: 2, 
                            mb: 2, 
                            borderRadius: 1,
                            border: `1px solid ${theme.palette.divider}`
                        }}
                    >
                        <Typography align="center" sx={{ fontFamily: 'monospace', fontSize: '1.1rem' }}>
                            α = 10 lg (A₁/A₂) / (X₂-X₁)
                        </Typography>
                        <Typography align="right" variant="body2" color="text.secondary">
                            (3.3)
                        </Typography>
                    </Box>
                    
                    <Typography paragraph>
                        где A₁ и A₂ - интенсивности дифрагированного сигнала в точках X₁ и X₂.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Преимущества акустооптической методики</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography paragraph>
                        Акустооптическая методика обладает рядом неоспоримых преимуществ по 
                        сравнению с традиционными способами акустических измерений, что особенно 
                        заметно при измерениях затухания ультразвука. Применение оптического метода 
                        для регистрации упругих волн значительно упрощает приемный тракт установки, 
                        так как совокупность перестраиваемых приемников, развязывающих цепей и т.п. 
                        заменяется источником когерентного света (лазером), фотоприемником (ФЭУ или фотодиод) 
                        и индикатором (осциллограф).
                    </Typography>
                    
                    <Typography paragraph>
                        При использовании одного зондирующего импульса отпадает такие важные источники 
                        погрешностей, как влияние сложной геометрии преобразователя с образцом, 
                        не параллельности торцов образца, потери энергии на двойное преобразование, 
                        характерные для традиционных методик /49/.
                    </Typography>
                    <Typography paragraph>
                        Акустооптический метод позволяет проводить измерения в широком диапазоне частот, 
                        а его высокая чувствительность позволяет измерять затухания в сотни дБ/см, 
                        что крайне затруднительно при использовании обычных радиотехнических методов. 
                        Зондирование пучком света по длине образца позволяет проводить измерения локальных 
                        значений коэффициента затухания, различающихся из-за неоднородности образца. 
                        Ограничением для применения метода служит лишь требование оптической прозрачности материала.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Box 
                sx={{ 
                    mt: 3, 
                    p: 2, 
                    bgcolor: 'rgba(25, 118, 210, 0.08)', 
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2
                }}
            >
                <InfoIcon color="primary" sx={{ mt: 0.5 }} />
                <Box>
                    <Typography variant="subtitle1" fontWeight={500}>
                        Использование в лабораторной работе
                    </Typography>
                    <Typography variant="body2">
                        В данной лабораторной работе используется метод, описанный формулой (3.3), 
                        для расчета коэффициента затухания ультразвука на основе измерений интенсивности 
                        дифрагированного света в двух различных точках образца. В качестве входных 
                        данных используются координаты X₁, X₂ и отношение интенсивностей ΔI/I₀.
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
}; 