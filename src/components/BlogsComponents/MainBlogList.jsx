import MainBlogCard from "./MainBlogCard";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import CarouselBlogs from "./CarouselBlogs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

async function getData() {
  return await client.fetch(
    groq`*[_type == "post"]
    | order(_createdAt desc){
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

  const topBlogs = await blogs.slice(0, 3);

  return (
    <div className="min-h-screen xl:max-w-[1600px] px-4 mx-auto py-8 space-y-10">
      <h5 className=" heading-4 text-center">Explore Blogs</h5>

      <div className="flex items-center gap-2 md:gap-6 w-full">
        <button type="button" className="prev-btn-swiper-blogs">
          <FaChevronLeft className="text-3xl md:text-6xl text-primary" />
        </button>

        <CarouselBlogs blogs={topBlogs} />

        <button type="button" className="next-btn-swiper-blogs">
          <FaChevronRight className="text-3xl md:text-6xl text-primary" />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5 pt-12 pb-10 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 ">
        {blogs?.map((elem) => {
          return (
            <MainBlogCard
              img={elem.imageUrl}
              key={elem._id}
              slug={elem.slug.current}
              title={elem.title}
              overview={elem.overview}
              date={elem.publishedAt}
              cat={elem.categories[0].title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainBlogList;
