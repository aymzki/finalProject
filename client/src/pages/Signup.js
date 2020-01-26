import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
import './style.css';
import Footer from "../components/Footer";

class Signup extends Component {
    state = {
        username: "",
        password: "",
        name: "",
        phone: "",
        email: "",
        location: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleBakeryReturnSubmit = event => {
        event.preventDefault();
        API.getBakeries()
        .then(res => {
            const bakeryInfo = res.data.filter(data => data.username === this.state.username  && data.password === this.state.password);
            const user_variable = bakeryInfo[0].username;
            sessionStorage.clear();
            sessionStorage.setItem("username", user_variable)
        })
    }

    handleCustomerReturnSubmit = event => {
        event.preventDefault();
        API.getCustomers()
        .then(res => {
            const customerInfo = res.data.filter(data => data.username === this.state.username  && data.password === this.state.password);
            const user_variable = customerInfo[0].username;
            sessionStorage.clear();
            sessionStorage.setItem("username", user_variable)
        })
    }

    handleBakeryNewSubmit = event => {
        event.preventDefault();
        API.saveBakery({
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            location: this.state.location
        })
        .catch(err => console.log(err));
        const user_variable = this.state.username;
        sessionStorage.clear();
        sessionStorage.setItem("username", user_variable)
    }

    handleCustomerNewSubmit = event => {
        event.preventDefault();
        API.saveCustomer({
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            location: this.state.location
        })
        .catch(err => console.log(err));
        const user_variable = this.state.username;
        sessionStorage.clear();
        sessionStorage.setItem("username", user_variable)
    }

    render() {
        return (
            <div className="container-fluid">  
                                            <div className="top">
      <nav class="navbar navbar-expand-lg">
      <i className="material-icons">cake</i>  <a class="navbar-brand" href="#">Bakery Link</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Customer Log In <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Bakery Log In</a>
    </div>
  </div>
</nav>
</div> 
            <form>
                <p>Bakery sign in</p>
                <Input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="username"
                />
                <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="password"
                />
                <FormBtn
                    onClick={this.handleBakeryReturnSubmit}
                >
                    Submit
                </FormBtn>
            </form>
            <form>
                <p>Customer sign in</p>
                <Input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="username"
                />
                <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="password"
                />
                <FormBtn
                    onClick={this.handleCustomerReturnSubmit}
                >
                    Submit
                </FormBtn>
            </form>
            <form>
                <p>Bakery sign up</p>
                <Input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="username"
                />
                <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="password"
                />
                <Input
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    name="name"
                    placeholder="name"
                />
                <Input
                    value={this.state.location}
                    onChange={this.handleInputChange}
                    name="location"
                    placeholder="location"
                />
                <FormBtn
                    onClick={this.handleBakeryNewSubmit}
                >
                    Submit
                </FormBtn>
            </form>
            <form>
                <p>Customer sign up</p>
                <Input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="username"
                />
                <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="password"
                />
                <Input
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    name="name"
                    placeholder="name"
                />
                <Input
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                    name="phone"
                    placeholder="phone"
                />
                <Input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="email"
                />
                <Input
                    value={this.state.location}
                    onChange={this.handleInputChange}
                    name="location"
                    placeholder="location"
                />
                <FormBtn
                    onClick={this.handleCustomerNewSubmit}
                >
                    Submit
                </FormBtn>
            </form>
            <Footer></Footer>
            </div>
        )
    }
}

export default Signup;