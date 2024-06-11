import React from 'react';
import Plan from '../components/plan'
import { Container, Row, Col } from 'react-bootstrap';
import ButtonOne from '../components/buttonOne';

import '../App.css'
function ConfirmTwo() {

    return (
        
            <Container>
                <div className="text-size-medium text-center m-3">
                    <strong>إليك خطط الاشتراك لتوفير تسليم الشحنات بنسبة 100 %</strong>
                </div>
                <Row className="justify-content-center my-4">
                    <Col md={4} className='low'>
                        <Plan 
                            title="الخطة الشهرية" 
                            price="سعر الإشتراك 15 ريال/ شهر"
                            benefits={[
                                "توصيل الشحنات بنسبة 100٪ في الوقت المحدد.",
                                "تحديد مواعيد التسليم المرنة حسب احتياجاتك.",
                                "تتبع الشحنات بالوقت الحقيقي.",
                                "دعم العملاء على مدار الساعة."
                            ]}
                        />
                    </Col>
                    <Col md={4}>
                        <Plan 
                            title="الخطة النصف سنوية" 
                            price="سعر الإشتراك 35 ريال/ 6 شهر"
                            benefits={[
                                "جميع ميزات الخطة الشهرية.",
                                "خصم يصل إلى 10٪ عند الدفع مقدماً لنصف السنة.",
                                "توفير المزيد من الاستقرار والثبات في الخدمة."
                            ]}
                        />
                    </Col>
                    <Col md={4} className='low'>
                        <Plan 
                            title="الخطة السنوية" 
                            price="سعر الإشتراك 60 ريال/ سنة"
                            benefits={[
                                "جميع ميزات الخطط الشهرية والنصف سنوية.",
                                "خصم يصل إلى 20٪ عند الدفع مقدماً للسنة كاملة.",
                                "ضمان استمرارية الخدمة على مدار السنة دون انقطاع."
                            ]}
                        />
                    </Col>
                </Row>
                <div className="text-size-medium text-center m-4">
                    <strong className="m-3">لا تفوت فرصة الاشتراك وتحسين تجربة تسليم الشحنات الخاصة بك !</strong>
                    <br/>
                    <br/>
                    <ButtonOne content="استكمال التسجيل" />
                </div>
            </Container>
    );
  }


  export default ConfirmTwo;
  


// CONCATENATED MODULE: ./src/pages/ConfirmTwo.js