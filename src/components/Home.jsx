import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Exercise Categories</h2>
        <p>Explore different types of exercises to stay active and healthy.</p>
        <section>
          <h3>Aerobic Exercises</h3>
          <p>
            Aerobic exercises involve rhythmic and repetitive movements that
            boost cardiovascular health, endurance, and mood.
          </p>
        </section>
        <section>
          <h3>Strenght Training</h3>
          <p>
            Strength training exercises help build muscle, improve posture, and
            enhance overall strength and balance.
          </p>
        </section>
        <section>
          <h3>Flexibility Exercises</h3>
          <p>
            Flexibility exercises improve muscle elasticity, joint range of
            motion, and reduce stiffness.
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
