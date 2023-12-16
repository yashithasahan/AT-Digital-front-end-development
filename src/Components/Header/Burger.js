import styled from "styled-components";

const BurgerIcon = styled.div`
  display: none;
  margin: auto 0 0;
  z-index: 20;

  @media (max-width: 760px) {
    display: flex;
    width: 2rem;
    height: 25px;

    top: 15px;
    right: 20px;
    justify-content: space-between;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ openDrawer }) => (openDrawer ? `black` : `white`)};
    border-radius: 8px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ openDrawer }) =>
        openDrawer ? `rotate(45deg)` : `rotate(0)`};
    }
    &:nth-child(2) {
      transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(-100%)` : `translateX(0)`};
      opacity: ${({ openDrawer }) => (openDrawer ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ openDrawer }) =>
        openDrawer ? `rotate(-45deg)` : `rotate(0)`};
    }
  }
`;
const Burger = (props) => {
  return (
    <BurgerIcon openDrawer={props.openDrawer} onClick={props.toggleDrawer}>
      <div />
      <div />
      <div />
    </BurgerIcon>
  );
};

export default Burger;
