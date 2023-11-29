import Title from "./title";
import { ServicesList } from "../data";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title titleText="our" subTitleText="services" />

      <div className="section-center services-center">
        {ServicesList.map((service) => {
          const { id, title, text, icon } = service;
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
  );
};

export default Services;
