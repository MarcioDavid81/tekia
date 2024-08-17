import phone from '../../assets/phones.png';
import sansung from '../../assets/sansung.png';
import xiaomi from '../../assets/xiaomi.png';
import Container from '../Container';
import {Button} from '../Usuals/Button';
import {Title} from '../Usuals/Title';
import { HeroContainer } from './styles';


function HeroCelulares() {
  return (
        <HeroContainer>
        <Container>
            <Title>CELULARES</Title>
            <div className="images">
                <img className='sansung' src={sansung} alt="phone"/>
                <img className='phone' src={phone} alt="phone"/>
                <img className='xiaomi' src={xiaomi} alt="phone"/>
            </div>
            <div className="text">
                <Title>Os aparelhos mais atuais</Title>
                <p>Qualidade e estilo, que você só encontra aqui.</p>
                <Button>Comprar</Button>
            </div>
        </Container>
        </HeroContainer>
  );
}

export default HeroCelulares;