import styled from 'styled-components'

export const ResumeCardContent = styled.div`
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }
`

export const ItemSeparator = styled.hr`
  border: none;
  border-top: 1px solid ${(props) => props.theme['base-button']};
  margin: 1.25rem 0;
  width: 23rem;
`
export const ResumeOrderContainer = styled.div`
  margin-top: 0.9375rem;
  max-height: 28rem;
  overflow-y: hidden;
  max-height: 28rem;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  width: 100%;

  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`
