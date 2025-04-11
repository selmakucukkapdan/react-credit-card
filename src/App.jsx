import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [cardname, setCardName] = useState("");
  const [cardnumber, setCardNumber] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");

const currentYear = new Date().getFullYear();
const years = Array.from({length:10},(_,index)=> currentYear+index);
  const handleSubmit =(e)=>{
    e.preventDefault();
    alert(`
      Kart Üstündeki İsim:${cardname}
      Kart Numarası:${cardnumber}
      Ay:${expiryMonth}
      Yıl:${expiryYear}
      Güvenlik Kodu:${cvv}
      `)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Ödeme Bilgileri</h2>
        <p className="text">Kredi kartı bilgilerinizi giriniz.</p>
        <label htmlFor="cardName" className="cardname">
          Kart Üzerindeki İsim
          <input className="cardInput" type="text" placeholder="Selma Küçükkapdan" onChange={(e) => setCardName(e.target.value)} />
        </label>
        <label htmlFor="cardNumber" className="card">
          Kart Numarası
          <input type="text" className="cardnumber" placeholder="0000 0000 0000 0000" onChange={(e)=>setCardNumber(e.target.value)}/>
        </label>
        <div className="row">
        <label htmlFor="mount" className="mount">
          Ay
          <select value={expiryMonth}
          onChange={(e)=>setExpiryMonth(e.target.value)}>
            {Array.from({length:12},(_,index)=>(
              <option key={index} value={index+1}>{index+1}</option>
            ))};
            </select>
        </label>
        <label htmlFor="year" className="year">
          Yıl
         <select value={expiryYear}
         onChange={(e)=>setExpiryYear(e.target.value)}>
          {years.map((year)=>(
               <option key={year} value={year}>
               {year}
             </option>
          ))}
         </select>
        </label>
        <label htmlFor="cvv" className="cvv">
          Güvenlik Kodu
          <input type="text" placeholder="123" onChange={(e)=>setCvv(e.target.value)} />
        </label>
        </div>
        <button type="submit" className="btn">Şimdi Öde</button>
      </form>
    </div>
  );
};

export default App;
