import React from 'react';

class ImageCard extends React.Component{

    render(){
        const {image} = this.props;
        return <li><img alt={image.description} src={image.urls.thumb}/></li>
    }
}

export default ImageCard;