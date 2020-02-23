import React from 'react';
import axios from 'axios';

import Search from './components/Search';
import ImageList from './components/ImageList';
import './App.css';

class App extends React.Component {

  state = {
    images : []
  }

  async getImages(term){
    var response = await axios.get('https://api.unsplash.com/search/photos',{
      params: {query:term},
      headers:{
        Authorization: 'Client-ID 8b942875bb23cc582467c0e5711cd8769d6c51114d461259f7ac2d072058fb96'
      }
    });

    this.setState({
      images : response.data.results
    });
  }

  onEnter = (term) => {
    this.getImages(term);
  }

  render (){
    return (
      <div className="App">
          <Search onEnter={this.onEnter}/>
          <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
