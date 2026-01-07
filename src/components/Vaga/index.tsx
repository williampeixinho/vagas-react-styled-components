import { Actions, Button, Card, Desc, Meta, Tag, Title, Top } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  salario: string
  descricao: string
  link: string
}

const nivelVariant = (nivel: string) => {
  const n = nivel.toLowerCase()
  if (n.includes('sênior') || n.includes('senior')) return 'coral'
  if (n.includes('pleno')) return 'orange'
  return 'lavender'
}

const Vaga = ({
  titulo,
  localizacao,
  nivel,
  salario,
  descricao,
  link
}: Props) => (
  <Card>
    <Top>
      <div>
        <Title>{titulo}</Title>
        <Meta>
          {localizacao} • {salario}
        </Meta>
      </div>

      <Tag $variant={nivelVariant(nivel)}>{nivel}</Tag>
    </Top>

    <Desc>{descricao}</Desc>

    <Actions>
      <Button href={link} target="_blank" rel="noreferrer">
        Ver detalhes
      </Button>
    </Actions>
  </Card>
)

export default Vaga
