import CommentSkeleton from "./CommentSkeleton";

export default function Comments({ comments }) {
  return (
    <>
      <label htmlFor="my-modal-1" className="btn mt-2 ml-4">
        Reviews
      </label>
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <label htmlFor="my-modal-1" className="modal cursor-pointer">
        <label className="modal-box relative h-auto max-h-[35rem]" htmlFor="">
          {comments &&
            comments.map((data, index) => (
              <CommentSkeleton data={data} key={index} />
            ))}
        </label>
      </label>
    </>
  );
}

// utilizar de ejemplo comentarios de meli. Abrir un modal de una y de ahi aplicar el infinite scroll, con la data mostrando de a poco y si se puede utilizar un spinner asi practicamos!
