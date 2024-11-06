import React from "react";
import Title from "./Title";
import { servicesData } from "./Linkss";

const Services = () => {
  return (
    <div>
      <section className="section services" id="services">
        <Title title="Our" subtitle="services" />
        <div className="section-center services-center">
          {servicesData.map((items) => {
            const { id, icon, title, text } = items;
            return (
              <article className="service" key={id}>
                <span className="service-icon">
                  <i className={icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{title}</h4>
                  <p className="service-text">{text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
