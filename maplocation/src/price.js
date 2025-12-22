import PageNav from "./PageNav";
import styles from "./modules/Product.module.css"
function Price() {
    return (
      <main className={styles.product}>
        <PageNav/>
        <section>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
   Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Vitae vel
 labore mollitia iusto. Recusandae quos <br/> provident, laboriosam fugit
            voluptatem iste.
          </p>
        </section>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </main>
    );
}

export default Price
