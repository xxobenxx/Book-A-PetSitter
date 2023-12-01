import React, { Component } from 'react';
import Faq from 'react-faq-component';
import helpImage from '../images/helpteam.jpg';




const data = {
  

  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "What is the package version",
      content: "v1.0.5"
      },
    {
      title: "How to become a pet sitter? ",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        },
        {
      title: "How to search for a pet sitter? ",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Ut ?"
            },
    {
      title: "Sed ut perspiciatis unde omnis iste natus error? ",
       content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            },             
    {
      title: "Sed ut perspiciatis unde omnis iste natus error? ",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            },
    
    
    
    ]
     
}

export default class App extends Component {
  render() {
    return (
      
      <div className= 'helpwrapper'>
        <img className='helppic' src={helpImage} alt="Help team"  />
        <Faq class Name= 'faq' data={data}/>
        </div>
    )
  }
}