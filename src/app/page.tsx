import FeaturedWorks from "./layouts/featured-works";
import Header from "./layouts/header";
import Nav from "./layouts/nav-bar";
import Timeline from "./layouts/timeline";

export default function Home() {
  return (
    <div id="about">
      <div className="absolute top-0 right-0 w-full h-screen overflow-x-hidden -z-10">
          <svg viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -right-60 -top-50 h-150 sm:-right-70 sm:-top-70 sm:h-200 sm:w-200 -z-5"
          >
            <path fill="#FF0066"
              stroke="#ff0066ff"
              strokeWidth={1}
              d="M47.9,-63C61.4,-56.1,71.3,-41.2,74.4,-25.6C77.5,-10,73.7,6.4,64.1,16.1C54.5,25.9,39,29.1,27.3,36.6C15.7,44.1,7.8,55.8,-4.8,62.4C-17.4,69,-34.9,70.5,-41.2,61.3C-47.5,52.1,-42.6,32.2,-48.7,15.3C-54.9,-1.5,-72,-15.2,-73.3,-27.8C-74.7,-40.3,-60.2,-51.6,-45.4,-58.1C-30.5,-64.6,-15.3,-66.2,1,-67.6C17.2,-68.9,34.4,-69.9,47.9,-63Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <Nav />
        <br />
        <Header />
        <FeaturedWorks/>
        <Timeline/>
    </div>
  );

}
