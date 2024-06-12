import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ButtonOne from '../components/buttonOne';
import Gome1 from "../assets/home.png";
import phone from "../assets/home2.jpeg";
import logo from "../assets/logo.png";
const Home = () => {
  return (
    <>
    <div className="my-5">
      <div className="container mb-5 my-5">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="text-dark-green mb-5 text-size-large">تطبيق وصول</h2>
            <p className="text-gradient text-size-medium">
              هو تطبيق يهدف إلى تسهيل عملية تسليم الشحنات بطريقة مريحة وفعالة
              للعملاء والمندوبين على حد سواء.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={Gome1} className="img-fluid" alt="Image" />
            {/* <img src={phone} className="img-fluid" alt="phone"  /> */}

          </div>
        </div>
      </div>
      <hr className="col-6 mx-auto" />

      <div className="container my-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <img src={phone} className="img-fluid" alt="Image" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <p className="text-center text-gradient text-size-medium">
            عزيزي المندوب الآن بكل سهولة يمكنك تنظيم رحلاتك واختصار المزيد من الوقت
            </p>
            <p className="text-center mb-5  text-gradient text-size-medium">
              سجل الآن واحصل على تطبيق وصول
            </p>
            <ButtonOne content='سجل الان'/>
          </div>
        </div>
      </div>

      <div className="mb-5 my-5" style={{ background: "#135D66" }}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 text-white">
            <p className="text-center text-size-medium">
  <span className="d-block">
    نحن نفخر بتقديم خدمة تسليم شحنات بنسبة 100٪ في الوقت المحدد
    وبأسعار منافسة. نحن نولي اهتمامًا كبيرًا بتجربة عملائنا ونسعى
    جاهدين لتحسينها باستمرار.
  </span>
</p>

            </div>
            <div className="col-lg-6">
              <img
                src={logo}
                className="img-fluid"
                alt="Image"
                style={{ width: "799px", height: "548px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
      <ButtonOne content='متجر وصول'/>
        <p className="text-center mt-5 mb-5 text-gradient text-size-medium">
          من خلال المتجر يمكنك الحصول على صندوق استلام الطرود لاستلام شحناتك بكل
          يسر و سهولة ، في وصول هدفنا هو تطوير عملية استلام و تسليم الشحنات داخل
          السعودية و نتطلع ان تكون الصناديق الخاصة بوصول موجودة في جميع المنازل
          داخل السعودية.
        </p>
        <h2 className="text-center text-6xl font-weight-bold mb-5 mt-5 text-dark-green text-size-large">
          انضم الينا عن طريق تليجرام 
        </h2>
        <h2 className="text-center text-6xl font-weight-bold mb-5 mt-5 text-gradient text-size-large">
          خدماتنا المميزة
        </h2>
        <Row xs={1} md={3} className="g-4 justify-content-center mt-5">
          <Col className="d-flex justify-content-center">
            <Card style={{background: "linear-gradient(to bottom, #135D66 0%, #22A6B6 100%)",width: "341px", height: "256px"}}>
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title className="text-white text-center text-size-medium">جدوله تسليم دقيقه</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card style={{background: "linear-gradient(to bottom, #135D66 0%, #22A6B6 100%)",width: "341px", height: "256px"}}>
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title className="text-white text-center text-size-medium">خدمه عملاء ممتازه</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card style={{background: "linear-gradient(to bottom, #135D66 0%, #22A6B6 100%)",width: "341px", height: "256px"}}>
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title className="text-white text-center text-size-medium">تتبع الشحنات</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      </div>
    </>
  );
};

export default Home;
