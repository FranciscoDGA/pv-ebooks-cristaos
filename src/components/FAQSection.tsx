import { useState } from 'react';
import { bookConfig } from '../config/bookConfig';

export function FAQSection() {
  const { faq } = bookConfig;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    if (openIdx === idx) setOpenIdx(null);
    else setOpenIdx(idx);
  };

  return (
    <section className="section-padding faq-section">
      <div className="container">
        <h2 className="faq-title">Perguntas Frequentes</h2>
        <div className="faq-list">
          {faq.map((item, idx) => (
            <div key={idx} className={`faq-item ${openIdx === idx ? 'active' : ''}`}>
              <button className="faq-question" onClick={() => toggle(idx)}>
                {item.question}
                <span>{openIdx === idx ? '-' : '+'}</span>
              </button>
              <div className="faq-answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
