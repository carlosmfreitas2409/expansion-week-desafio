/* eslint-disable react/jsx-one-expression-per-line */
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
import imageTeam from '../../assets/image4.jpg';
import image2Team from '../../assets/image5.jpg';
import image3Team from '../../assets/image6.jpg';
import image4Team from '../../assets/image7.jpg';

import {
  BANNER_ANIMATION,
  BANNER_HEADER_ANIMATION,
  RECOMMENDED_ANIMATION,
  ABOUT_ANIMATION,
} from '../../utils/animations';

import 'react-modal-video/css/modal-video.min.css';
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
  ReadMoreBtn,
  ReadMore,
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
  const [teamRead, setTeamRead] = useState(false);

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

  const handleTeamRead = useCallback(() => {
    setTeamRead(!teamRead);
  }, [teamRead]);

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

            <ReadMoreBtn
              type="button"
              onClick={handleAboutRead}
              id="aboutReadMore"
            >
              {`${aboutRead ? 'Ocultar' : 'Ler Mais'}`}
            </ReadMoreBtn>

            {aboutRead && (
              <ReadMore>
                <ReadMoreInner>
                  <div>
                    <h4>O que são Soft Skills?</h4>
                    <p>
                      As soft skills são um conjunto de
                      <strong>
                        {' '}
                        habilidades e competências relacionadas ao comportamento
                        humano.
                      </strong>
                      <br />
                      <br />
                      Dessa forma, são consideradas como características
                      necessárias para que um profissional alcance os seus
                      objetivos profissionais, aquilo que estabelece para a sua
                      carreira.
                      <br />
                      <br />
                      Como você deve imaginar, as soft skills esperadas de
                      determinada pessoa estão relacionadas à sua área de
                      atuação e, principalmente, ao posto que ela deseja ocupar
                      no mercado de trabalho.
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
                      comportamentais. Ou seja, tudo aquilo que você aprende no
                      ensino formal ou não, em cursos, treinamentos, na
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
                      Como são características comportamentais, desenvolver soft
                      skills ficam muito a cargo do indivíduo.
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
                  <img src={image3About} alt="Como desenvolver Soft Skills?" />
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
              </ReadMore>
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

            <ReadMoreBtn type="button" onClick={handleTeamRead}>
              {`${teamRead ? 'Ocultar' : 'Ler Mais'}`}
            </ReadMoreBtn>

            {teamRead && (
              <ReadMore>
                <section>
                  <ReadMoreInner>
                    <div>
                      <h4>O que é trabalho em equipe?</h4>
                      <p>
                        <b>Trabalho em equipe </b>
                        pode ser definido como os esforços conjuntos de um grupo
                        ou sociedade visando a solução de um problema. Ou seja,
                        um grupo ou conjunto de pessoas que se dedicam a
                        realizar determinada tarefa estão trabalhando em equipe.
                        <br />
                        <br />O trabalho em equipe, através da ação conjunta,
                        possibilita a troca de conhecimentos entre especialistas
                        de diversas áreas. Como cada pessoa é responsável por
                        uma parte da tarefa, o trabalho em equipe oferece também
                        <b> maior agilidade</b> e <b>dinamismo</b>.
                        <br />
                        <br />
                        Um bom exemplo de trabalho em equipe é a forma que times
                        esportivos são divididos. Cada jogador possui uma função
                        específica, devendo desempenhá-la bem sem invadir o
                        espaço e função dos seus companheiros de time.
                      </p>
                    </div>
                    <img src={imageTeam} alt="O que é trabalho em equipe?" />
                  </ReadMoreInner>

                  <ReadMoreInner>
                    <img
                      src={image2Team}
                      alt="Importância do trabalho em equipe para sua carreira"
                    />
                    <div>
                      <h4>
                        Importância do trabalho em equipe para sua carreira
                      </h4>
                      <p>
                        Cada vez mais as organizações valorizam colaboradores
                        que apresentam facilidade com trabalho em equipe. Como a
                        grande maioria das tarefas e serviços requerem a atuação
                        de diferentes setores profissionais,{' '}
                        <b>colaborar e se comunicar bem</b> é mais do que
                        essencial.
                        <br />
                        <br />A capacidade para trabalho em equipe possibilita
                        que você apresente melhores resultados e mais
                        eficiência. Além disso, um ambiente corporativo composto
                        por pessoas que se comunicam bem e colaboram sem
                        problemas é mais
                        <b> harmonioso</b>, melhorando muito a qualidade de vida
                        de todos os envolvidos.
                        <br />
                        <br />A diferença de pensamento e visão entre pessoas
                        distintas é fundamental para uma{' '}
                        <b>resolução de problemas eficiente</b>. Quanto{' '}
                        <b>mais perspectivas uma equipe tiver</b> sobre um único
                        problema, mais fácil é encontrar a melhor solução
                        possível.
                      </p>
                    </div>
                  </ReadMoreInner>

                  <ReadMoreInner>
                    <div>
                      <h4>
                        Quais principais habilidades para trabalhar bem em
                        equipe?
                      </h4>
                      <p>
                        O trabalho em equipe é uma competência composta de
                        diferentes habilidades. São capacidades que podem ser
                        aprendidas e desenvolvidas, e que devem ser trabalhadas
                        por todos os profissionais. Confira quais habilidades
                        precisam ser desenvolvidas para aprimorar sua capacidade
                        de trabalho em equipe.
                        <br />
                        <br />
                        <h5>Gerenciar Conflitos</h5>
                        Para trabalhar em equipe efetivamente, é preciso
                        identificar, gerenciar e resolver conflitos. Para isso,
                        é necessário desenvolver um conjunto de habilidades
                        sociais. Destacam-se a empatia e a assertividade.
                        <br />
                        <br />
                        <h5>Comunicação Eficiente</h5>
                        Se comunicar de forma clara e eficiente é essencial para
                        um bom trabalho em equipe. Alinhar as metas e objetivos
                        é o primeiro passo para que tudo funcione sem problemas.
                        Quando todos os colaboradores entendem qual a direção
                        que devem seguir com o trabalho, é mais fácil orquestrar
                        a execução.
                        <br />
                        <br />
                        <h5>Proatividade</h5>A proatividade é antecipar
                        necessidades e, de forma autônoma, todas as atitudes
                        para atendê-las. Para o bom trabalho em equipe, é
                        preciso que todos os colaboradores tenham a habilidade
                        de identificar situações-problema antes que elas
                        aconteçam. O mais importante, no entanto, é tomar uma
                        atitude e oferecer soluções.
                      </p>
                    </div>
                    <img
                      src={image3Team}
                      alt="Quais principais habilidades para trabalhar bem em
                        equipe?"
                    />
                  </ReadMoreInner>

                  <ReadMoreInner>
                    <img
                      src={image4Team}
                      alt="Como estimular o trabalho em equipe na sua empresa"
                    />
                    <div>
                      <h4>
                        Como estimular o trabalho em equipe na sua empresa
                      </h4>
                      <p>
                        A estimulação do trabalho em equipe começa com a
                        <b> contratação correta.</b> Identificar no processo
                        seletivo o perfil de funcionário ideal para a sua
                        empresa é fundamental. Além disso, é possível incentivar
                        o trabalho em equipe usando algumas técnicas simples de
                        <b> motivação e encorajamento de convivência.</b>
                        <br />
                        <br />
                        Comemorar as <b>vitórias e metas alcançadas </b>
                        ressaltando o papel do trabalho em equipe no sucesso é
                        uma ótima forma de incentivar esse comportamento. Além
                        disso, <b>as dinâmicas e outros exercícios</b> que
                        possibilitam que os funcionários se conheçam melhor
                        podem auxiliar no processo.
                        <br />
                        <br />A forma mais fácil de estimular o trabalho em
                        equipe na sua empresa, no entanto, é através de
                        <b> treinamentos e coaching</b>. O processo de coaching
                        é capaz de ajudar os colaboradores a{' '}
                        <b>desenvolver as habilidades necessárias</b> para
                        funcionar bem como um grupo.
                      </p>
                    </div>
                  </ReadMoreInner>
                </section>
              </ReadMore>
            )}
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
