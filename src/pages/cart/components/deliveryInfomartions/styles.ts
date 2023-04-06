import styled from 'styled-components'

export const DeliveryHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  > div {
    p {
      font-size: 0.85rem;
    }
  }
`

export const DeliveryInformationsContainer = styled.div`
  border-radius: 8px;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  order: 0;
  max-width: 40rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  > div {
    display: flex;

    max-width: 35rem;
    gap: 0.75rem;
    align-self: stretch;
  }
  > div + div {
    margin-top: 1rem;
    flex: 2;
  }
  > div + div + div {
    margin-top: 1rem;
    flex: 3;
  }
  > div input {
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme['base-hover']};
    padding: 0.75rem;
  }

  [title~='cep'] {
    max-width: 12.5rem;
  }
  [title~='uf'] {
    width: 3.8rem;
    order: 2;
    flex-grow: 0;
  }
  [title~='cidade'] {
    width: 17.25rem;

    order: 1;
    flex-grow: 0;
  }
  [title~='rua'] {
    width: 35rem;
    align-self: stretch;
    flex: none;
    order: 1;
  }
`

export const ComplementoInput = styled.input`
  flex: none;
  order: 2;
  flex-grow: 1;
  width: 21.4rem;
  ~ span {
    position: relative;
    order: 2;
  }
  &:placeholder-shown ~ span::after {
    content: 'Opcional';
    position: absolute;
    right: 15px;
    top: -15px;
    font-style: italic;
    line-height: 130%;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const ComplementoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
