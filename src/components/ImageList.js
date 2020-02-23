import React from 'react';
import '../App.css';
import ImageCard from './ImageCard';

class ImageList extends React.Component {

  render(){
    const {images} =this.props;
    return (
      <ul className="image-list">
      {images.map((image)=>{
       return <ImageCard image={image} />
      })}
    </ul>
  );
  }

};

export default ImageList;