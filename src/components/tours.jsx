import Title from "./title";
import { ToursList } from "../data";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title titleText="featured" subTitleText="tours" />

      <div className="section-center featured-center">
        {ToursList.map((tour) => {
          const { id, date, title, desc, duration, price, location, image } =
            tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt={title} />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <h4>{title}</h4>
                <p>{desc}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {location}
                  </p>
                  <p>{duration} days</p>
                  <p>from ${price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
