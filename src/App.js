import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return <Accordion />;
}

function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  function handleCurOpen(num) {
    setCurOpen((curOpen) => (curOpen === num ? null : num));
  }

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <Item
          title={faq.title}
          key={faq.title}
          num={index + 1}
          curOpen={curOpen === index + 1}
          onCurOpen={handleCurOpen}
        >
          {faq.text}
        </Item>
      ))}
    </div>
  );
}

function Item({ title, children, num, curOpen, onCurOpen }) {
  const formattedNum = String(num).padStart(2, "0");

  return (
    <div
      className={`item ${curOpen ? "open" : ""}`}
      onClick={() => onCurOpen(num)}
    >
      <p className="number">{formattedNum}</p>
      <p className="title">{title}</p>
      <p className="icon">{curOpen ? "-" : "+"}</p>
      {curOpen ? <p className="content-box">{children}</p> : null}
    </div>
  );
}
