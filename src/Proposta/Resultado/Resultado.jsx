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
      <button data-testid="resultado_botao_nova_simulacao" disabled={desabilitado} onClick={onClickNovaSimulacao}>Nova Simulacao</button>
      <button data-testid="resultado_botao_gerar_proposta" disabled={desabilitado} onClick={onClickGerarProposta}>Gerar Proposta</button>
    </div>
  )
}