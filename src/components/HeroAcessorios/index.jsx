import fone from '../../assets/fone.png';
import jbl from '../../assets/jbl.png';
import watch from '../../assets/watch.png';
import Container from '../Container';
import {Button} from '../Usuals/Button';
import {Title} from '../Usuals/Title';
import { HeroContainer } from './styles';


function HeroAcessorios() {
  return (
        <HeroContainer>
        <Container>
            <Title>ACESSÓRIOS</Title>
            <div className="images">
                <img className='fone' src={fone} alt="fone"/>
                <img className='jbl' src={jbl} alt="jbl"/>
                <img className='watch' src={watch} alt="watch"/>
            </div>
            <div className="text">
                <Title>O que há de mais moderno em acessórios</Title>
                <p>Qualidade e estilo, que você só encontra aqui.</p>
                <Button>Comprar</Button>
            </div>
        </Container>
        </HeroContainer>
  );
}

export default HeroAcessorios;