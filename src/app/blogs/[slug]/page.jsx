import SpecificBlog from "@/components/BlogsComponents/SpecificBlog";
import { client } from "@/lib/sanity";

export const dynamic = "force-dynamic";

async function getData(slug) {
  return await client.fetch(
    `*[_type == "post" && slug.current == '${slug}'][0]
    {
  _id,
  title,
  author->{
    name,
    image
  },
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

// export async function generateMetadata({ params }) {
//   // fetch data
//   const blogs = await getData((await params).slug);

//   // optionally access and extend (rather than replace) parent metadata

//   return {
//     title: `${blogs.title} `,
//   };
// }

const BlogSpecific = async ({ params }) => {
  const blogs = await getData((await params).slug);
  return (
    <>
      <SpecificBlog blogs={blogs} />
    </>
  );
};
export default BlogSpecific;
