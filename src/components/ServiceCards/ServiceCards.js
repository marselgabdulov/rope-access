import React from 'react'
import Card from './Card'

const ServiceCards = () => (
  <div className="row">
    <Card header="обслуживание" to="service" />
    <Card header="труднодоступное" to="hard" />
    <Card header="витражное" to="vitrail" />
    <Card header="внутреннее" to="inside" />
    <Card header="внешнее" to="outside" />
    <Card header="кровельное" to="roof" />
  </div>
)

export default ServiceCards
