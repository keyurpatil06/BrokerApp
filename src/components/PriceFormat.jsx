import React from 'react'

const PriceFormat = ({price}) => {
  return new Intl.NumberFormat('en-IN').format(price)
}

export default PriceFormat
