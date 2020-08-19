//1.componentes como clases
//2.componentes cmo funciones
//2.1 Stateless -> sin estado
//2.2 statefull ->componente con estado
import React from 'react';
import Header from '../components/Header';
import MainPricing from '../components/MainPricing';
import Footer from '../components/Footer';

class PricingPage extends React.Component{
 render(){
     return (
         <React.Fragment>
         <Header 
         companyName = "Geek Pricing App"
         navBarContent = {
             [
                 {
                     elementName:"facebook",
                     url: "https://facebook.com"
                 },
                 {
                    elementName:"twitter",
                    url: "https://twitter.com"
                },
                {
                    elementName:"Lindkein",
                    url: "https://Linkdein.com"
                },
                {
                    elementName:"instagram",
                    url: "https://instagram.com"
                },
             ]
         }
         />
         <MainPricing />
         <Footer />
         </React.Fragment>
     );
 }
}

export default PricingPage;