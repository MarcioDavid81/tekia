import caixa1 from '../../assets/caixa1.png';
import fone2 from '../../assets/fone2.png';
import fone3 from '../../assets/fone3.png';
import Container from '../Container';
import { HeroContainer } from './styles';


function Hero() {
  return (
        <HeroContainer>
        <Container>
            <div className="images">
                <img className='caixa' src={caixa1} alt="Caixa de som JBL"/>
                <img className='fone2' src={fone2} alt="Headphone"/>
                <img className='fone3' src={fone3} alt="Headphone"/>
            </div>
            <div className="text">
                <h2 className='primary_title'>TEKIA <span className='title'>Tecnologia</span></h2>
                <p>Conectando você ao futuro, <span className='marca'>hoje.</span></p>
            </div>
        </Container>
        </HeroContainer>
  );
}

export default Hero;