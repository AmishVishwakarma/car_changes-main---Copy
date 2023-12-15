import MainImg from "../images/new/8778026.jpg";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Us</h4>
                <h2>Best AI based <br></br>Legal Assistant</h2>
                <p>
                  Best AI based Legal Assistant to help you out any time. We here at Upshot's LegalGeni provide you with number of useful features. These features will help you out at every business related legal needs.
                  We Provide Document Generator and Summarizer. Also we have AI bot Ready to answer questions related to you document. Even we have Top Lawyers whom you can contact at ease. 
                </p>
                <a href="/about">
                  Find Details &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Document Generator</h4>
                    <p>
                      Take your document generation experience to the next level with our
                      top-notch Generator for your business needs.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Document Summarizer</h4>
                    <p>
                      Get to know everything about your document. Just feed it to us and Yayyy! you are ready with the summary.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Easy Legal Support</h4>
                    <p>
                      We have best Lawyer from different to help you out whenever you need on chargable basis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
