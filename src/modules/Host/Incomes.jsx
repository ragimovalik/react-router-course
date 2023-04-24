import incomeGraph from "../../assets/income-graph.png";

import s from "./Incomes.module.css";

const Incomes = () => {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" }
  ];

  return (
    <section className={s["host-income"] && s.box}>
      <h1>Income</h1>
      <p>
        Last <span>30 days</span>
      </p>
      <h2>$2,260</h2>
      <img className={s.graph} src={incomeGraph} alt="Income graph" />
      <div className={s["info-header"]}>
        <h3>Your transactions (3)</h3>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <div className={s.transactions}>
        {transactionsData.map(item => (
          <div key={item.id} className={s.transaction}>
            <h3>${item.amount}</h3>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Incomes;
