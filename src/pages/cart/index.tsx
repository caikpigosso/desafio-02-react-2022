import { CartContainer, DeliveryContent, ResumeContent } from './styles'
import { PaymentMethod } from './components/paymentMethod'
import { DeliveyInformation } from './components/deliveryInfomartions'
import { ResumeOrder } from './components/ResumeOrder'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'
import { CartContext, Order } from '../../contexts/CartContext'

const newDeliveryInformationsValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  rua: zod.string().min(1, 'Informe o Rua'),
  numero: zod.string().min(1, 'Informe o Número'),
  complemento: zod.string(),
  bairro: zod.string().min(1, 'Informe o Bairro'),
  cidade: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
})

type newDeliveryInformationsFormData = zod.infer<
  typeof newDeliveryInformationsValidationSchema
>
export function Cart() {
  const newDeliveryForm = useForm<newDeliveryInformationsFormData>({
    resolver: zodResolver(newDeliveryInformationsValidationSchema),
    defaultValues: {},
  })
  const { reset, handleSubmit } = newDeliveryForm

  const { setMethodCard, selectedRadiosInput, createOrder, cart } =
    useContext(CartContext)
  function handleCreateDeliveryOrder(data: newDeliveryInformationsFormData) {
    const newOrder: Order = {
      clientAddress: {
        bairro: data.bairro,
        cep: data.cep,
        cidade: data.cidade,
        complemento: data.complemento,
        numero: data.numero,
        rua: data.rua,
        uf: data.uf,
      },
      itens: cart,
      paymentMethod: selectedRadiosInput,
    }
    createOrder(newOrder)
    setMethodCard('')
    reset()
  }

  return (
    <FormProvider {...newDeliveryForm}>
      <CartContainer>
        <form onSubmit={handleSubmit(handleCreateDeliveryOrder)}>
          <DeliveryContent>
            <strong>Complete seu pedido</strong>
            <div>
              <DeliveyInformation />
              <PaymentMethod />
            </div>
          </DeliveryContent>
          <ResumeContent>
            <strong>Cafés selecionados</strong>
            <ResumeOrder />
          </ResumeContent>
        </form>
      </CartContainer>
    </FormProvider>
  )
}
