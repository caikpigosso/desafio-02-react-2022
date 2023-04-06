import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 100vw;
  margin: 2rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`

export const ButtonCitySelector = styled.button`
  background: ${(props) => props.theme['purple-light']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 0.5rem;
  color: ${(props) => props.theme.purple};
  border: 0;
  cursor: pointer;
`
export const ButtonCart = styled.button`
  padding: 0.5rem;
  border: 0;
  position: relative;

  border-radius: 8px;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  cursor: pointer;

  span {
    position: absolute;
    font-style: italic;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    width: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.25rem;
    border-radius: 50%;
    line-height: 130%;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme['yellow-dark']};

    font-size: 0.75rem;
    color: ${(props) => props.theme.white};
  }
`
