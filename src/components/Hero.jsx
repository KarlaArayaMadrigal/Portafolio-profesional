import styled from "styled-components";
import Fotoperfil from "../assets/Fotoperfil.png";
import Fondo from "../assets/Wallpaper Neon.jpg";

const Section = styled.section`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 10% 60px;
  background: linear-gradient(
      135deg,
      #0D1117 0%,
      #2D1B69 45%,
      #8B5CF6 75%,
      #EC4899 100%
  );
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  width: 100%;
  max-width: 1200px;
`;

const Content = styled.div`
  text-align: left;
`;

const Title = styled.h1`
  font-size: 55px;
  color: #F5F5F5;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 22px;
  color: #F472B6;
  font-weight: 600;
`;

const Image = styled.img`
  width: 340px;
  height: 340px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #EC4899;

  box-shadow:
    0 0 15px #EC4899,
    0 0 35px #8B5CF6;

  transition: .4s;

  &:hover{
    transform: scale(1.05);
    box-shadow:
      0 0 25px #EC4899,
      0 0 60px #8B5CF6;
  }
`;

const Information = styled.section`
  padding: 100px 10%;

  background:
    linear-gradient(
      rgba(13, 17, 23, 0.75),
      rgba(13, 17, 23, 0.75)
    ),
    url(${Fondo});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const InfoContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 50px;

  background: rgba(22, 27, 34, 0.55);

  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);

  border: 1px solid rgba(236, 72, 153, 0.2);
  border-radius: 25px;

  box-shadow:
    0 10px 35px rgba(0, 0, 0, 0.4),
    0 0 20px rgba(236, 72, 153, 0.2);
`;

const InfoTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  color: #EC4899;
`;

const InfoText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #D4D4D8;
`;

function Hero() {
  return (
    <>
      <Section id="home">
        <Container>
          <Content>
            <Title>Hola, soy Karla Araya</Title>
            <Subtitle>Frontend Developer</Subtitle>
          </Content>

          <Image src={Fotoperfil} alt="Karla Araya" />
        </Container>
      </Section>

      <Information id="about">
        <InfoContainer>
          <InfoTitle>Sobre mí</InfoTitle>

          <InfoText>
            Soy estudiante de Licenciatura en Sistemas con énfasis en
            Seguridad de la Información y desarrolladora Frontend con
            experiencia en React, JavaScript y TypeScript. Me apasiona
            crear interfaces modernas, responsivas y fáciles de usar.
          </InfoText>

          <InfoText>
            Actualmente continúo fortaleciendo mis habilidades en
            desarrollo web y ciberseguridad, mientras construyo proyectos
            que combinan diseño, funcionalidad y buenas prácticas de
            programación.
          </InfoText>
        </InfoContainer>
      </Information>
    </>
  );
}

export default Hero;