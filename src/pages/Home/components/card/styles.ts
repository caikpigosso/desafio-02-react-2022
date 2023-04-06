import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  height: 19.375rem;
  width: 16rem;
  border-radius: 6px 36px;
  padding: 0 1.25rem 1.25rem 1.25rem;
  display: flex;
  flex-direction: column;
`

export const CardHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;

  > img {
    margin-top: -1.25rem;
  }
`
export const CardDescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  > strong {
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;
    align-items: flex-end;
    text-align: center;
  }

  > span {
    font-weight: 400;
    font-size: 0.87rem;
    line-height: 130%;
    text-align: center;
  }
`

export const CardActionContent = styled.div`
  margin-top: 2.06rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 23px;
  > div {
    > span {
      font-weight: 400;
      font-size: 0.87rem;
      line-height: 130%;
      text-align: center;
    }

    > strong {
      font-family: 'Baloo 2', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 1.5rem;
      text-align: center;
    }
  }
`
export const CardAmountWithCartButton = styled.div`
  width: 7.37rem;
  height: 2.37rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  > div {
    width: 4.5rem;
    height: 2.37rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0.53rem 0.5rem;
    gap: 0.25rem;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    > button {
      background: transparent;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.purple};
      width: 0.87rem;
      font-size: 22px;
      height: 0.87rem;
      border: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      cursor: pointer;
      :hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }

  > button {
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;
    cursor: pointer;
    :hover {
      background: ${(props) => props.theme.purple};
    }
  }
`
export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  span {
    background: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
    font-size: 0.85rem;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`
