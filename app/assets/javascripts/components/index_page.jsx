class IndexPage extends React.Component {
  render() {
    return(
      <div>
        <div className="row col-md-12">
          <br/><br/><br/>
            <div className="col-md-3 col-md-offset-2">
              <Pie/>
            </div>
            <div className="col-md-7 container-fluid">
              <Charts/>
            </div>
        </div>
        <div className="row col-md-12">
          <div className="col-md-12 col-md-offset-2">
            <StockList/>
          </div>
        </div>
      </div>
    )
  }
}
