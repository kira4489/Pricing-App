import React from 'react'

const PricingDetail = (props) => (
<div className='card mb-4 shadow-sm'>
          <div className='card-header'>
<h4 className='my-0 font-weight-normal'>{props.plan}</h4>
          </div>
          <div className='card-body'>
            <h1 className='card-title pricing-card-title'>
              {props.precio} <small className='text-muted'>/ mo</small>
            </h1>
            <ul className='list-unstyled mt-3 mb-4'>
                {props.items.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
            <button
              type='button'
              className='btn btn-lg btn-block btn-outline-primary'
            >
             {props.textoButton}
            </button>
          </div>
        </div>
);

export default PricingDetail;