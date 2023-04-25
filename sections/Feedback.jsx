import { feedback } from "../constants";
import styles from "../styles";
import { FeedbackCard } from "../components";

const Testimonials = () => (
  <section id="clients" className={`${styles.yPadding} ${styles.flexCenter} flex-col flex relative min-h-[100vh] mt-[300px]`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] md:ml-[200px]">
      <h2 className={`${styles.heading2} ml-[10px]`}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px] text-white`}>
          
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] md:ml-[200px]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;