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
  padding: 120px 10%;

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
  position: relative;

  max-width: 900px;
  margin: 0 auto;
  padding: 60px;

  border-radius: 30px;

  background: rgba(22, 27, 34, 0.45);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  overflow: hidden;

  box-shadow:
    0 10px 40px rgba(0, 0, 0, .45),
    0 0 25px rgba(236, 72, 153, .25),
    0 0 45px rgba(139, 92, 246, .2);

  &::before{
    content:"";
    position:absolute;
    inset:0;
    padding:2px;
    border-radius:30px;

    background: linear-gradient(
      135deg,
      #EC4899,
      #C026D3,
      #8B5CF6
    );

    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);

    -webkit-mask-composite: xor;
    mask-composite: exclude;

    pointer-events:none;
  }

  transition: .4s;

  &:hover{
    transform: translateY(-8px);

    box-shadow:
      0 15px 50px rgba(0,0,0,.5),
      0 0 35px rgba(236,72,153,.4),
      0 0 60px rgba(139,92,246,.35);
  }
`;

const InfoTitle = styled.h2`
  font-size: 42px;
  color: #EC4899;
  margin-bottom: 25px;
  text-align: center;

  position: relative;

  &::after{
    content:"";
    display:block;
    width:80px;
    height:4px;
    margin:15px auto 0;

    border-radius:10px;

    background: linear-gradient(
      90deg,
      #EC4899,
      #8B5CF6
    );
  }
`;

const InfoText = styled.p`
  font-size: 18px;
  line-height: 1.9;
  color: #E4E4E7;
  margin-bottom: 20px;
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
  Soy <strong>Ingeniera Informática</strong> y actualmente curso la
  Licenciatura en Sistemas con énfasis en Seguridad de la Información.
  Me especializo en desarrollo Frontend utilizando React, JavaScript y
  TypeScript, creando interfaces modernas, responsivas y enfocadas en una
  excelente experiencia de usuario.
</InfoText>

<InfoText>
  Me apasiona el desarrollo web y la ciberseguridad, por lo que continúo
  fortaleciendo mis conocimientos a través de nuevos proyectos y aprendizaje
  constante. Disfruto desarrollar soluciones que combinen diseño,
  funcionalidad, rendimiento y buenas prácticas de programación.
</InfoText>
        </InfoContainer>
      </Information>
    </>
  );
}

export default Hero;