import React from 'react';

class Search extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            searchTerm : '',
        }
    }

    onInputKeyDown = (event) => {
      if(event.keyCode === 13)
        this.props.onEnter(this.state.searchTerm);
    }

    onInputChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    }

    render(){
        return (
            <div className="flex-container">
<input type='text' value={this.state.searchTerm} onChange={this.onInputChange} onKeyDown={this.onInputKeyDown} placeholder='Search term...'></input>
            </div>
            
        );
    }
  
}

export default Search;