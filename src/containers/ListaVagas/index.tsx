import { useMemo, useState } from 'react'
import Cabecalho from '../../components/Cabecalho'
import FormVagas from '../../components/FormVagas'
import Hero from '../../components/Hero'
import Vaga from '../../components/Vaga'
import { Empty, Footer, Grid, Page } from './styles'
import { vagas } from '../../data'

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

const ListaVagas = () => {
  const [filtro, setFiltro] = useState('')
  const [nivel, setNivel] = useState('')

  const vagasFiltradas = useMemo(() => {
    const termo = norm(filtro.trim())
    const nivelSelecionado = norm(nivel.trim())

    return vagas.filter((v) => {
      const textoOk =
        !termo ||
        norm(v.titulo).includes(termo) ||
        norm(v.descricao).includes(termo) ||
        norm(v.localizacao).includes(termo)

      const nivelOk =
        !nivelSelecionado || norm(v.nivel).includes(nivelSelecionado)

      return textoOk && nivelOk
    })
  }, [filtro, nivel])

  return (
    <Page>
      <Cabecalho />
      <Hero />

      <FormVagas
        aoPesquisar={(termo: string) => setFiltro(termo)}
        aoFiltrarNivel={(n: string) => setNivel(n)}
      />

      {vagasFiltradas.length === 0 ? (
        <Empty>Nenhuma vaga encontrada com esses filtros.</Empty>
      ) : (
        <Grid>
          {vagasFiltradas.map((vag) => (
            <Vaga
              key={vag.id}
              titulo={vag.titulo}
              localizacao={vag.localizacao}
              nivel={vag.nivel}
              salario={vag.salario}
              descricao={vag.descricao}
              link={vag.link}
            />
          ))}
        </Grid>
      )}

      <Footer>
        Feito por{' '}
        <a
          href="https://github.com/williampeixinho"
          target="_blank"
          rel="noreferrer"
        >
          github.com/williampeixinho
        </a>
      </Footer>
    </Page>
  )
}

export default ListaVagas
