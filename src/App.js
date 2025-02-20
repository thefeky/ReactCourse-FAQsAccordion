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
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <Item
          title={faq.title}
          text={faq.text}
          key={faq.title}
          num={index + 1}
        />
      ))}
    </div>
  );
}

function Item({ title, text, num }) {
  const [status, setStatus] = useState("");

  const formattedNum = String(num).padStart(2, "0");

  function handleStatus() {
    if (status === "") setStatus("open");
    else setStatus("");
  }

  return (
    <div className={`item ${status}`} onClick={handleStatus}>
      <p className="number">{formattedNum}</p>
      <p className="title">{title}</p>
      <p className="icon">{status === "open" ? "-" : "+"}</p>
      <p className="content-box">{status === "open" ? text : null}</p>
    </div>
  );
}
