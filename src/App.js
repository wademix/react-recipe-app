import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList'
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';


class App extends Component {
  state = {
    recipes: recipes,
    url: "https://www.food2fork.com/api/search?key=bd1dbab1e6bb7a0b2e5d95005d5d6c4d",
    base_url: "https://www.food2fork.com/api/search?key=bd1dbab1e6bb7a0b2e5d95005d5d6c4d",
    details_id: 35381,
    pageIndex: 1,
    search: "",
    query:"&q=",
    error:""
  };

  // Fetching Data using Async

  async getReciepes() {
    try  {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      if(jsonData.recipes.length === 0) {
        this.setState(()=> {
          return {error:'sorry, but your search did not return any results.'}
        })
      } else {
        this.setState(()=> {
          return {recipes: jsonData.recipes}
        })
      }
      // this.setState ({
      //   recipes : jsonData.recipes
      // })
    }   catch (error) {
      console.log(error);
    }    
  }

  componentDidMount() {
    this.getReciepes();
  }

  displayPage = index => {
    switch (index) {
      default:
        case 1: 
          return <RecipeList recipes= {this.state.recipes} 
          error={this.state.error}
          handleDetails={this.handleDetails} 
          value={this.state.search} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} />
        case 0:
          return <RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex} />
    }
  };

  handleIndex = index => {
    this.setState({
      pageIndex: index
    });
  }

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    },
    ()=> {}
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const{ base_url, query, search} = this.state;
    this.setState( () => {
      return {
        url: `${base_url}${query}${search}`, search:""
      };
    }, ()=> {
      this.getReciepes();
    } 
    );
  };


  render() {
    // console.log(this.state.recipes);
    return (
      <React.Fragment>
        {this.displayPage(this.state.pageIndex)}
      </React.Fragment>
    );
  }

}

export default App;
