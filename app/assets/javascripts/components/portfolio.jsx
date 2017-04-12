class Portfolio extends React.Component {
  render() {
    return(
      <tbody>
        <tr>
          <td><a href="#">{this.props.portfolio.user}'s portfolio</a></td>
          <td>100</td>
          <td>{this.props.portfolio.portfolioCostBase}</td>
          <td>{this.props.portfolio.portfolioTotalVal}</td>
          <td className="text-success">{this.props.portfolio.pnl}</td>
          <td className="text-success"><span className="glyphicon glyphicon-triangle-top"></span>{(((this.props.portfolio.portfolioTotalVal/this.props.portfolio.portfolioCostBase) - 1) *100).toFixed(2)} </td>
        </tr>
      </tbody>
    )
  }
}
