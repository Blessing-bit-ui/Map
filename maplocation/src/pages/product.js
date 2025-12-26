//import styles from "./modules/Product.module.css";
import styles from "../modules/Product.module.css";
import PageNav from "../PageNav";
function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <h2>About WorldWide.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Illo
          est dicta illum vero culpa cum quaerat architecto <br /> sapiente eius
          non soluta, molestiae nihil laborum, placeat <br /> debitis,
          laboriosam at fuga perspiciatis?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Corporis doloribus libero sunt expedita ratione iusto, <br />
          magni, id sapiente sequi officiis et.
        </p>
      </section>
      <img
        src="img-1.jpg"
        alt="person with dog overlooking mountain with sunset"
      />
    </main>
  );
}

export default Product;
