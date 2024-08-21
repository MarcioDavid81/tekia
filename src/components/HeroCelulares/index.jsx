import phone from '../../assets/phones.png';
import sansung from '../../assets/sansung.png';
import xiaomi from '../../assets/xiaomi.png';
import Container from '../Container';
import {Title} from '../Usuals/Title';
import { HeroContainer } from './styles';
import { motion } from 'framer-motion';


function HeroCelulares() {
  return (
        <HeroContainer>
        <Container>
            <Title>CELULARES</Title>
            <motion.div
                className="images"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                
                transition={{ duration: 1 }}
            >
                <img className='sansung' src={sansung} alt="phone"/>
                <img className='phone' src={phone} alt="phone"/>
                <img className='xiaomi' src={xiaomi} alt="phone"/>
            </motion.div>
            <div className="text">
                <Title>Os aparelhos mais atuais</Title>
                <p>Qualidade e estilo, que você só encontra aqui.</p>
            </div>
        </Container>
        </HeroContainer>
  );
}

export default HeroCelulares;