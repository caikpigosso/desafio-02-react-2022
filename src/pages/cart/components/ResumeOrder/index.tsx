import {
  ResumeCardContent,
  ItemSeparator,
  ResumeOrderContainer,
} from './styles'
import { ItemResumeOrder } from './components/ItemResumeOrder'
import { ResumeInformations } from './components/ResumeInformations'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

export function ResumeOrder() {
  const { cart, cartTotalitensPrice } = useContext(CartContext)
  return (
    <ResumeOrderContainer>
      <ResumeCardContent>
        {cart.map((item, index) => {
          return (
            <div key={item.id}>
              <ItemResumeOrder content={item} />

              {cart.length - 1 !== index && <ItemSeparator />}
            </div>
          )
        })}
      </ResumeCardContent>
      <ItemSeparator />
      <ResumeInformations totalPrice={cartTotalitensPrice} />
    </ResumeOrderContainer>
  )
}
