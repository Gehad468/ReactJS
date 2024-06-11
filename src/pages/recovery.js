import React from 'react';
// import "../Recovery.css"

const Terms = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">سياسة إلغاء واسترجاع المبلغ</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-4  p-5" style={{backgroundColor: '#FAFAFA' }}>
          <h3>1. الإلغاء والاسترجاع:</h3>
          <ul className="dashed-list">
            <li>يحق للعميل إلغاء الخدمة وطلب استرجاع المبلغ خلال مدة لا تتجاوز 15 يومًا من تاريخ الاشتراك.</li>
            <li>يتم استرداد المبلغ بالكامل دون أي رسوم إضافية.</li>
          </ul>
       
        <div className="col-12 mb-4">
          <h3>2. الإلغاء بعد مضي 15 يومًا:</h3>
          <ul className="dashed-list">
            <li>بعد مضي فترة الاسترجاع المسموح بها (15 يومًا)، يتم قبول طلبات الإلغاء ولكن بدون استرجاع المبلغ.</li>
          </ul>
        </div>
        <div className="col-12 mb-4">
          <h3>3. طلب الإلغاء:</h3>
          <ul className="dashed-list">
            <li>يجب على العميل تقديم طلب إلغاء الخدمة عبر التطبيق وفي المدة المحددة (15 يومًا).</li>
            <li>يجب تقديم الطلب بوضوح مع ذكر السبب لإلغاء الخدمة.</li>
          </ul>
        </div>
        <div className="col-12 mb-4">
          <h3>4. استرداد المبلغ:</h3>
          <ul className="dashed-list">
            <li>يتم استرداد المبلغ إلى طريقة الدفع الأصلية التي استخدمتها في عملية الدفع.</li>
          </ul>
        </div>
        <div className="col-12 mb-4">
          <h3>5. الوقت المستغرق للاسترداد:</h3>
          <ul className="dashed-list">
            <li>قد يستغرق عملية استرداد المبلغ ما بين 7 إلى 14 يوم عمل حسب سياسة الدفع للبنك أو وسيلة الدفع.</li>
          </ul>
        </div>
        <div className="col-12 mb-4">
          <h3>6. استثناءات:</h3>
          <ul className="dashed-list">
            <li>لا يحق للعميل طلب استرداد المبلغ في حال استخدام أي خدمة أو ميزة تم توفيرها خلال فترة الاشتراك.</li>
          </ul>
        </div>
        <div className="col-12 mb-4">
          <h3>7. تغيير سياسة الاسترجاع:</h3>
          <ul className="dashed-list">
            <li>نحتفظ بالحق في تغيير سياسة الاسترجاع والاستبدال في أي وقت دون إشعار مسبق.</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Terms;
