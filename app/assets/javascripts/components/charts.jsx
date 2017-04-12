class Charts extends React.Component {
  constructor() {
    super()
    this.state = {
      year: false,
      month: true,
      week: false
    }
  }
  handleClickYear() {
    this.setState({
      year: true,
      month: false,
      week: false
    })
  }
  handleClickMonth() {
    this.setState({
      year: false,
      month: true,
      week: false
    })
  }
  handleClickWeek() {
    this.setState({
      year: false,
      month: false,
      week: true
    })
    this.render()
  }
  render(){
    let display = (<MonthlyLine name="PortfolioHistory"/>)
    if (this.state.month == true) {
      display = (<MonthlyLine name="PortfolioHistory"/>)
    } else if (this.state.year ==  true) {
      display = (<YearlyLine name="PortfolioHistory"/>)
    } else if (this.state.week == true) {
      display = (<WeeklyLine name="PortfolioHistory"/>)
    }
    return(
      <div>
          <ol className="breadcrumb col-sm-offset-3 col-md-2 container">
            <li><a href="#" onClick={this.handleClickYear.bind(this)}>1Y</a></li>
            <li><a href="#" onClick={this.handleClickMonth.bind(this)}>1M</a></li>
            <li><a href="#" onClick={this.handleClickWeek.bind(this)}>1W</a></li>
          </ol>
          <div className="col-xs-8 col-sm-8 placeholder">
            {display}
            <h4>Portfolio History</h4>
          </div>
      </div>

    )
  }
}
