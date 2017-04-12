class ProfileChart extends React.Component {
  constructor(){
    super()
    this.state = {
      stock_history: [],
    }
    this.renderChart = this.renderChart.bind(this)
  }
  componentDidMount(){
    // ajax request to get data
    var that = this
    $.ajax({
      url: 'https://portfolio-tracker-backend.herokuapp.com/stocks/1/',
      dataType: "json",
      async: false,
    }).done(function(data){
      that.setState({
        stock_history: data.history
      })
    })
    this.newData = setTimeout(this.renderChart, 0)
  }


    renderChart(){
    let month = [];
    for (var i = 0; i < 20; i++) {
      datum = new Date(Date.now() - (i * 86400000)),
      month = month.concat([datum.toDateString()])
    }
    dataPoints = this.state.stock_history.slice(0,20).reverse()
    let data = {
    labels: [month[19], month[18], month[17], month[16], month[15], month[14], month[13], month[12], month[11], month[10], month[9], month[8], month[7], month[6], month[5], month[4], month[3], month[2], month[1], month[0]],
    datasets: [
        {
            label: "Stock History",
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [
                  dataPoints[0].close,
                  dataPoints[1].close,
                  dataPoints[2].close,
                  dataPoints[3].close,
                  dataPoints[4].close,
                  dataPoints[5].close,
                  dataPoints[6].close,
                  dataPoints[7].close,
                  dataPoints[8].close,
                  dataPoints[9].close,
                  dataPoints[10].close,
                  dataPoints[11].close,
                  dataPoints[12].close,
                  dataPoints[13].close,
                  dataPoints[14].close,
                  dataPoints[15].close,
                  dataPoints[16].close,
                  dataPoints[17].close,
                  dataPoints[18].close,
                  dataPoints[19].close
                ],
            spanGaps: false,
        },
    ]
  };
    let ctx = document.getElementById(this.props.name).getContext("2d");
    let myPieChart = new Chart(ctx, {
      type: 'line',
      data: data
    });
  }

  render(){
    return(
      <div className="stock-chart">
        <canvas id={this.props.name}> </canvas>
      </div>
      )
  }
}
