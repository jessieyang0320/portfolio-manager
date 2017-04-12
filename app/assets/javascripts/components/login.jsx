class Login extends React.Component {
  handleSubmit(e){
    e.preventDefault()
    let password = this.refs.pw.value
    let email = this.refs.email.value

    $.ajax({
      url: "https://portfolio-tracker-backend.herokuapp.com/users/sign_in",
      method: "post",
      data: {
        email: email,
        password: password,
      }
    })
    .done(function(response){
      console.log(response)
    })
  }
  render() {
    return(
      <div>
      <br/><br/><br/>
        <form onSubmit={this.handleSubmit.bind(this)} className="col-md-6 col-sm-offset-3">
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Email</label>
            <input type="email" className="form-control" id="formGroupExampleInput" ref="email" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Password</label>
            <input type="password" className="form-control" id="formGroupExampleInput2" ref="pw" placeholder="Password"/>
          </div>
          <input type="submit" name="Register" />
        </form>
      </div>
    )
  }
}
