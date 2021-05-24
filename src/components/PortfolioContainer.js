import React, { Component } from "react";
import About from './About'
import Work from './Work'
import Home from './Home';
import Contact from './Contact';
import NavigationBar from './NavigationBar'


class Portfolio extends Component {



  
    state = {
        currentPage: 'Home'
    };

    handlePageChange = page => {
        this.setState({ currentPage: page })
    }

    renderPage = () => {
      if(this.state.currentPage === 'Home') {
        return <Home />;
      } else if (this.state.currentPage === 'About') {
        return <About />
      } else if (this.state.currentPage === 'Work') {
        return <Work />
      } else if (this.state.currentPage === 'Contact') {
        return <Contact />
      }
    }

  render(props) {
    return (
      <div className="container">
          <NavigationBar currentPage={this.state.currentPage} handlePageChange=
          {this.handlePageChange}/>
          {this.renderPage()}
         
      </div>
    );
  }
}

export default Portfolio;
