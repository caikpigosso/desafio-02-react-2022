import { MapPinLine } from 'phosphor-react'
import {
  DeliveryInformationsContainer,
  ComplementoDiv,
  ComplementoInput,
  DeliveryHeader,
} from './styles'
import { useFormContext } from 'react-hook-form'

export function DeliveyInformation() {
  const { register } = useFormContext()
  return (
    <DeliveryInformationsContainer>
      <DeliveryHeader>
        <MapPinLine size={22} />
        <div>
          <span>Endereço de Entrega</span>
          <p>Informe o endereço onde deseja receber seu produto</p>
        </div>
      </DeliveryHeader>
      <div>
        <input placeholder="CEP" title="cep" {...register('cep')} />
      </div>
      <div>
        <input
          type="text"
          placeholder="Logradouro"
          title="rua"
          {...register('rua')}
        />
      </div>
      <div>
        <input placeholder="Número" title="numero" {...register('numero')} />
        <ComplementoDiv>
          <ComplementoInput
            placeholder="Complemento"
            {...register('complemento')}
          />
          <span></span>
        </ComplementoDiv>
      </div>
      <div>
        <input
          type="text"
          placeholder="Bairro"
          title="Bairro"
          {...register('bairro')}
        />
        <input
          type="text"
          placeholder="Cidade"
          title="Cidade"
          {...register('cidade')}
        />
        <input
          type="text"
          placeholder="MS"
          title="uf"
          maxLength={2}
          {...register('uf')}
        />
      </div>
    </DeliveryInformationsContainer>
  )
}
