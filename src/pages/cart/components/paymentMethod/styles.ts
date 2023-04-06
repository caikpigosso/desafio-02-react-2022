import styled from 'styled-components'

interface PaymentCardInputProps {
  selected: boolean
}

export const PaymentCardInputBox = styled.div<PaymentCardInputProps>`
  width: 11.16rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.2rem;
  background: ${(props) =>
    props.selected
      ? `${props.theme['purple-light']} !important`
      : props.theme['base-button']};
  font-size: 0.75rem;
  border: ${(props) =>
    props.selected
      ? `1px solid ${props.theme.purple}`
      : '1px solid transparent'};
  border-radius: 6px;
  padding: 16px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
  svg {
    color: ${(props) => props.theme.purple};
  }
  input {
    display: none;
  }
  label {
    cursor: pointer;
  }
  span {
  }
`
export const PaymentMethodContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.875rem;
`
export const PaymentInformationsContainer = styled.div`
  padding: 2.5rem;
  align-self: stretch;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  order: 1;
  background: ${(props) => props.theme['base-card']};
  > div {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }
`
export const PaymentHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme.purple};
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
