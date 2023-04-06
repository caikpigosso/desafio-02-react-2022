import styled from 'styled-components'

export const ItemContent = styled.div`
  display: flex;

  align-items: flex-start;
  padding: 0.5rem 0.25rem;
  align-self: stretch;
  width: 23rem;
`
export const ItemInfoContent = styled.div`
  display: flex;
  gap: 1.25rem;

  > img {
    height: 4rem;
    width: 4rem;
  }

  > div span {
    font-size: 1rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ItemOptionsContent = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 0.5rem;

  > button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;
    align-items: center;
    padding: 0px 8px;
    gap: 4px;
    border: 0;
    background: ${(props) => props.theme['base-button']};

    > svg {
      color: ${(props) => props.theme.purple};
    }
  }
  > button:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
export const ElementItemAmount = styled.div`
  background: ${(props) => props.theme['base-button']};
  display: flex;

  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 0.5rem;
  gap: 0.25rem;

  > svg {
    color: ${(props) => props.theme.purple};
    transition: 0.2s;
    cursor: pointer;
  }

  svg:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
