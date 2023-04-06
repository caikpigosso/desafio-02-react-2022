import styled from 'styled-components'

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  margin: 5rem 10rem;
  h1 {
    color: ${({ theme }) => theme['yellow-dark']};
    font-weight: bold;
    font-family: 'Baloo 2';
  }
  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${({ theme }) => theme.background};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
const ICON_COLORS = {
  purple: 'purple',
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  baseText: 'base-text',
} as const
interface ItenInfoWithIconProps {
  iconColor: keyof typeof ICON_COLORS
}
export const ItenInfoWithIcon = styled.div<ItenInfoWithIconProps>`
  width: 14.4375rem;
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  div {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme[ICON_COLORS[props.iconColor]]};
  }
`
