import PageNav from "../PageNav";
import styles from "../modules/HomePage.module.css"
function HomePage() {
    return (
      <div className={styles.Home}>
        <main>
          <PageNav />
          <section>
            <h1>
              You travel the world.
              <br />
              WorldWise keeps track of your adventures.
            </h1>
            <h2>
              A world map that tracks your footsteps into every city you can
              think of. Never forget your wonderful experiences, and show your
              friends how you have wandered the world.
            </h2>
            <button>START TRACKING NOW</button>
          </section>
        </main>
      </div>
    );
}

export default HomePage
