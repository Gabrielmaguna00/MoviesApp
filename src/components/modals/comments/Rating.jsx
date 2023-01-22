import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function Rating({ rating }) {
  return (
    <>
      {rating === "1" ? (
        <>
          <AiFillStar className="fill-[#FF8A4C]"/>
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </>
      ) : rating === "2" ? (
        <>
          <AiFillStar className="fill-[#FF8A4C]"/>
          <AiFillStar className="fill-[#FF8A4C]"/>
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </>
      ) : rating === "3" ? (
        <>
          <AiFillStar className="fill-[#FF8A4C]"/>
          <AiFillStar className="fill-[#FF8A4C]"/>
          <AiFillStar className="fill-[#FF8A4C]"/>
          <AiOutlineStar />
          <AiOutlineStar />
        </>
      ) : rating === "4" ? (
        <>
          <AiFillStar className="fill-[#FF8A4C]" />
          <AiFillStar className="fill-[#FF8A4C]"/>
          <AiFillStar className="fill-[#FF8A4C]"/>
          <AiFillStar className="fill-[#FF8A4C]"/>
          <AiOutlineStar />
        </>
      ) : (
        <>
          <AiFillStar className="fill-[#FF8A4C]"/>
          <AiFillStar className="fill-[#FF8A4C]"/>
          <AiFillStar className="fill-[#FF8A4C]"/>
          <AiFillStar className="fill-[#FF8A4C]"/>
          <AiFillStar className="fill-[#FF8A4C]"/>
        </>
      )}
    </>
  );
}
