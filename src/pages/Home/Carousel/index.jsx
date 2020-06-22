import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import NextArrow from "./components/NextArrow";
import PrevArrow from "./components/PrevArrow";
import CardCarousel from "./components/CardCarousel";
import { FaUsers } from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./index.css";
import TitleCarousel from "./components/TitleCarousel";

export default () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    rtl: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: 2500,

    appendDots: (dots) => {
      return <ul style={{ position: "absolute", top: "120%" }}>{dots}</ul>;
    },
    beforeChange: (prev, next) => {
      setCurrentSlideIndex(
        Math.floor(slides.length % 2 === 0 ? next / 2 : next / 3)
      );
    },
    customPaging: (pagi, i) => {
      const style = {
        width: 13,
        height: 13,
        display: "inline-block",
        border: "2px solid #fff",
        borderRadius: 4,
        backgroundColor: "transparent",
      };

      const activeStyle = {
        width: 13,
        height: 13,
        display: "inline-block",
        backgroundColor: "#fff",
        border: 0,
        borderRadius: 4,
      };
      return (
        <span
          className="slick-dot"
          style={pagi === currentSlideIndex ? activeStyle : style}
        />
      );
    },
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          beforeChange: (prev, next) => {
            setCurrentSlideIndex(Math.floor(next / 2));
          },
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          beforeChange: (prev, next) => {
            setCurrentSlideIndex(Math.floor(next));
          },
        },
      },
    ],
  };

  const slides = [
    {
      id: "1",
      title: "گروه جهادی فاطمه الزهرا",
      desc: "تعداد نیازمندان: 350 نفر",
      img: "https://picsum.photos/id/1/200/300",
    },
    {
      id: "2",
      title: "گروه جهادی مسجد امام حسن",
      desc: "تعداد نیازمندان: 350 نفر",
      img: "https://picsum.photos/id/223/200/300",
    },
    {
      id: "3",
      title: "گروه جهادی مسجد امام علی ",
      desc: "تعداد نیازمندان: 350 نفر",
      img: "https://picsum.photos/id/39/200/300",
    },
    {
      id: "4",
      title: "گروه جهادی ادارات کل کشور",
      desc: "تعداد نیازمندان: 350 نفر",
      img: "https://picsum.photos/id/33/200/300",
    },
    {
      id: "5",
      title: " گروه جهادی فاطمیون ",
      desc: "تعداد نیازمندان: 350 نفر",
      img: "https://picsum.photos/id/25/200/300",
    },
    {
      id: "6",
      title: "گروه جهادی مالک اشتر",
      desc: "تعداد نیازمندان: 350 نفر",
      img: "https://picsum.photos/id/55/200/300",
    },
  ];

  const sliders = slides.map((item, index) => {
    return (
      <CardCarousel
        key={index}
        title={item.title}
        src={item.img}
        alt={"image-" + index}
        desc={item.desc}
      />
    );
  });

  return (
    <section className="my-5">
      <TitleCarousel name={"تمام گروه های جهادی"} icon={FaUsers} />
      <div className="craouselBackground paddingTopCarousel">
        <div className="container">
          <Slider {...settings}>{sliders}</Slider>
        </div>
      </div>
    </section>
  );
};
