class StockPage extends React.Component {
  render() {
    return(
      <div>
        <div className="row col-md-12">
          <div className="row col-md-5">
            <Report />
          </div>
          <div className="row col-md-7">
            <ProfileChartContainer />
          </div>
        </div>
        <PositionEdit />
        <style> {"\
          .col-md-12{\
          margin-top: -35%;\
            }\
          .col-md-7{\
          margin-top: 5%;\
            }\
          "}
        </style>
      </div>

    )
  }
}
