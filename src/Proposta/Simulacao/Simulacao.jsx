import {useState} from 'react';
import './Simulacao.styles.css'

const valoresPadroes = {
  valor: 50,
  parcelas: 1,
  valorMaximo: 1_000_000,
  parcelaMaxima: 100,
}

export const Simulacao = ({onClickSimular, desabilitado}) => {
  const [valor, setValor] = useState(50);
  const [parcelas, setParcelas] = useState(1);

  const isValorInvalido = valor > valoresPadroes.valorMaximo;
  const isParcelaInvalida = parcelas > valoresPadroes.parcelaMaxima;
  return (
    <div className="simulacao">
      <div className="simulacao_form">
        <div className="valor">
          <label htmlFor="valor">Valor</label>
          <input type="number" name="valor" id="valor" value={valor}
                 onChange={(event) => setValor(event.target.value)}/>
          {
            isValorInvalido && <span>Valor inválido</span>
          }
        </div>
        <div className={'parcelas'}>
          <label htmlFor="parcelas">Parcelas</label>
          <input type="number" name="parcelas" id="parcelas" value={parcelas}
                 onChange={(event) => setParcelas(event.target.value)}/>
          {
            isParcelaInvalida && <span>Parcela Inválida</span>
          }
        </div>
        <div>
          <button data-testid="simulacao_botao_limpar" onClick={() => {
            setValor(valoresPadroes.valor);
            setParcelas(valoresPadroes.parcelas);
          }}>
            Limpar
          </button>
          <button
            data-testid="simulacao_botao_simular"
            onClick={() => onClickSimular({valor, parcelas})}
                  disabled={isParcelaInvalida || isValorInvalido || desabilitado}>Simular
          </button>

        </div>
      </div>
    </div>
  )
}