class PositionEdit extends React.Component{
  constructor(){
    super()
    this.state = {
      user_id: "",
      stock_id: "",
      amount: ""
    }

  }
  componentDidMount(){
      this.setState({
        user_id: parseInt(localStorage.getItem("user_id")),
        stock_id: parseInt(window.location.pathname.slice(-1)),
      })
  }

  handleSubmit(e){
    e.preventDefault()
    this.setState({
      amount: this.refs.stockAmount.value
    })
    setTimeout(function() {
      this.ajax()
    }.bind(this), 50)
  }

  ajax(){
    debugger
    $.ajax({
      url: "https://portfolio-tracker-backend.herokuapp.com/users/"+this.state.user_id+"/stocks/"+this.state.stock_id,
      method: "post",
      data: {
        share_amount: parseInt(this.state.amount),
        position_type: "buy"
      }
    })
    .done(function(response){
      alert(response.message)
      window.location.href = "/";
    })
  }
  render(){
    return(
      <div id="make-trade">
        <h3> Make a Trade: </h3>
        <form action="" onSubmit={this.handleSubmit.bind(this)}>
          <select id="position_type">
            <option value="buy" >Buy</option>
            <option value="sell" >Sell</option>
          </select>
         <label id="amount" name="amount">Share Amount:</label>
         <input type="text" name="share_amount" ref="stockAmount"/>
         <input type="hidden" name="ticker" />
         <input id="position-sumbit-button" type="submit" />
       </form>
     </div>
    )
  }
}
