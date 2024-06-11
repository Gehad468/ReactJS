import React from 'react';

const AboutUs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">من نحن؟</h1>
        </div>
      </div>
    
      <div className="row">
        <div className="col-12">
          <div className="content p-5" style={{backgroundColor: '#FAFAFA' }}>
            
            <h3> <strong>.</strong> من نحن؟ </h3>
            <p>
              نحن نقدم تطبيق جدولة تسليم الشحنات، وهو تطبيق يهدف إلى تسهيل عملية تسليم الشحنات بطريقة مريحة وفعالة للعملاء والمندوبين على حد سواء.
            </p>
            <h3><strong>.</strong> رسالتنا:</h3>
            <p >
              تهدف رسالتنا إلى تحسين تجربة تسليم الشحنات لعملائنا وتوفير الوقت والجهد للمندوبين من خلال تقديم خدمة توصيل دقيقة وموثوقة بنسبة 100٪.
            </p>
            <h3> <strong>.</strong> ماذا نقدم؟ </h3>
            <ul className="dashed-list">
              <li>جدولة تسليم دقيقة: نوفر خدمة جدولة تسليم تساعد العملاء في تحديد وقت تسليم مريح ومناسب لهم.</li>
              <li>تتبع الشحنات: يمكن للعملاء تتبع الشحنات بسهولة ومتابعة حالتها على مدار الساعة.</li>
              <li>خدمة عملاء ممتازة: نوفر دعمًا فنيًا وخدمة عملاء على مدار الساعة للرد على جميع استفسارات واحتياجات العملاء.</li>
            </ul>
            <h3> <strong>.</strong> لماذا نحن؟ </h3>
            <p>
              نحن نفخر بتقديم خدمة تسليم شحنات بنسبة 100٪ في الوقت المحدد وبأسعار منافسة. نحن نولي اهتمامًا كبيرًا بتجربة عملائنا ونسعى جاهدين لتحسينها باستمرار.
            </p>
            <h3> <strong>.</strong> فلسفتنا: </h3>
            <p >
              تقوم فلسفتنا على الجودة والموثوقية والكفاءة. نحن نؤمن بأهمية تقديم خدمة عالية الجودة تلبي توقعات واحتياجات عملائنا.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
