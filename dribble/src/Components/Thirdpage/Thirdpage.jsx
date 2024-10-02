import React from "react";
import flame from "../images/flame.png";
import toy from "../images/toy.png";
import tyler from "../images/tyler.jpg";
import slavisa from "../images/slavisa.png";
import dalius from "../images/dalius.png";
import man from "../images/man.png";
import gert from "../images/gert.png";
import verse from "../images/verse.jpg";
import { IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";
import { PiEyeFill } from "react-icons/pi";
import "./Thirdpage.css";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.jpg";
import icon3 from "../images/icon3.jpg";
import icon4 from "../images/icon4.png";

function Thirdpage() {
  const container = [
    {
      image: flame,
      icon: icon1,
      label: "framer",
      link: <Link className="link1">PRO</Link>,
      love: <IoMdHeart className="heart" />,
      number: "93",
      eyefill: <PiEyeFill />,
      views: "125.7k",
    },

    {
      image: toy,
      icon: icon2,
      label: "Davi",
      link: <Link className="link1">PRO</Link>,
      love: <IoMdHeart className="heart" />,
      number: "34",
      eyefill: <PiEyeFill />,
      views: "5.7k",
    },

    {
      image: tyler,
      icon: icon3,
      label: "Tyler",
      link: <Link className="link1">PRO</Link>,
      love: <IoMdHeart className="heart" />,
      number: "268",
      eyefill: <PiEyeFill />,
      views: "2.3k",
    },

    {
      image: slavisa,
      icon: icon4,
      label: "visa",
      link: <Link className="link1">PRO</Link>,
      love: <IoMdHeart className="heart" />,
      number: "518",
      eyefill: <PiEyeFill />,
      views: "16.2k",
    },
  ];
  return (
    <div className="pictureContainer">
      {container.map((holder) => (
        <div>
          <img src={holder.image} alt="" className="image" />

          <div className="firstlabel">
            <img src={holder.icon} alt="" className="subimage" />
            <p className="firstpara">{holder.label}</p>
            <p className="sublink">{holder.link}</p>
            {holder.love}
            <p className="number">{holder.number}</p>
            {holder.eyefill}
            <p className="number">{holder.views}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Thirdpage;
