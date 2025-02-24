import video from "../../assets/video-homepage.mp4";
const Home = (props) => {
  return (
    <>
      <div
        className="home-container"
        style={{
          position: "absolute", // Để video luôn phủ toàn màn hình
          top: 0,
          left: 0,
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
      </div>
    </>
  );
};
export default Home;
