class Stock extends React.Component{
  render(){
    let textColor;
    let triangle
    if (original_price - current_price > 0) {
      textColor = "text-danger"
      triangle = "glyphicon glyphicon-triangle-bottom"
    } else {
      textColor = "text-success"
      triangle = "glyphicon glyphicon-triangle-top"
    }
     let{company_name, ticker, original_price, current_price, original_value, shares_owned, current_value,current_pnl,stock_id} = this.props.stocks
    return(

      <tbody>
        <tr>
          <td><a href={`/stocks/${stock_id}`}>{company_name}</a></td>
          <td>{ticker}</td>
          <td>{shares_owned}</td>
          <td>{original_price}</td>
          <td>{current_price}</td>
          <td>{original_value}</td>
          <td>{current_value}</td>
          <td className={textColor}>{current_pnl}</td>
          <td className={textColor}><span className={triangle}></span>{((current_price/original_price - 1) * 100).toFixed(2)} </td>
        </tr>
      </tbody>
     )
  }
}
