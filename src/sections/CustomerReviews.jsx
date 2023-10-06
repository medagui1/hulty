import { customersReviews } from "../constants/navLinks";
import CustomerReview from "../components/CustomerReview";

const CustomerReviews = () => {
  let review = customersReviews[0];
  return (
    <div className="bg-primary p-15 mt-8 p-20 max-sm:p-5 rounded-[40px]">
      <div className="flex justify-between flex-2 max-xl:justify-center flex-wrap gap-8">
        <h1 className="text-7xl font-bold max-sm:text-5xl mb-10 mr-40 max-xl:mr-20 max-sm:ml-8 max-sm:mt-8">What our <br />customers say</h1>
        {/* <div className="max-lg:self-center my-4">
          <CustomerReview
            content={review.content}
            rating={review.rating}
            name={review.name}
          />
        </div> */}
      {/* </div>
      <div className="flex gap-4 flex-wrap justify-between max-lg:items-center "> */}
        {customersReviews.map((review) => (
          <CustomerReview
            key={review.id}
            content={review.content}
            rating={review.rating}
            name={review.name}
            
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
