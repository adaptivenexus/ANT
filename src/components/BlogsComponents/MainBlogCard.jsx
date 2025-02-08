import Image from "next/image";
import Link from "next/link";

const MainBlogCard = (props) => {
  return (
    <div className="border shadow-lg p-4 flex flex-col bg-accent-primary rounded-lg">
      <div className="relative aspect-video ">
        <Image
          src={props.img}
          fill
          alt=""
          priority
          className="object-cover object-center rounded-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-col justify-between gap-2">
        <div className="flex gap-4 text-sm mt-2">
          <span>
            <strong>Date: </strong>
            {props?.date?.slice(0, 10)}
          </span>
          <span>
            <strong>Category: </strong>
            {props.cat}
          </span>
        </div>
        <h1 className="text-xl font-bold truncate">{props.title}</h1>
        <p className="text-justify leading-5">
          {props?.overview?.slice(0, 100)}...
        </p>
        <Link
          href={`/blogs/${props.slug}`}
          className="bg-primary text-white py-2 px-3 hover:opacity-80 rounded border hover:border-secondary duration-300 w-max"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default MainBlogCard;
