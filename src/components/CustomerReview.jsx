const CustomerReview = ({content, name, rating}) => {

  return (
    <div className="flex flex-col p-8 rounded-2xl bg-white w-[340px] max-xl:w-[265px] min-w-[200px]">
        <p>{content}</p>
        <div className="self-end flex flex-col items-end mt-4">
            <h3 className="font-bold">{name}</h3>
            <p>{rating}</p>
        </div>
    </div>
  )
}

export default CustomerReview