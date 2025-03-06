import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CarouselBlogsHome from "./CarouselBlogsHome";

async function getData() {
  return await client.fetch(
    groq`*[_type == "post"]
      | order(publishedAt desc)[0...5]{
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

const RecentBlogs = async () => {
  const blogs = await getData();

  const topBlogs = await blogs.slice(0, 3);
  return (
    <div className="py-24">
      <div className="xl:max-w-[1600px] px-4 mx-auto space-y-8">
        <div className="text-center space-y-3">
          <p className="heading-top text-primary">Blogs</p>
          <h3 className="heading-3 text-foreground">Insights & Ideas</h3>
          <p className="subtitle-text-2 text-secondary-foreground">
            Explore the latest trends, tips, and innovations in digital
            marketing, web solutions, and creative strategies.
          </p>
        </div>
        <div className="flex ">
          <button type="button" className="prev-btn-swiper-blogs-home">
            <FaChevronLeft className="text-3xl md:text-6xl text-primary" />
          </button>
          <CarouselBlogsHome blogs={topBlogs} />
          <button type="button" className="next-btn-swiper-blogs-home">
            <FaChevronRight className="text-3xl md:text-6xl text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default RecentBlogs;
