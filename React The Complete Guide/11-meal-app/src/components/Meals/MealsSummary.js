import classes from './MealsSummary.module.css';

const MealsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Lezzetli Yemek, Hızlı Teslimat</h2>
      <p>
        Menümüzden favori yemeğinizi seçin, lezzetin tadını çıkarın.
      </p>
      <p>
        Tüm yemekler kaliteli malzemelerden uzman aşçılar tarafından hazırlanmaktadır.
      </p>
    </section>
  );
}

export default MealsSummary;
