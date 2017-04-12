class Report extends React.Component {
  constructor() {
    super()
    this.state = {
      bid: "",
      ask: "",
      company_name: "",
      bid_realtime: "",
      ask_realtime: "",
      change_realtime: "",
      days_high: "",
      days_low: "",
      ebitda: "",
      estimated_eps: "",
      year_high: "",
      year_low: "",
      pe_ratio:"",
      market_cap: "",
      last_trade_price: "",
    }
  }
  componentDidMount(){
    var that = this;
 $.ajax({
   url: 'https://portfolio-tracker-backend.herokuapp.com/stocks/1',
   dataType: "json",
 }).done(function(data){
   that.setState({
     bid: data["bid"],
     ask: data["ask"],
     company_name: data["companyname"],
     bid_realtime: data["bid_realtime"],
     ask_realtime: data["ask_realtime"],
     change_realtime: data["change_realtime"],
     days_high: data["days_high"],
     days_low: data["days_low"],
     ebitda: data["ebitda"],
     estimated_eps: data["eps_estimate_current_year"],
     year_high: data["year_high"],
     year_low: data["year_low"],
     pe_ratio: data["pe_ratio"],
     market_cap: data["market_capitalization"],
     last_trade_price: data["last_trade_price_only"],
   })
  })
}
  render() {
    return (
      <div>
      <h1 className="report-header">Stock Report Details</h1>
      <table className ="profile-report">
        <tbody>
          <tr>
            <th className="header"> Company Name: </th>
            <td> {this.state.company_name} </td>
        </tr>
          <tr>
            <th className="header"> Last Price: </th>
            <td> {this.state.last_trade_price} </td>
          </tr>
          <tr>
            <th className="header"> Current Bid: </th>
            <td> {this.state.bid_realtime} </td>
          </tr>
          <tr>
            <th className="header"> Current Ask: </th>
            <td> {this.state.ask_realtime} </td>
          </tr>
          <tr>
            <th className="header"> Intraday High: </th>
            <td> {this.state.days_high} </td>
          </tr>
          <tr>
            <th className="header"> Intraday Low: </th>
            <td> {this.state.days_low} </td>
          </tr>
          <tr>
            <th className="header"> Intraday Change: </th>
            <td> {this.state.change_realtime} </td>
          </tr>
          <tr>
            <th className="header"> 52 Week High: </th>
            <td> {this.state.year_high} </td>
          </tr>
          <tr>
            <th className="header"> 52 Week Low: </th>
            <td> {this.state.year_low} </td>
          </tr>
          <tr>
            <th className="header"> Market Cap.: </th>
            <td> {this.state.market_cap} </td>
          </tr>
          <tr>
            <th className="header"> P/E Ratio: </th>
            <td>{this.state.pe_ratio} </td>
          </tr>
          <tr>
            <th className="header"> EBITDA: </th>
            <td> {this.state.ebitda}</td>
          </tr>
          <tr>
            <th className="header"> Estimated EPS: </th>
            <td> {this.state.estimated_eps}</td>
          </tr>
        </tbody>
    </table>
  </div>
    )
  }
}
