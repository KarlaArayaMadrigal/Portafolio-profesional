import styled from "styled-components";


const Nav = styled.nav`

position:fixed;
top:0;
width:100%;
padding:20px 10%;

display:flex;
justify-content:space-between;
align-items:center;

background:rgb(0, 11, 34);
backdrop-filter:blur(10px);

z-index:100;

@media (max-width: 768px) {
    padding: 15px 5%;
}
    


`;


const Logo = styled.h1`

color:rgb(187, 205, 243);
font-size:44px;
font-family: "Lora", serif;

`;


const Menu = styled.ul`

display:flex;
gap:30px;
list-style:none;


li{

cursor:pointer;

color:#F8FAFC;

transition:.3s;


&:hover{

color:#b2b3fa;

}


}

`;


function Navbar(){

return(

<Nav>

<Logo>
Karla Araya
</Logo>


<Menu>

<li>Inicio</li>

<li>Sobre mí</li>

<li>Proyectos</li>

<li>Contacto</li>


</Menu>


</Nav>

)

}


export default Navbar;
