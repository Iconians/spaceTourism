import { Navbar } from "../../components/Navbar/Navbar";

export const Home = () => {
  return (
    <section className="bg-homeDesktop bg-cover h-[100vh] text-white">
      <Navbar />
      <div className="flex justify-around content-center">
        <div className="h-[450px] w-[400px]">
          <div>
            <p>So, you want to travel to</p>
            <h1>Space</h1>
          </div>
          <div>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div>
          <button>Explore</button>
        </div>
      </div>
    </section>
  );
};
