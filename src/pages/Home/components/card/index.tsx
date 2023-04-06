import {
  CardContainer,
  CardDescriptionContent,
  CardHeaderContainer,
  CardActionContent,
  CardAmountWithCartButton,
  Tags,
} from './styles'
import cafeExpresso from '../../../../assets/expresso.svg'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext, cartItens } from '../../../../contexts/CartContext'

interface CardProps {
  content: {
    id: number
    imgUrl: string
    tags: string[]
    title: string
    description: string
    price: number
    amount: number
  }
}
export function Card({ content }: CardProps) {
  const { creteNewItemToCart } = useContext(CartContext)

  const [itemAmount, setItemAmount] = useState(1)

  function handleAddToCart() {
    const data: cartItens = {
      ...content,
      amount: itemAmount,
    }

    creteNewItemToCart(data)
  }
  function handleIncrementItemAmount() {
    setItemAmount((state) => state + 1)
  }
  function handleDecrementItemAmount() {
    if (itemAmount === 0) {
      setItemAmount(0)
    } else {
      setItemAmount((state) => state - 1)
    }
  }

  return (
    <CardContainer>
      <CardHeaderContainer>
        <img src={cafeExpresso} alt="" />
        <Tags>
          {content.tags.map((tag) => {
            return <span key={`${content.id}${tag}`}>{tag}</span>
          })}
        </Tags>
      </CardHeaderContainer>
      <CardDescriptionContent>
        <strong>{content.title}</strong>
        <span>{content.description}</span>
      </CardDescriptionContent>
      <CardActionContent>
        <div>
          <span>R$ </span>
          <strong>{content.price.toFixed(2)}</strong>
        </div>
        <CardAmountWithCartButton>
          <div>
            <button onClick={handleDecrementItemAmount}>
              <Minus />
            </button>
            <span>{itemAmount}</span>
            <button onClick={handleIncrementItemAmount}>
              <Plus />
            </button>
          </div>
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </CardAmountWithCartButton>
      </CardActionContent>
    </CardContainer>
  )
}
