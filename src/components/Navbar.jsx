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




const Menu = styled.ul`

display:flex;
gap:30px;
list-style:none;
  @media (max-width:768px){
    gap:15px;
  }

li{

cursor:pointer;

color:#fcf8fb;

transition:.3s;
font-size:18px;

@media (max-width:768px){
    font-size:14px;

}
&:hover{

color:#ba0163;

}


}

`;


function Navbar(){

return(

<Nav>


<Menu>


<li>Sobre mí</li>

<li>Formación</li>

<li>Proyectos</li>

<li>Contacto</li>


</Menu>


</Nav>

)

}


export default Navbar;
