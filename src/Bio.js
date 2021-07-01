import React from "react";
import './Bio.css'
export default class Bio extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='bio'>
              <div className='profile-pic'>
                  <img className='profile-img' src={'/'+this.props.name+'.jpg'}></img>
              </div>
              <div className='profile-text'>
                  <div className='full-name'>
                    <p>{this.props.name}</p>
                  </div>
                  <div className='country-container'>
                    <p className='country'>{this.props.country}</p>
                    <img className='country-icon' src={'/'+this.props.country+'.png'}></img>
                  </div>
                  <div className='bio-text'>
                    <p>{this.props.bio}</p>
                  </div>
              </div>
            </div>
          );
    }
    
  }
  