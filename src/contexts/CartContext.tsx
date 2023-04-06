import produce from 'immer'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface CartContextProviderProps {
  children: ReactNode
}

interface coffeeType {
  id: number
  imgUrl: string
  tags: string[]
  title: string
  description: string
  price: number
}

export interface cartItens extends coffeeType {
  amount: number
}

export interface Order {
  itens: cartItens[]
  clientAddress: {
    cep: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    uf: string
  }
  paymentMethod: string
}

interface CartContextType {
  cart: cartItens[]
  cartTotalItensAmount: number
  cartTotalitensPrice: number
  selectedRadiosInput: string
  creteNewItemToCart: (data: cartItens) => void
  removeItemToCart: (data: cartItens) => void
  setMethodCard: (data: string) => void
  createOrder: (data: Order) => void
}
export const CartContext = createContext({} as CartContextType)
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<cartItens[]>(() => {
    const localCard = localStorage.getItem('cart')
    if (localCard) {
      return JSON.parse(localCard)
    }
    return []
  })

  const [cartTotalItensAmount, setcarTotalItensAmount] = useState(() => {
    let total = 0
    cart.map((item) => {
      return (total += item.amount)
    })

    return total
  })

  const [cartTotalitensPrice, setCartTotalitensPrice] = useState(() => {
    let total = 0
    cart.map((item) => {
      return (total += item.price * item.amount)
    })

    return total
  })
  const [selectedRadiosInput, setSelectedRadiosInput] = useState('')
  function creteNewItemToCart(data: cartItens) {
    const newCart = produce(cart, (draft) => {
      console.log(draft)
      const existItem = draft.findIndex((item) => item.id === data.id)
      if (existItem >= 0) {
        draft[existItem].amount += data.amount
      } else {
        draft.push(data)
      }
    })
    setCart(newCart)
  }

  function removeItemToCart(data: cartItens) {
    const newCart = produce(cart, (draft) => {
      const existItem = draft.findIndex((item) => item.id === data.id)
      if (existItem >= 0) {
        draft.splice(existItem, 1)
      } else {
        return draft
      }
    })
    setCart(newCart)
  }

  function setMethodCard(id: string) {
    setSelectedRadiosInput(id)
  }
  const navigate = useNavigate()
  function createOrder(data: Order) {
    navigate('/orderConfirmed', {
      state: data,
    })
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    let total = 0
    cart.map((item) => {
      return (total += item.amount)
    })
    setcarTotalItensAmount(total)

    let totalPrice = 0
    cart.map((item) => {
      return (totalPrice += item.price * item.amount)
    })

    setCartTotalitensPrice(totalPrice)
  }, [cart])
  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotalitensPrice,
        creteNewItemToCart,
        cartTotalItensAmount,
        removeItemToCart,
        selectedRadiosInput,
        setMethodCard,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
