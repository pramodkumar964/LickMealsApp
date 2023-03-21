import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealsItem from './MealsItem/MealsItem';
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Chicken Biryani Single',
        description: 'Serves With One Piece of Chicken, Mirchi Ka Salan,Dahi Ka Chutney',
        price: '130'
    },
    {
        id: 'm2',
        name: 'Chicken Biryani Full',
        description: 'Serves With two Piece of Chicken, Mirchi Ka Salan,Dahi Ka Chutney',
        price: '230'
    },
    {
        id: 'm3',
        name: 'Chicken Biryani Family',
        description: 'Serves With One Piece of Chicken, Mirchi Ka Salan,Dahi Ka Chutney',
        price: '500'
    },
    {
        id: 'm4',
        name: 'Chicken Biryani Jumbo',
        description: 'Serves With One Piece of Chicken, Mirchi Ka Salan,Dahi Ka Chutney',
        price: '700'
    },
    {
        id: 'm5',
        name: 'Chicken Biryani Single',
        description: 'Serves With One Piece of Chicken, Mirchi Ka Salan,Dahi Ka Chutney',
        price: '130'
    },


];

const AvailableMeals = () => {

    const mealList = DUMMY_MEALS.map(meals =>
         <MealsItem 
         key={meals.id}
         id={meals.id}
          name={meals.name} 
          description={meals.description} 
          price={meals.price}
           />)

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;