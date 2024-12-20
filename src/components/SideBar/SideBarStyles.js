import styled from 'styled-components';

export const SideBarContainer = styled.div`
  width:6rem;
  height:100vh;
  background:var(--color1);
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:3rem;
  align-items:center;
  
  svg{
    color:white;
    transition:.3s ease-in;
  }


  .OptionBox{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 3.4rem;
    transition:.1s ease-in;

    svg:hover{
      color:var(--color2);
    }

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
