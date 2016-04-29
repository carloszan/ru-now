import React from 'react'
import Meal from './Meal'
import MealList from './MealList'
import Meat from './Meat'
import Stars from './Stars'
import Tabs from './Tabs'

const MealLayout = ({isLogged, userData, time }) =>  {
    return (
      <div>
        <Meal />
        <MealList />
        <Meat />
        <Stars />
        <Tabs />
      </div>
    )
}

export default MealLayout
