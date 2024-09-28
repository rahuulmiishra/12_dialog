"use client";

import { useEffect, useRef, useState } from "react";
import "./style.css";

function Carousel({ children }) {
  const [current, setCurrent] = useState(0);

  const intervalRef = useRef("");

  useEffect(() => {
    const parent = document.getElementsByClassName("carousel")[0];

    const elems = parent.childNodes;
    elems[0].classList.add("show");
    elems[0].classList.remove("hide");
    start();
  }, []);

  function start() {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => {
        const newIdx = prev === 4 ? 0 : prev + 1;
        const parent = document.getElementsByClassName("carousel")[0];

        const elems = parent.childNodes;
        elems[prev].classList.remove("show");
        elems[prev].classList.add("hide");

        elems[newIdx].classList.add("show");
        elems[newIdx].classList.remove("hide");
        return newIdx;
      });
    }, 3000);
  }

  function handleNext() {
    clearInterval(intervalRef.current);
    const prev = current;
    const newIdx = prev === 4 ? 0 : prev + 1;

    const parent = document.getElementsByClassName("carousel")[0];

    const elems = parent.childNodes;

    elems[prev].classList.remove("show");
    elems[prev].classList.add("hide");

    elems[newIdx].classList.add("show");
    elems[newIdx].classList.remove("hide");

    setCurrent(newIdx);
  }

  function handlePrev() {}

  return (
    <>
      <div className="carousel">{children}</div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
}

export default Carousel;
