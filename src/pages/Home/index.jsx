import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Title } from '../../components/Usuals/Title';
import { HomeContainer } from './styles';

function Home() {

    return (
        <>
            <Header/>
            <Container>
                <HomeContainer>
                    <section>
                        <Title>Home</Title>
                        <article>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero nec ultricies ultricies, nunc nunc ultricies nunc, nec ultricies nunc nunc nec. Donec auctor, libero nec ultricies ultricies, nunc nunc ultricies nunc, nec ultricies nunc nunc nec. Donec auctor, libero nec ultricies ultricies, nunc nunc ultricies nunc, nec ultricies nunc nunc nec. Donec auctor, libero nec ultricies ultricies, nunc nunc ultricies nunc, nec ultricies nunc nunc nec.</p>
                        </article>
                        <article>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero nec ultricies ultricies, nunc nunc ultricies nunc, nec ultricies nunc nunc nec. Donec auctor, libero nec ultricies ultricies, nunc nunc ultricies nunc, nec ultricies nunc nunc nec. Donec auctor, libero nec ultricies ultricies, nunc nunc ultricies nunc, nec ultricies nunc nunc nec. Donec auctor, libero nec ultricies ultricies, nunc nunc ultricies nunc, nec ultricies nunc nunc nec.</p>
                        </article>
                    </section>
                </HomeContainer>
            </Container>
            <Footer/>
        </>
    );
}

export default Home;