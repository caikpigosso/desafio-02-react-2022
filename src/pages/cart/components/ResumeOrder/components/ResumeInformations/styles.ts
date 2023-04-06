import styled from 'styled-components'

export const ResumeInfosContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  > div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  > div > div {
    display: flex;
    justify-content: space-between;
    align-self: stretch;
  }

  > button {
    border: 0;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    align-items: center;
    padding: 0.75rem 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    cursor: pointer;
  }
`
