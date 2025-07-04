import './Resultado.styles.css';

export const Resultado = ({onClickNovaSimulacao, onClickGerarProposta, valores, desabilitado}) => {
  return (
    <div className="resultado">
      <p data-testid="resultado_valor_total">Valor Total: {valores.valor}</p>
      <p data-testid="resultado_valor_cet">CET: 30%</p>
      <ul data-testid="resultado_parcelas" className="parcelas">
        {
          new Array(+valores.parcelas).fill(null).map((_, i) => <li className="parcela">Parcela: {i + 1}</li>)
        }
      </ul>
      <button disabled={desabilitado} onClick={onClickNovaSimulacao}>Nova Simulacao</button>
      <button disabled={desabilitado} onClick={onClickGerarProposta}>Gerar Proposta</button>
    </div>
  )
}