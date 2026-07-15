import styled from "styled-components";


const Section = styled.section`

height:100vh;

display:flex;
justify-content:center;
align-items:center;

text-align:center;

padding:0 20px;

`;


const Title = styled.h1`

font-size:55px;


span{

color:#38BDF8;

}


`;
function Hero (){
   return <>
   <Section>

    <div>

    <Title>
        Hola, me llamo 
        
        <span>
            Karla Araya
        </span>
    </Title>
    </div>
   </Section>
    </>
} 
export default Hero;