import {
  HeaderConainter,
  InfoContainer,
  ItenInfoWithIcon,
  TextContainer,
} from './styles'
import imgHeader from '../../../../assets/header-baneer-home.svg'
import { Coffee, Package, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderConainter>
      <TextContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <InfoContainer>
          <ItenInfoWithIcon iconColor="yellowDark">
            <div>
              <ShoppingCart size={16} />
            </div>
            <span>Compra simples e segura</span>
          </ItenInfoWithIcon>
          <ItenInfoWithIcon iconColor="baseText">
            <div>
              <Package size={16} />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </ItenInfoWithIcon>
        </InfoContainer>

        <InfoContainer>
          <ItenInfoWithIcon iconColor="yellow">
            <div>
              <Package size={16} />
            </div>
            <span>Entrega rápida e rastreada</span>
          </ItenInfoWithIcon>
          <ItenInfoWithIcon iconColor="purple">
            <div>
              <Coffee size={16} />
            </div>
            <span>O café chega fresquinho até você</span>
          </ItenInfoWithIcon>
        </InfoContainer>
      </TextContainer>
      <div>
        <img src={imgHeader} alt="" />
      </div>
    </HeaderConainter>
  )
}
