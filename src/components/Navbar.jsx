import styled from "styled-components";


const Nav = styled.nav`
  position: fixed;
  top: 15px;
  left: 30%;
  transform: translateX(-50%);

  width: 45%;
  padding: 12px 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rgba(22, 27, 34, 0.75);
  backdrop-filter: blur(18px);

  border: 1px solid rgba(236, 72, 154, 0.541);

  border-radius: 50px;

  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);

  z-index: 100;
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
