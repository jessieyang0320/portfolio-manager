class Register extends React.Component {
  handleSubmit(e){
    e.preventDefault()
    let password = this.refs.pw.value
    let password_confirmation = this.refs.pw_con.value
    let email = this.refs.email.value
    let first_name = this.refs.first.value
    let last_name = this.refs.last.value
    $.ajax({
      url: "https://portfolio-tracker-backend.herokuapp.com/users",
      method: "post",
      data: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
    })
    .done(function(response){
      localStorage.setItem("user_token", response.authentication_token)
      localStorage.setItem("user_id", response.id)
      debugger
      window.location.href = "/";
    })
  }
  render() {
    return(
      <div>
      <br/><br/><br/>
        <form onSubmit={this.handleSubmit.bind(this)} className="col-md-6 col-sm-offset-3">
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">First Name</label>
            <input type="text" className="form-control" id="formGroupExampleInput" ref="first" placeholder="First Name"/>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Last Name</label>
            <input type="text" className="form-control" id="formGroupExampleInput" ref="last" placeholder="Last Name"/>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Email</label>
            <input type="email" className="form-control" id="formGroupExampleInput" ref="email" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Password</label>
            <input type="password" className="form-control" id="formGroupExampleInput2" ref="pw" placeholder="Password"/>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Password Confirmation</label>
            <input type="password" className="form-control" id="formGroupExampleInput2" ref="pw_con" placeholder="Password Confirmation"/>
          </div>
          <input type="submit" name="Register" />
        </form>
      </div>
    )
  }
}
