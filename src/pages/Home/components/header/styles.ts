import styled from 'styled-components'

export const HeaderConainter = styled.div`
  display: flex;
  padding: 5.87rem 10rem;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 6.75rem;
  height: 34rem;
`
export const TextContainer = styled.div`
  max-width: 36.75rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 130%;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
  }
  p {
    margin-top: 1rem;
    margin-bottom: 4.125rem;
    font-size: 1.25rem;
    line-height: 130%;
    font-stretch: 100;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  flex-direction: row;
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
