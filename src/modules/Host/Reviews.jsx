import reviewGraph from "../../assets/reviews-graph.png";
import { BsStarFill } from "react-icons/bs";
import s from "./Reviews.module.css";

const Reviews = () => {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1"
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2"
    }
  ];

  return (
    <section className={s["host-reviews"] && s.box}>
      <div className={s["top-text"]}>
        <h2>Your reviews</h2>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <img className={s.graph} src={reviewGraph} alt="Review graph" />
      <h3>Reviews (2)</h3>
      {reviewsData.map(review => (
        <div key={review.id}>
          <div className={s.review}>
            {[...Array(review.rating)].map((_, i) => (
              <BsStarFill className={s["review-star"]} key={i} />
            ))}
            <div className={s.info}>
              <p className={s.name}>{review.name}</p>
              <p className={s.date}>{review.date}</p>
            </div>
            <p>{review.text}</p>
          </div>
          <hr />
        </div>
      ))}
    </section>
  );
};

export default Reviews;
