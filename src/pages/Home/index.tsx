import { Card } from './components/card'
import { Header } from './components/header'
import { ContentConainter, HomeConainter } from './styles'

interface coffeesType {
  id: number
  imgUrl: string
  tags: string[]
  title: string
  description: string
  price: number
  amount: number
}
export function Home() {
  const coffees: coffeesType[] = [
    {
      id: 1,
      imgUrl: 'string',
      tags: ['tradicional'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      amount: 1,
    },
    {
      id: 2,
      imgUrl: 'string',
      tags: ['tradicional', 'forte'],
      title: 'Expresso Tradicional 2',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      amount: 15,
    },
    {
      id: 3,
      imgUrl: 'string',
      tags: ['tradicional', 'forte'],
      title: 'Expresso Tradicional 2',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      amount: 15,
    },
    {
      id: 4,
      imgUrl: 'string',
      tags: ['tradicional', 'forte'],
      title: 'Expresso Tradicional 2',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      amount: 15,
    },
    {
      id: 5,
      imgUrl: 'string',
      tags: ['tradicional', 'forte'],
      title: 'Expresso Tradicional 2',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      amount: 15,
    },
  ]

  return (
    <HomeConainter>
      <Header />
      <ContentConainter>
        <h1>Nossos Cafés</h1>
        <div>
          {coffees.map((coffee) => {
            return <Card key={coffee.id} content={coffee} />
          })}
        </div>
      </ContentConainter>
    </HomeConainter>
  )
}
