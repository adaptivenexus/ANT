import MainBlogCard from "./MainBlogCard";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { formatDateTime } from "@/lib/utils";

async function getData() {
  return await client.fetch(
    groq`*[_type == "post"]
    | order(publishedAt desc){
  _id,
  title,
  author->{
    name,
    image
  },
  overview,
  body,
  publishedAt,
  slug,
  "imageUrl": mainImage.asset->url,
  categories[]->{
      title
  }
}`
  );
}

const MainBlogList = async () => {
  const blogs = await getData();

  const topBlogs = await blogs.slice(0, 1);
  const restBlogs = await blogs.slice(1, blogs.length);

  return (
    <div className="min-h-screen max-w-[1280px] 2xl:max-w-[1600px] px-4 mx-auto py-8 space-y-10">
      <h5 className=" heading-4 text-center">Explore Blogs</h5>

      <div className="flex items-center gap-2 md:gap-6 w-full">
        <div className="bg-accent-primary border p-5 md:p-12 rounded-3xl flex gap-10 shadow-xl items-center flex-col xl:flex-row">
          <div className="flex-1">
            <Image
              src={topBlogs[0].imageUrl}
              alt=""
              width={800}
              height={800}
              className="rounded-3xl aspect-video shadow-xl"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between min-h-full gap-4">
            <div className="space-y-5">
              <h4 className="heading-5 2xl:heading-4 font-bold line-clamp-3 md:line-clamp-none">
                {topBlogs[0].title}
              </h4>
              <p className="body-text 2xl:subtitle-text mt-2 text-secondary-foreground line-clamp-4 md:line-clamp-none">
                {topBlogs[0].overview}
              </p>
            </div>
            <div className="flex-1 flex items-end justify-between">
              <div className="space-y-0.5">
                <p className="capitalize label-text 2xl:body-text text-secondary-foreground">
                  <span className="font-semibold">Author:</span>{" "}
                  {topBlogs[0]?.author?.name}
                </p>
                <p className="body-text text-secondary-foreground label-text 2xl:body-text">
                  <span className="font-semibold">Published Date:</span>{" "}
                  {formatDateTime(topBlogs[0]?.publishedAt)}
                </p>
              </div>
              <Link
                href={`/blogs/${topBlogs[0].slug.current}`}
                className="btn-primary label-text p-4 2xl:body-text text-white w-max h-max"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 pt-12 pb-10 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 ">
        {restBlogs?.map((elem) => {
          return (
            <MainBlogCard
              img={elem?.imageUrl}
              key={elem?._id}
              slug={elem?.slug.current}
              title={elem?.title}
              overview={elem?.overview}
              date={elem?.publishedAt}
              cat={elem?.categories[0].title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainBlogList;
