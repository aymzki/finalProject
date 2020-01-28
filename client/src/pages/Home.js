import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import './style.css';




class Home extends Component {

  state = { modalshown: false }

  showmodal = () => { this.setState({ modalshown: true }); };
  hidemodal = () => { this.setState({ modalshown: false }); };

  render() {
    return (
      <div className="bg">
<div className="top">
        <nav className="navbar navbar-expand-lg ">
        <i className="material-icons">cake</i> <br></br><a class="navbar-brand" href="#">Bakery Link</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">Customer Log In <span class="sr-only">(current)</span></a>
              <a className="nav-item nav-link active" href="#">Bakery Log In</a>
            </div>
          </div>
        </nav>
</div>


        <Jumbotron>
          <h1 className="display-4">Bakery Link</h1>
          <h2 className="lead">Making Bakery Orders A Piece Of Cake!</h2>
        </Jumbotron>

        <Footer></Footer>
      </div>


    );
  }
}


export default Home;
