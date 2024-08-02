import Slider from "./components/Slider";
import "./App.css";

function SliderFinish() {
  const sliderContent = [
    {
      id: 0,
      img: "https://images.fineartamerica.com/images-medium-large-5/beach-runner-robin-odonnell.jpg",
      title: "Enjoying the Beach",
    },
    {
      id: 1,
      img: "https://www.wbcsd.org/wp-content/uploads/2023/10/Accelerating-business-along-the-road-to-a-nature-positive-future_i1140.jpg",
      title: "Exploring Nature",
    },
    {
      id: 2,
      img: "https://cdn.vox-cdn.com/thumbor/nXsM87Y-VlJH1SZvDbsukEBbbEw=/0x0:7360x4912/1200x800/filters:focal(3092x1868:4268x3044)/cdn.vox-cdn.com/uploads/chorus_image/image/65313883/shutterstock_1432933382.0.jpg",
      title: "City Life",
    },
    {
      id: 3,
      img: "https://www.parents.com/thmb/kHQxRYPCjJ7JJJnt4LG5llyyltA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Dunlap-Family_Fall_HA_Williamsburg-VA_November-2018_TheVacationChannel_CWF-188-0e6a797c45a14bc4aa5047428300d76a.jpg",
      title: "Family Moments",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?cs=srgb&dl=pexels-stefanstefancik-91224.jpg&fm=jpg",
      title: "Adventures",
    },
    {
      id: 5,
      img: "https://i0.wp.com/wearerestless.org/wp-content/uploads/2021/02/Reading-scaled.jpg?resize=1155%2C770&ssl=1",
      title: "Simple Pleasures",
    },
  ];

  return (
    <>
      <div className="sliderWpapper">
        <Slider sliderContent={sliderContent} />
      </div>
    </>
  );
}

export default SliderFinish;
