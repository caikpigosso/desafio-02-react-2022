import styled from 'styled-components'

export const CartContainer = styled.div`
  > form {
    max-width: calc(100vw-10rem);
    margin: 0 10rem;
    max-height: 38rem;
    gap: 2rem;
    justify-content: space-between;
    display: flex;
  }
`

export const DeliveryContent = styled.div`
  height: 37.5rem;
  width: 40rem;
  gap: 1rem;
  height: 36.89rem;

  > div {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  > strong {
    font-weight: bold;
    font-size: 1.2rem;
  }
`
export const ResumeContent = styled.div`
  > strong {
    font-weight: bold;
    font-size: 1.2rem;
  }
`
