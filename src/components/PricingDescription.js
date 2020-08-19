import React, { Component } from 'react'

class PricingDescription extends Component{
 constructor (props){
     super(props);
     this.state ={

     }
}

render(){
        const {title,quoteOne,quoteTwo,quoteThree,quoteFour
        }= this.props;
        return (
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 className="display-4">{title}</h1>
        <p className="lead">
            {quoteOne}
            {quoteTwo}
            {quoteThree}
            {quoteFour}
            </p>
          </div>
            
        )
    }
}
export default PricingDescription;