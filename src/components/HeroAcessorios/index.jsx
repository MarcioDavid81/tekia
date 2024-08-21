import fone from '../../assets/fone.png';
import jbl from '../../assets/jbl.png';
import watch from '../../assets/watch.png';
import Container from '../Container';
import {Title} from '../Usuals/Title';
import { HeroContainer } from './styles';
import { motion } from 'framer-motion';


function HeroAcessorios() {
  return (
        <HeroContainer>
        <Container>
            <Title>ACESSÓRIOS</Title>
            <motion.div
                className="images"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <img className='fone' src={fone} alt="fone"/>
                <img className='jbl' src={jbl} alt="jbl"/>
                <img className='watch' src={watch} alt="watch"/>
            </motion.div>
            <div className="text">
                <Title>O que há de mais moderno em acessórios</Title>
                <p>Qualidade e estilo, que você só encontra aqui.</p>
            </div>
        </Container>
        </HeroContainer>
  );
}

export default HeroAcessorios;