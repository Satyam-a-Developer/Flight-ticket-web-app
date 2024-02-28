// import './App.css';
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Main() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".box", {
      opacity: 0.1,
      scale: 0.1,
      scrollTrigger: {
        trigger: ".box",
        duration: 1,
      },
    });

    gsap.from(".overlay", {
      opacity: 0.1,
      scale: 0.1,
      scrollTrigger: {
        trigger: ".overlay",
        duration: 3,
      },
    });

    gsap.from(".box2", {
      opacity: 0.1,
      scale: 0.1,
      scrollTrigger: {
        trigger: ".box",
        duration: 1,
      },
    });

    gsap.from(".box3", {
      opacity: 0.1,
      scale: 0.1,
      scrollTrigger: {
        trigger: ".box",
        duration: 1,
      },
    });
  });
  return (
    <>
      <div className="center">
        <div className="hii">
          <h1>
            Book your first
            <div className="private">private jet</div>
          </h1>
          <a href="Link">Click Here ✈️</a>

          <div className="circle">
            <div className="news">
              <h1>Latest News : 🦊</h1>
              <p>
                A millionaire who says flying private is as addictive as cocaine
                is selling his jet after learning how terrible it is for the
                environment
              </p>
            </div>
          </div>
          <div className="p">
            <h1>Some Important Things To know :</h1>
            <p>
              Laborum nulla est cupidatat anim.Cupidatat ex voluptate veniam
              laborum nulla ex voluptate veniam dolore. Incididunt laboris
              officia labore consectetur ipsum eiusmod. Sint veniam eiusmod sit
              eu nulla sit Lorem. Adipisicing fugiat tempor nostrud ullamco
              laborum consectetur laboris laborum. Nulla non eiusmod voluptate
              fugiat sit consequat occaecat officia irure amet dolor cillum.
              Aute sit officia qui et adipisicing tempor. Officia ex tempor eu
              deserunt occaecat dolore minim aliquip nisi reprehenderit cillum
              deserunt commodo cillum. Mollit duis ex officia aliqua aute in
              fugiat mollit ullamco. Nisi consectetur incididunt mollit ex
              officia. Mollit ad sint fugiat esse nisi exercitation eu esse
              consequat. Esse esse enim dolore sint aliqua sunt Lorem et sint
              occaecat adipisicing occaecat.
            </p>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="box">
          <h1>Buy private plane</h1>
        </div>
        <div className="box2">
          <h1>Book a Private Plane</h1>
        </div>
        <div className="box3">
          <h1>World Tour Planner</h1>
        </div>
      </div>
      <div className="overlay">
        <h1>Import Update realease by Us</h1>
      </div>
    </>
  );
}

export default Main;
