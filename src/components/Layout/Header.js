import mealsImage from "../../assets/meals.jpg";
import classes from './Header.module.css'
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button></button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Table full of food" />
      </div>
    </>
  );
};

export default Header;
