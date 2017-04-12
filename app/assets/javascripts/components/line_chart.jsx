class MonthlyLine extends React.Component {
  componentDidMount(){
    // ajax request to get data
    $.ajax({
      url: 'https://portfolio-tracker-backend.herokuapp.com/users/1/portfolio/history',
      dataType: "json",
    }).done(function(data){
    })

    let month = [];
    for (var i = 0; i < 31; i++) {
      datum = new Date(Date.now() - (i * 86400000)),
      month = month.concat([datum.toDateString()])
    }
    let data = {

    labels: [month[30], month[29], month[28], month[27], month[26], month[25], month[24], month[23], month[22], month[21], month[20], month[19], month[18], month[17], month[16], month[15], month[14], month[13], month[12], month[11], month[10], month[9], month[8], month[7], month[6], month[5], month[4], month[3], month[2], month[1], month[0]],
    datasets: [
        {
            label: "P&L",
            fill: false,
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
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        },
        {
            label: "%",
            fill: false,
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
            data: [100, 200, 250, 81, 56, 55, 40],
            spanGaps: false,
        }
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
      <canvas id={this.props.name}></canvas>
      )
  }
}
