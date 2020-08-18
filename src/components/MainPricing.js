import React from 'react';
import PricingDescription from './PricingDescription';
import PricingContainer from './PricingContainer';

const MainPricing = () => (
    <>
        <PricingDescription
            title = "Geek Pricing"
            quoteOne = "Quickly build an effective pricing" 
            quoteTwo ="table for your potential customers with this" 
            quoteThree = "Bootstrap example. It’s built with default"
            quoteFour ="Bootstrap components and utilities with little customization."
        />
        <PricingContainer />
    </>
);

export default MainPricing;