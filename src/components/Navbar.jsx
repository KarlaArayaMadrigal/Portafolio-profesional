import styled from "styled-components";


const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 50%;
  margin: 0 auto;
  margin-top: 4px;
  margin-left: 5px;
  padding: 10px 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rgba(177, 6, 100, 0.997); 
  backdrop-filter: blur(10px);           
  border-radius: 45px 45px 45px 45px;

  z-index: 100;

  @media (max-width: 768px) {
    width: 95%;
    padding: 8px 3%;
  }
`;





const Menu = styled.ul`

display:flex;
gap:30px;
list-style:none;
  @media (max-width:768px){
    gap:15px;
  }

li {
  cursor: pointer;
  color: #fcf8fb;
  transition: 0.4s;
  font-size: 18px;
}

li:hover {
  color: #fff;
  text-shadow: 
    0 0 5px #f200ff,
    0 0 10px #ff6fee,
    0 0 20px #ff6fee,
    0 0 40px #ff6fee;
  transform: scale(1.1); 
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
