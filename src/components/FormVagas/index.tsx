import { useState } from "react"
import { Field, FormWrap, Grid, Input, Select } from "./styles"

type Props = {
  aoPesquisar: (termo: string) => void
  aoFiltrarNivel: (nivel: string) => void
}

const FormVagas = ({ aoPesquisar, aoFiltrarNivel }: Props) => {
  const [termo, setTermo] = useState("")
  const [nivel, setNivel] = useState("")

  return (
    <FormWrap>
      <Grid>
        <Field>
          <span>Pesquisar</span>
          <Input
            value={termo}
            onChange={(e) => {
              const v = e.target.value
              setTermo(v)
              aoPesquisar(v)
            }}
            placeholder="Cargo, empresa ou palavras-chave"
          />
        </Field>

        <Field>
          <span>Nível</span>
          <Select
            value={nivel}
            onChange={(e) => {
              const v = e.target.value
              setNivel(v)
              aoFiltrarNivel(v)
            }}
          >
            <option value="">Todos</option>
            <option value="junior">Júnior</option>
            <option value="pleno">Pleno</option>
            <option value="senior">Sênior</option>
          </Select>
        </Field>
      </Grid>
    </FormWrap>
  )
}

export default FormVagas
