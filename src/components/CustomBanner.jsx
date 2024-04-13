import React, { useEffect, useState } from "react";
import bannerone from "../assets/img/bannerone.png";
import Button from "./smallComponents/Button";
import bannertwo from "../assets/img/bannertwo.png";
import bannerthree from "../assets/img/bannerthree.png";
const Custombanners = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-05-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value) => {
    if (value < 10) {
      return "0" + value;
    }
    return value;
  };

  const bannerMap = [
    {
      subtitle: "Best Deals",
      title: "Sale of the Month",
      getArrayTimes: () => {
        const timeLeft = calculateTimeLeft();
        return [
          {
            title: "Days",
            value: addLeadingZero(timeLeft.days),
          },
          {
            title: "Hours",
            value: addLeadingZero(timeLeft.hours),
          },
          {
            title: "Min",
            value: addLeadingZero(timeLeft.minutes),
          },
          {
            title: "Secs",
            value: addLeadingZero(timeLeft.seconds),
          },
        ];
      },

      image: bannerone,
      textWhite: true,
    },
    {
      subtitle: "85% Fat Free",
      title: "Low-Fat Meat",
      image: bannertwo,
      tagline: "Started at",
      price: "$70.99",
      textWhite: true,
    },
    {
      subtitle: "Summer Sale",
      title: "100% Fresh Fruit",
      image: bannerthree,
      tagline: "Up to",
      offer: "64% OFF",
      textWhite: false,
    },
  ];

  return (
    <div className="mt-9 grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 sm:justify-center lg:grid-cols-2 xl:grid-cols-3  gap-10 container  mx-auto">
      {bannerMap.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="  w-[424px] lg:w-[424px] md:w-[350px] h-[536px]"
          >
            <div className="innerbanner flex flex-col items-center gap-4 mt-9 text-white">
              <p
                className={`uppercase text-sm font-medium ${
                  item.textWhite ? "text-white" : "text-black"
                }`}
              >
                {item.subtitle}
              </p>
              <h3
                className={`text-4xl font-semibold ${
                  item.textWhite ? "text-white" : "text-black"
                }`}
              >
                {" "}
                {item.title}
              </h3>

              {typeof item.getArrayTimes === "function" &&
              item.getArrayTimes() &&
              item.getArrayTimes().length > 0 ? (
                <div className="timer flex justify-between items-start gap-5">
                  {item.getArrayTimes().map((timeItem, index) => (
                    <div className="flex gap-3" key={index}>
                      <div className="days flex flex-col">
                        <span className="days-number text-2xl font-normal ">
                          {timeItem.value}
                        </span>
                        <span className="days-text text-xs font-[200]">
                          {timeItem.title}
                        </span>
                      </div>
                      {index < 3 && <div className="middle">:</div>}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex gap-3 items-center">
                  <p
                    className={` text-lg font-normal ${
                      item.textWhite ? "text-white" : "text-black"
                    } `}
                  >
                    {item.tagline}
                  </p>
                  {item.offer && (
                    <div
                      className={`${
                        item.textWhite ? "text-white" : "text-[#FCC900]"
                      } bg-[#1A1A1A] rounded-md w-[100px] h-[39px] text-lg flex items-center justify-center`}
                    >
                      <p>{item.offer}</p>
                    </div>
                  )}
                </div>
              )}
              <Button className={"mt-8"} title="Shop Now" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Custombanners;
