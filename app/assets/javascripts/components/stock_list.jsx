class StockList extends React.Component{
  constructor(){
    super()
    this.state ={
      portfolioPnl: "",
      user: "",
      portfolioStocks: [],
      pnl: "",
      portfolioCostBase: "",
      portfolioTotalVal:"",

    }
    this.getData = this.getData.bind(this)
  }
  componentDidMount(){
    let user_id = localStorage.getItem("user_id")
    var that = this
    $.ajax({
        url: 'https://portfolio-tracker-backend.herokuapp.com/users/'+user_id+'/portfolio',
        dataType: "json",
        data: {authentication_token: localStorage.getItem("user_token")}
      }).done(function(data){
        that.setState({
          user: data["name"],
          portfolioStocks: data["stocks"],
          pnl: data["portfolio_pnl"],
          portfolioPnl: data["portfolio_pnl"],
          portfolioCostBase: data["portfolio_cost_basis"],
          portfolioTotalVal: data["portfolio_total_value"],

        })
      })
      this.newData = setInterval(this.getData, 2500)
  }

  getData(){
        let user_id = localStorage.getItem("user_id")
        var that = this
        $.ajax({
            url: 'https://portfolio-tracker-backend.herokuapp.com/users/'+user_id+'/portfolio',
            dataType: "json",
            data: {authentication_token: localStorage.getItem("user_token")}
          }).done(function(data){
            that.setState({
              user: data["name"],
              portfolioStocks: data["stocks"],
              pnl: data["portfolio_pnl"],
              portfolioPnl: data["portfolio_pnl"],
              portfolioCostBase: data["portfolio_cost_basis"],
              portfolioTotalVal: data["portfolio_total_value"]
            })
          })
  }
  render(){
    return(
      <div>
        <div className="container-fluid">
          <div className="row">

            <div className="col-sm-3 col-md-2 sidebar">
              <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <h2 className="sub-header">{this.state.user} Portfolio:</h2>
              <h2 id="portfolio-pnl"> P&L: {this.state.portfolioPnl}</h2>
              <div className="table-div">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Portfolio:</th>
                    <th>Amount of Shares:</th>
                    <th>Original Position Value:</th>
                    <th>Current Position Value:</th>
                    <th>P&L:</th>
                    <th>%</th>
                  </tr>
                </thead>
                  <Portfolio portfolio={this.state} />
              </table>
            </div>
                <div className="table-div">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Company:</th>
                      <th>Stock Symbol:</th>
                      <th>Shares Owned:</th>
                      <th>Avg. Purchase Price:</th>
                      <th>Current Price:</th>
                      <th>Original Position Value:</th>
                      <th>Current Position Value:</th>
                      <th>P&L:</th>
                      <th>%</th>
                    </tr>
                  </thead>
                    {this.state.portfolioStocks.map((stock, i) =>
                      <Stock stocks={stock} key={i}/>
                    )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
  }
}
