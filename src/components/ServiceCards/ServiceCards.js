import React from 'react'
import Card from './Card'
import img1 from '../../images/cards/1.jpeg'
import img2 from '../../images/cards/2.jpeg'
import img3 from '../../images/cards/3.jpeg'
import img4 from '../../images/cards/4.jpeg'
import img5 from '../../images/cards/5.jpeg'
import img6 from '../../images/cards/6.jpeg'

const ServiceCards = () => (
  <div className="row">
    <Card header="обслуживание" to="service" image={img1} />
    <Card header="труднодоступное" to="hard" image={img2} />
    <Card header="витражное" to="vitrail" image={img3} />
    <Card header="внутреннее" to="inside" image={img4} />
    <Card header="внешнее" to="outside" image={img5} />
    <Card header="кровельное" to="roof" image={img6} />
  </div>
)

export default ServiceCards
