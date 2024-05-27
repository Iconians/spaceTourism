import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";

export const Home = () => {
  // home components
  return (
    <section className="bg-homeDesktop bg-right bg-cover h-[100vh] w-[1200px] text-white">
      <Navbar />
      <div className="flex justify-around content-center mt-[250px]">
        <div className="h-[450px] w-[400px]">
          <div>
            <p className={`text-[28px] ${styles.firstPTag}`}>
              So, you want to travel to
            </p>
            <h1 className={`text-[150px] mb-6 mt-2 ${styles.h1fontFamily}`}>
              Space
            </h1>
            <p className={`text-[18px] ${styles.secondPTag}`}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className="my-auto w-[300px] h-[300px]">
          <button
            className={`p-[100px] bg-white text-black rounded-full text-[32px] h-[300px] ${styles.exploreButton}`}
          >
            Explore
          </button>
        </div>
        <div></div>
      </div>
    </section>
  );
};
