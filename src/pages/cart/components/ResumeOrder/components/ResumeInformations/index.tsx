import { ResumeInfosContainer } from './styles'

interface ResumeInformationsProps {
  totalPrice: number
}
export function ResumeInformations({ totalPrice }: ResumeInformationsProps) {
  return (
    <ResumeInfosContainer>
      <div>
        <div>
          <span>Total de itens</span>
          <span>{`R$ ${totalPrice.toFixed(2)}`}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 3.50</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>{`R$ ${(totalPrice + 3.5).toFixed(2)}`}</strong>
        </div>
      </div>
      <button type="submit">CONFIRMAR PEDIDO</button>
    </ResumeInfosContainer>
  )
}
