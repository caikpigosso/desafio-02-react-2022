import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { useContext } from 'react'
import {
  PaymentInformationsContainer,
  PaymentHeader,
  PaymentMethodContainer,
  PaymentCardInputBox,
} from './styles'
import { useFormContext } from 'react-hook-form'
import { CartContext } from '../../../../contexts/CartContext'

export function PaymentMethod() {
  const { register } = useFormContext()
  const { selectedRadiosInput, setMethodCard } = useContext(CartContext)
  function handleChangeSelectedRadiosInput(event: any) {
    setMethodCard(event.target.id)
  }
  return (
    <PaymentInformationsContainer>
      <PaymentHeader>
        <CurrencyDollar size={22} />
        <div>
          <span>Pagamento</span>
          <p>
            O Pagmaneto é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentHeader>
      <PaymentMethodContainer>
        <PaymentCardInputBox
          selected={selectedRadiosInput === 'creditCard'}
          onClick={handleChangeSelectedRadiosInput}
          id="creditCard"
        >
          <input
            type="radio"
            {...register('paymentMethod', { required: true })}
            value="creditCard"
            checked={selectedRadiosInput === 'creditCard'}
            onChange={handleChangeSelectedRadiosInput}
            id="creditCard"
          />
          <CreditCard size={16} id="creditCard" />{' '}
          <span id="creditCard">CARTÃO DE CRÉDITO</span>
        </PaymentCardInputBox>

        <PaymentCardInputBox
          selected={selectedRadiosInput === 'debitCard'}
          onClick={handleChangeSelectedRadiosInput}
          id="debitCard"
        >
          <input
            {...register('paymentMethod', { required: true })}
            type="radio"
            value="debitCard"
            id="debitCard"
            checked={selectedRadiosInput === 'debitCard'}
            onChange={handleChangeSelectedRadiosInput}
          />
          <Bank size={16} id="debitCard" /> CARTÃO DE DÉBITO
        </PaymentCardInputBox>

        <PaymentCardInputBox
          selected={selectedRadiosInput === 'money'}
          onClick={handleChangeSelectedRadiosInput}
          id="money"
        >
          <input
            {...register('paymentMethod', { required: true })}
            type="radio"
            value="Dinheiro"
            id="money"
            checked={selectedRadiosInput === 'debitCard'}
            onChange={handleChangeSelectedRadiosInput}
          />
          <Money id="money" size={16} />
          <span id="money">DINHEIRO</span>
        </PaymentCardInputBox>
      </PaymentMethodContainer>
    </PaymentInformationsContainer>
  )
}
