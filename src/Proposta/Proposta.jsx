import {Resultado} from './Resultado/Resultado.jsx';
import {Simulacao} from './Simulacao/Simulacao.jsx';
import {useState} from 'react';
import './Proposta.styles.css';

export const Proposta = () => {
  const [situacao, setSituacao]  = useState('inicial');
  const [valores, setValores] = useState({});

  if(situacao === 'proposta_gerada') {
    return (
      <div className="proposta" data-testid="proposta_resultado_proposta">
        <div>Proposta gerada com sucesso!</div>
        <button data-testid="proposta_resultado_nova_simulacao" onClick={() => setSituacao('inicial')}>Nova Simulacao</button>
      </div>
    )
  }

  return (
    <div className="proposta">
    <h2>Simulador de Emprestimos</h2>
    <Simulacao onClickSimular={({parcelas, valor}) => {
      setValores({parcelas, valor});
      setSituacao('resultado_apresentacao');
    }} />
        {
          (situacao === 'resultado_apresentacao' || situacao === 'gerando_proposta') && (
            <Resultado desabilitado={situacao === 'gerando_proposta'} valores={valores} onClickNovaSimulacao={() => setSituacao('inicial')} onClickGerarProposta={() => {
              setSituacao('gerando_proposta')
              setTimeout(() => {
                setSituacao('proposta_gerada');
              }, 1000)
            }} />
          )
        }
      </div>
  )
}