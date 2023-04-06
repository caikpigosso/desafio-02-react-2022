import { Minus, Plus, Trash } from 'phosphor-react'
import {
  ElementItemAmount,
  ItemContent,
  ItemInfoContent,
  ItemOptionsContent,
} from './styles'
import cafeExpresso from '../../../../../../assets/expresso.svg'
import { CartContext, cartItens } from '../../../../../../contexts/CartContext'
import { useContext } from 'react'
interface ItemReseumeOrderProps {
  content: cartItens
}
export function ItemResumeOrder({ content }: ItemReseumeOrderProps) {
  const { removeItemToCart } = useContext(CartContext)

  function handleRemoveItemToCart() {
    removeItemToCart(content)
  }
  return (
    <ItemContent>
      <ItemInfoContent>
        <img src={cafeExpresso} alt="" />
        <div>
          <span>{content.title}</span>
          <ItemOptionsContent>
            <ElementItemAmount>
              <Minus />
              <span>{content.amount}</span>
              <Plus />
            </ElementItemAmount>
            <button onClick={handleRemoveItemToCart}>
              <Trash />
              Remover
            </button>
          </ItemOptionsContent>
        </div>
      </ItemInfoContent>
      <div>
        <strong>R$ {content.price.toFixed(2)}</strong>
      </div>
    </ItemContent>
  )
}
