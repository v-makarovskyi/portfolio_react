import React from "react";
import { Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

export default function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Здравствуйте! Меня зовут{" "}
            <span className="purple">Владимир Макаровский</span> из
            <span className="purple"> Киева, Украина.</span>
            <br/> Я frontend-разработчик
            <br/>
            <br/>
            Помимо программирования, которым я увлечен, у меня есть и другие интересы. 
          </p>
          <ul>
            <li className="about-activity">
                <ImPointRight /> Слушаю классическую музыку
            </li>
            <li className="about-activity">
                <ImPointRight /> Читаю книги
            </li>
            <li className="about-activity">
                <ImPointRight /> Люблю путешествовать
            </li>
          </ul>
          <p style={{color:'rgb(155 126 172)'}}>
           Стремитесь создавать вещи, которые меняют жизнь к лучшему!{' '}
          </p>
          <footer className="blockquote-footer">
            Не знаю, кто сказал, но согласен :) 
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
