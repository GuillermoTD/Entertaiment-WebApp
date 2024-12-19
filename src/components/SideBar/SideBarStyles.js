import styled from 'styled-components';

export const SideBarContainer = styled.div`
  width:7rem;
  height:100vh;
  background:var(--color1);
  display:flex;
  flex-direction:column;
  gap:3rem;
  position:relative;
  align-items:center;
  
  svg{
    color:white;
  }
`;

export const SideBarLogo = styled.span`
  display:flex;
  height:3rem;
  width:100%;
  justify-content:center;
  margin-top:1rem;
  margin-bottom:2rem;
`;

export const SideBarUserBubble = styled.div`
  width:3.5rem;
  height:3.5rem;
  border:#bc0606 solid 2px;
  border-radius:50%;
  position:absolute;
  bottom:1rem;
  display:flex;
  justify-content:center;
  align-items:center;
  overflow:hidden;


  img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
`;
