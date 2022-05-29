import classes from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Alabalık',
    description: 'Taze balık ve yeşillikler',
    price: 82.99,
  },
  {
    id: 'm2',
    name: 'Şinitzel',
    description: 'Tavuk spesiyali',
    price: 76.5,
  },
  {
    id: 'm3',
    name: 'Mangal Burger',
    description: 'Malgal tadında köfte burger',
    price: 62.99,
  },
  {
    id: 'm4',
    name: 'Sezar Salatası',
    description: 'Sağlıklı ve lezzetli',
    price: 65.99,
  },
]

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) =>
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}/>
  )

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
