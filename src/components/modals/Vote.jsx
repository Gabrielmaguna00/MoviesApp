export default function Vote({ review, submit, rating }) {
  return (
    <>
      <label htmlFor="my-modal-4" className="btn mt-2">
        Vote
      </label>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-auto h-auto max-w-none">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
            onSubmit={(e) => {
              e.preventDefault(), submit(e);
            }}
            className="flex flex-col"
            htmlFor="my-modal-4"
          >
            <div className="rating">
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
                value={1}
                onChange={(e) => rating(e)}
                checked={review.rating == 1 ? true : false}
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
                value={2}
                onChange={(e) => rating(e)}
                checked={review.rating == 2 ? true : false}
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
                value={3}
                onChange={(e) => rating(e)}
                checked={review.rating == 3 ? true : false}
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
                value={4}
                onChange={(e) => rating(e)}
                checked={review.rating == 4 ? true : false}
              />
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
                value={5}
                onChange={(e) => rating(e)}
                checked={review.rating == 5 ? true : false}
              />
            </div>
            <label>comentary(optional)</label>
            <textarea
              name="comentary"
              className="textarea textarea-bordered"
              placeholder="Review..."
              value={review.comentary}
              onChange={(e) => rating(e)}
            ></textarea>
            <label
              htmlFor="my-modal-4"
              className="btn z-30"
              onClick={(e) => {
                submit(e);
              }}
            >
              Send
            </label>
          </form>
        </div>
      </div>
    </>
  );
}
