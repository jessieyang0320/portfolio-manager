class Pie extends React.Component{


  componentDidMount(){
    let tickers = []
    let current_values = []
    let rainbow = [
    "#fbb735", "#e98931", "#1f5ea8", "#b32E37", "#6c2a6a",
    "#5c4399", "#274389", "#eb403b", "#227FB0", "#2ab0c5",
    "#39c0b3"]
    let user_id = localStorage.getItem("user_id")

    $.ajax({
        url: 'https://portfolio-tracker-backend.herokuapp.com/users/'+user_id+'/portfolio',
        dataType: "json",
        async: false,
        data: {authentication_token: localStorage.getItem("user_token")}        
      })
    .done(function(response){
      debugger

      let stock_info = response.stocks
      stock_info.forEach(function(stock){
        tickers = tickers.concat(stock.ticker)
        current_values = current_values.concat(stock.current_value)

    })

    })


  const data = {

    labels: tickers,

    datasets: [
        {
            data: current_values,
            backgroundColor: rainbow,
            hoverBackgroundColor: rainbow
        }]
  };


   let ctx = document.getElementById("myPieChart").getContext("2d");

   let myPieChart = new Chart(ctx, {
     type: 'pie',
     data: data,

   });



  }

  render(){
    return(
      <div id="piechart">
        <h3>Current Value by Sectors</h3>
        <canvas id="myPieChart"></canvas>
      </div>
      )
  }
}
