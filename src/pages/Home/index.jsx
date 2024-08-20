/* eslint-disable no-unused-vars */
import { useLayoutEffect, useRef } from 'react';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import { Title } from "../../components/Usuals/Title";
import { HomeContainer } from './styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import watches from '../../assets/watches.png';
import watch3 from '../../assets/watch3.png';
import watch4 from '../../assets/watch4.png';
import midni from '../../assets/midnigth.png';
import red from '../../assets/red.png';
import withe from '../../assets/white.png';


function Home() {

    const el = useRef();
    const tl = useRef();

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.to('.watch', {
            x: 0,
            rotate: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.items',
                // markers: true,
                start: 'top 550px',
                end: 'bottom 600px',
                scrub: 1,
 
            },

        });

        return () => {
            gsap.killTweensOf('.watch');
        }

    }, []);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: ".models_item",
                    scrub: 1,
                    start: 'top 800px',
                    end: 'bottom 900px',
                    // markers: true,
                }
            })
        .fromTo("#model_1", {y: 160, opacity: 0}, {y: 0, opacity: 1})
        .fromTo("#model_2", {y: 160, opacity: 0}, {y: 0, opacity: 1})
        .fromTo("#model_3", {y: 160, opacity: 0}, {y: 0, opacity: 1})
        }, el)


        return () => {
            gsap.killTweensOf('.watch');
        }
    }, []);

    return (
        <>
            <Header/>
            <Hero/>
            <Container>
                <HomeContainer>
                        
                        <section className='items'>
                            <Title>O QUE HÁ DE MAIS MODERNO</Title>
                            <div className="itmes_content">
                                <img className='watch' src={watches} alt="Smart Watches" />
                            </div>
                        </section>

                        <Title>NOSSOS MODELOS</Title>

                        <section className='models_container' ref={el}>

                            <div className="models_content">

                                <div className="models_item" id='model_1'>
                                    <img src={midni} alt="" />
                                    <span className="models_tag">Novo</span>
                                    <h4 className="models_title">Smart Watch S8</h4>
                                    <p className="models_description">À partir de <strong>R$800,00</strong></p>
                                </div>
                           

                            
                                <div className="models_item" id='model_2'>
                                    <img src={red} alt="" />
                                    <span className="models_tag">Novo</span>
                                    <h4 className="models_title">Smart Watch S8</h4>
                                    <p className="models_description">À partir de <strong>R$800,00</strong></p>
                                </div>
                        

                           
                                <div className="models_item" id='model_3'>
                                    <img src={withe} alt="" />
                                    <span className="models_tag">Novo</span>
                                    <h4 className="models_title">Smart Watch S8</h4>
                                    <p className="models_description">À partir de <strong>R$800,00</strong></p>
                                </div>

                            </div>

                        </section>
                </HomeContainer>
            </Container>
            <Footer/>
        </>
    );
}

export default Home;