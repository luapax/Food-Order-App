import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Margarita',
        description: 'Finest classic pizza',
        price: 12.99,
    },
    {
        id: 'm2',
        name: 'Hawaii',
        description: 'Love it or hate it!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Pizza',
        description: 'American, raw, meaty',
        price: 18.99,
    },
    {
        id: 'm4',
        name: 'Veggy Pizza',
        description: 'Healthy...and green...',
        price: 16.99,
    },
];




const AvailableMeals = () => {

    const mealList = DUMMY_MEALS.map(meal => {
        return <li>{meal.name}</li>
    })


    return (
        <section className={classes.meals}>
            <ul>
                {mealList}
            </ul>
        </section>
    )
};

export default AvailableMeals;