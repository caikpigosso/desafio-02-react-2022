import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import {
  ItenInfoWithIcon,
  OrderConfirmedContainer,
  OrderDetailsContainer,
} from './styles'
import confirmedOrderIllustration from '../../assets/Illustration.svg'
import { Order } from '../../contexts/CartContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
interface LocationType {
  state: Order
}

export function OrderConfirm() {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()
  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])
  return (
    <OrderConfirmedContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </div>

      <section>
        <OrderDetailsContainer>
          <ItenInfoWithIcon iconColor="purple">
            <div>
              <MapPin weight="fill" />
            </div>
            <span>
              Entrega em <strong>{state.clientAddress.rua}</strong>,{' '}
              {state.clientAddress.numero}
              <br />
              {state.clientAddress.bairro} - {state.clientAddress.cidade},{' '}
              {state.clientAddress.uf}
            </span>
          </ItenInfoWithIcon>

          <ItenInfoWithIcon iconColor="yellow">
            <div>
              <Clock weight="fill" />
            </div>
            <span>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </span>
          </ItenInfoWithIcon>

          <ItenInfoWithIcon iconColor="yellowDark">
            <div>
              <CurrencyDollar weight="fill" />
            </div>
            <span>
              Pagamento na entrega
              <br />
              {state.paymentMethod === 'creditCard' && (
                <strong> Cartão de Crédito</strong>
              )}
              {state.paymentMethod === 'debitCard' && (
                <strong> Cartão de Débito</strong>
              )}
              {state.paymentMethod === 'money' && <strong>Dinheiro</strong>}
            </span>
          </ItenInfoWithIcon>
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} alt="" />
      </section>
    </OrderConfirmedContainer>
  )
}
