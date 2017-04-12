class YearlyLine extends React.Component {
  componentDidMount(){
    let week = [];
    for (var i = 0; i < 12; i++) {
      datum = new Date(Date.now() - ((i * 31)* 86400000)),
      week = week.concat([datum.toDateString()])
    }
    let data = {

    labels:  [week[11].slice(4,7), week[10].slice(4,7), week[9].slice(4,7), week[8].slice(4,7), week[7].slice(4,7), week[6].slice(4,7), week[5].slice(4,7), week[4].slice(4,7), week[3].slice(4,7), week[2].slice(4,7), week[1].slice(4,7), week[0].slice(4,7)],
    datasets: [
        {
            label: "P&L",
            fill: true,
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
            fill: true,
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
