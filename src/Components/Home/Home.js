import video from "../../assets/video-homepage.mp4";
const Home = (props) => {
  return (
    <>
      <div
        className="home-container"
        style={{
          // Để video luôn phủ toàn màn hình
          top: 0,
          left: 0,
          position: "absolute",
          width: "100vw",
          height: "100vh",
          overflow: "hidden", // Ngăn tràn nội dung
        }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Giúp video phủ kín màn hình mà không méo
          }}
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="homepage-content">
          <div className="title-1">Get to know your customers with forms</div>
          <div className="title-2">
            Collect all the data you need to understand customers with forms
            designed to be refreshingly different.
          </div>
          <div className="title-3">
            <button>Get strated -its free</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
