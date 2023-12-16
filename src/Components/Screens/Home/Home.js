import Banner from "./Banner";
import NewsBox from "./NewsBox";
import imageComputer from "../../../assets/Images/imageComputer.png";
import imageSearch from "../../../assets/Images/imageSearch.png";

const posts = [
  {
    id: 1,
    title: "Web & Mobile App Development",
    info: "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagementmethods to respond to different intents shown by your potentialcustomers who interact with your business online.",
    image: imageComputer,
  },
  {
    id: 2,
    title: "Digital Strategy Consulting",
    info: "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.",
    image: imageSearch,
  },
];

const Home = () => {
  return (
    <div>
      <Banner />
      {posts.map((post) => (
        <NewsBox post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Home;
