import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Rating } from "./Rating";
export default function CommentSkeleton({ data }) {
  return (<>
    <article className=" my-2 first:mb-1 first:mt-0" >
      <div className="flex flex-row items-center">
        <h1 className="text-lg pr-2">{data.name}</h1>
        {}
        <Rating rating={data.review.rating}/>
      </div>
      <p className="pl-2 font-mono">{data.review.comentary}</p>
    </article>
    <div className="border-b-[0.1rem] border-gray-500 last:border-none"/></>
  );
}
//rgb(255 138 76)