import caixa1 from '../../assets/caixa1.png';
import fone2 from '../../assets/fone2.png';
import fone3 from '../../assets/fone3.png';
import Container from '../Container';
import { HeroContainer } from './styles';
import { motion } from 'framer-motion';


function Hero() {
  return (
        <HeroContainer>
        <Container>
            <motion.div
                className="images"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
            >
                <img className='caixa' src={caixa1} alt="Caixa de som JBL"/>
                <img className='fone2' src={fone2} alt="Headphone"/>
                <img className='fone3' src={fone3} alt="Headphone"/>
            </motion.div>
            <div className="text">
                <h2 className='primary_title'>TEKIA <span className='title'>Tecnologia</span></h2>
                <p>Conectando você ao futuro, <span className='marca'>hoje.</span></p>
            </div>
        </Container>
        </HeroContainer>
  );
}

export default Hero;