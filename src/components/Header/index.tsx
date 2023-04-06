import { ButtonCart, ButtonCitySelector, HeaderContainer } from './styles'
import CofeLogo from '../../assets/cofe-Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
export function Header() {
  const { cartTotalItensAmount } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to={'/'} title="Home">
        <img src={CofeLogo} alt="" />
      </NavLink>
      <nav>
        <ButtonCitySelector>
          <MapPin size={22} weight="fill" />
          <span>Ivinhema, MS</span>
        </ButtonCitySelector>
        <NavLink to={'/cart'} title="Carrinho">
          <ButtonCart>
            <ShoppingCart size={22} weight="fill" />
            {cartTotalItensAmount !== 0 && <span>{cartTotalItensAmount}</span>}
          </ButtonCart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
