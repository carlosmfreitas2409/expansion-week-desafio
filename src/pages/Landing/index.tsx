import React, { useCallback, useState } from 'react';
import ModalVideo from 'react-modal-video';
import {
  FiChevronRight,
  FiHelpCircle,
  FiStar,
  FiAward,
  FiArrowRight,
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';

import 'react-modal-video/css/modal-video.min.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import commonSkill from '../../assets/communication.svg';
import leaderSkill from '../../assets/leader.svg';
import parkVector from '../../assets/park.svg';
import ideasVector from '../../assets/ideas.svg';
import careerVector from '../../assets/career.svg';
import flexibilityVector from '../../assets/flexibility.svg';
import creativityVector from '../../assets/creativity.svg';
import imageAbout from '../../assets/image.jpg';
import image2About from '../../assets/image2.png';
import image3About from '../../assets/image3.png';

import {
  BANNER_ANIMATION,
  BANNER_HEADER_ANIMATION,
  RECOMMENDED_ANIMATION,
  ABOUT_ANIMATION,
} from '../../utils/animations';

import {
  Container,
  AnimatedBanner,
  PrimaryBtn,
  SecondaryBtn,
  Recommended,
  RecommendedCard,
  RecommendedNext,
  AnimatedAbout,
  AboutInner,
  AboutReadMoreBtn,
  AboutReadMore,
  ReadMoreInner,
  TeamWorkCard,
  TeamWorkIcon,
  CommonQuestionsCard,
  SectionDivisor,
  SectionContainer,
  SectionTitle,
} from './styles';

const Landing: React.FC = () => {
  const [scrollX, setScrollX] = useState(0);
  const [isVideoOpen, setVideoOpen] = useState(false);
  const [aboutRead, setAboutRead] = useState(false);

  const handleRightArrow = useCallback(() => {
    let x = scrollX - Math.round(346 / 2);
    const listW = 4 * 173;
    if (346 - listW > x) {
      x = 346 - listW - 0;
    }
    setScrollX(x);
  }, [scrollX]);

  const handleOpenVideo = useCallback(() => {
    setVideoOpen(true);
  }, []);

  const handleCloseVideo = useCallback(() => {
    setVideoOpen(false);
  }, []);

  const handleAboutRead = useCallback(() => {
    setAboutRead(!aboutRead);
  }, [aboutRead]);

  const handleOpenRead = useCallback(() => {
    setAboutRead(true);

    scroller.scrollTo('aboutReadMore', {
      duration: 500,
      smooth: true,
      offset: -50,
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <AnimatedBanner
          id="home"
          initial="unMounted"
          animate="mounted"
          exit="unMounted"
          variants={BANNER_ANIMATION}
        >
          <motion.section
            initial="unMounted"
            animate="mounted"
            exit="unMounted"
            variants={BANNER_HEADER_ANIMATION}
          >
            <h2>Soft Skills. Trabalho em equipe.</h2>
            <p>
              Iremos falar sobre uma das mais importantes Soft Skills, o
              trabalho em equipe!
            </p>
            <div>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isVideoOpen}
                videoId="qrB94YucxFw"
                onClose={handleCloseVideo}
              />

              <PrimaryBtn onClick={handleOpenVideo}>Assistir</PrimaryBtn>
              <SecondaryBtn onClick={handleOpenRead}>Saber Mais</SecondaryBtn>
            </div>

            <Recommended>
              <h4>Soft Skills mais importantes</h4>
              <span>Recomendado</span>

              <div>
                <motion.div
                  style={{
                    width: 2 * 173,
                    overflow: 'hidden',
                  }}
                  initial="unMounted"
                  animate="mounted"
                  exit="unMounted"
                  variants={RECOMMENDED_ANIMATION}
                >
                  <RecommendedCard style={{ marginLeft: scrollX }}>
                    <img src={commonSkill} alt="Comunicação" />
                    <strong>Comunicação</strong>
                  </RecommendedCard>

                  <RecommendedCard>
                    <img src={leaderSkill} alt="Liderança" />
                    <strong>Liderança</strong>
                  </RecommendedCard>

                  <RecommendedCard style={{ padding: '0 13px' }}>
                    <img src={flexibilityVector} alt="Flexibilidade" />
                    <strong>Flexibilidade</strong>
                  </RecommendedCard>

                  <RecommendedCard>
                    <img src={creativityVector} alt="Criatividade" />
                    <strong>Criatividade</strong>
                  </RecommendedCard>
                </motion.div>

                <RecommendedNext onClick={handleRightArrow}>
                  <FiChevronRight size={20} color="#FFFFFF" />
                </RecommendedNext>
              </div>
            </Recommended>
          </motion.section>
        </AnimatedBanner>

        <AnimatedAbout
          id="about"
          initial="unMounted"
          animate="mounted"
          exit="unMounted"
          variants={ABOUT_ANIMATION}
        >
          <section>
            <AboutInner>
              <img src={parkVector} alt="O que são Soft Skills" />
              <div>
                <h4>O que são</h4>
                <h3>Soft Skills</h3>
                <p>
                  As soft skills são um conjunto de habilidades e competências
                  relacionadas ao comportamento humano.
                </p>
              </div>
            </AboutInner>

            <AboutInner>
              <div>
                <h4>Qual a diferença entre</h4>
                <h3>Hard & Soft Skills</h3>
                <p>
                  As hard skills são concretas, quantificáveis e de aprendizado
                  técnico. Já as soft skills, trabalham no universo do que é
                  comportamental.
                </p>
              </div>

              <img
                src={ideasVector}
                alt="Qual a diferença entre Hard & Soft Skills"
              />
            </AboutInner>

            <AboutInner>
              <img
                src={careerVector}
                alt="Qual a importância das Soft Skills"
              />

              <div>
                <h4>Qual a importância das</h4>
                <h3>Soft Skills</h3>
                <p>
                  As soft skills são muito procuradas, desejadas e cada vez mais
                  valorizadas por profissionais de recursos humanos. Além disso,
                  saber trabalhar com outras pessoas e trazer soluções criativas
                  vão garantir um espaço no trabalho.
                </p>
              </div>
            </AboutInner>

            <AboutReadMoreBtn
              type="button"
              onClick={handleAboutRead}
              id="aboutReadMore"
            >
              {`${aboutRead ? 'Ocultar' : 'Ler Mais'}`}
            </AboutReadMoreBtn>

            {aboutRead && (
              <AboutReadMore>
                <section>
                  <ReadMoreInner>
                    <div>
                      <h4>O que são Soft Skills?</h4>
                      <p>
                        As soft skills são um conjunto de
                        <strong>
                          {' '}
                          habilidades e competências relacionadas ao
                          comportamento humano.
                        </strong>
                        <br />
                        <br />
                        Dessa forma, são consideradas como características
                        necessárias para que um profissional alcance os seus
                        objetivos profissionais, aquilo que estabelece para a
                        sua carreira.
                        <br />
                        <br />
                        Como você deve imaginar, as soft skills esperadas de
                        determinada pessoa estão relacionadas à sua área de
                        atuação e, principalmente, ao posto que ela deseja
                        ocupar no mercado de trabalho.
                      </p>
                    </div>
                    <img src={imageAbout} alt="O que é Soft Skills?s" />
                  </ReadMoreInner>

                  <ReadMoreInner>
                    <img
                      src={image2About}
                      alt="Qual a diferença entre Hard Skills & Soft Skills?"
                    />
                    <div>
                      <h4>Qual a diferença entre Hard Skills & Soft Skills?</h4>
                      <p>
                        As Hard Skills são as habilidades técnicas, não
                        comportamentais. Ou seja, tudo aquilo que você aprende
                        no ensino formal ou não, em cursos, treinamentos, na
                        graduação e pós-graduação.
                        <br />
                        <br />
                        São as informações que você quer colocar no currículo,
                        atualizar no perfil do LinkedIn ou destacar para o
                        recrutador em um processo de seleção.
                        <br />
                        <br />
                        As hard skills são concretas, quantificáveis e de
                        aprendizado técnico.
                        <br />
                        <br />
                        Já as soft skills, como dissemos acima, trabalham no
                        universo do que é comportamental e, portanto, são
                        aprendizados subjetivos e difíceis de serem analisados,
                        como o pensamento crítico, a positividade e a capacidade
                        de tomada de decisão.
                      </p>
                    </div>
                  </ReadMoreInner>

                  <ReadMoreInner>
                    <div>
                      <h4>Como desenvolver Soft Skills?</h4>
                      <p>
                        Como são características comportamentais, desenvolver
                        soft skills ficam muito a cargo do indivíduo.
                        <br />
                        <br />
                        É preciso estar atento às próprias características,
                        dedicado ao autoconhecimento, à melhoria contínua e à
                        reflexão sobre as suas próprias atitudes.
                        <br />
                        <br />
                        Além da reflexão individual, uma maneira de estimular o
                        autoconhecimento para gerar uma mudança comportamental é
                        apostando no Coaching, como destacamos antes.
                      </p>
                    </div>
                    <img
                      src={image3About}
                      alt="Como desenvolver Soft Skills?"
                    />
                  </ReadMoreInner>

                  <iframe
                    width="637"
                    height="346"
                    src="https://www.youtube.com/embed/qrB94YucxFw"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="SoftSkill"
                  />
                </section>
              </AboutReadMore>
            )}
          </section>
        </AnimatedAbout>

        <SectionDivisor />

        <SectionContainer id="teamWork">
          <section>
            <SectionTitle>Trabalho em Equipe</SectionTitle>

            <div>
              <TeamWorkCard>
                <TeamWorkIcon color="rgba(166, 183, 243, 0.4)">
                  <FiHelpCircle size={80} color="#6c63ff" />
                </TeamWorkIcon>

                <h4>O que é?</h4>
                <p>
                  Trabalho em equipe é quando um grupo resolve criar um esforço
                  coletivo para resolver um problema. Pode também ser descrito
                  como um grupo de pessoas que dedicam-se a realizar uma tarefa
                  ou determinado trabalho.
                </p>
              </TeamWorkCard>

              <TeamWorkCard>
                <TeamWorkIcon color="rgba(252, 224, 111, 0.4);">
                  <FiStar size={80} color="#FCE06F" />
                </TeamWorkIcon>

                <h4>Importância</h4>
                <p>
                  A condição de cooperar e trabalhar em equipe é um dos fatores
                  para o sucesso de uma organização, pois a atuação coletiva
                  aumenta a performance dos funcionários e favorece a construção
                  de um patrimônio colaborativo.
                </p>
              </TeamWorkCard>

              <TeamWorkCard align="left">
                <TeamWorkIcon color="rgba(140, 221, 255, 0.4);">
                  <FiAward size={80} color="#8CDDFF" />
                </TeamWorkIcon>

                <h4>Principais Habilidades</h4>
                <p>
                  <ul>
                    <li>Gerenciar Conflitos</li>
                    <li>Comunicação Eficiente</li>
                    <li>Proatividade</li>
                    <li>Inovação</li>
                    <li>Confiança</li>
                    <li>Respeito</li>
                  </ul>
                </p>
              </TeamWorkCard>
            </div>
          </section>
        </SectionContainer>

        <SectionDivisor />

        <SectionContainer id="commonQuestions">
          <section>
            <SectionTitle>Perguntas Comuns</SectionTitle>

            <div>
              <CommonQuestionsCard>
                <h3>Soft Skills</h3>
                <p>
                  <a href="/">- O que é?</a>
                  <br />
                  <a href="/">- Qual sua importância?</a>
                  <br />
                  <a href="/">- Como praticar?</a>
                  <br />
                </p>

                <a href="/">
                  Ver todas as Questões
                  <FiArrowRight />
                </a>
              </CommonQuestionsCard>

              <CommonQuestionsCard>
                <h3>Trab. em Equipe</h3>
                <p>
                  <a href="/">- Qual sua importância?</a>
                  <br />
                  <a href="/">- Quais principais habilidades?</a>
                  <br />
                  <a href="/">- Como estimular?</a>
                  <br />
                </p>

                <a href="/">
                  Ver todas as Questões
                  <FiArrowRight />
                </a>
              </CommonQuestionsCard>

              <CommonQuestionsCard>
                <h3>Projeto</h3>
                <p>
                  <a href="/">- O que é este projeto?</a>
                  <br />
                  <a href="/">- O que é o Expansion Week?</a>
                  <br />
                  <a href="/">- O que é a RocketSeat?</a>
                  <br />
                </p>

                <a href="/">
                  Ver todas as Questões
                  <FiArrowRight />
                </a>
              </CommonQuestionsCard>
            </div>
          </section>
        </SectionContainer>

        <Footer />
      </Container>
    </>
  );
};

export default Landing;
