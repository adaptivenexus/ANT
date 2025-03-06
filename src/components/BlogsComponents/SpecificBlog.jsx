import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/utils/sanityimg";
import Image from "next/image";
import Link from "next/link";

const PortableTextComponent = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value).url()}
        alt="Image"
        className="rounded-lg"
        width={800}
        height={800}
        priority
      />
    ),
  },
};

const SpecificBlog = async ({ blogs }) => {
  return (
    <div className=" xl:max-w-[1600px] px-4 mx-auto flex flex-col mt-8 w-full  max-lg:px-10 min-h-screen">
      <div className="mb-4 space-y-3">
        <h1 className="text-xl font-semibold text-start text-primary">Blog</h1>
        <div className="flex items-center gap-5">
          <p className="font-semibold">
            Category:{" "}
            <span className="font-normal">{blogs?.categories[0].title}</span>
          </p>
          <p className="font-semibold">
            Published Date:{" "}
            <span className="font-normal">
              {blogs?.publishedAt.slice(0, 10)}
            </span>
          </p>
        </div>
      </div>
      <div className="prose prose-h1:text-foreground prose-headings:text-primary prose-h2:text-foreground prose-h3:text-foreground prose-h4:text-foreground prose-h5:text-foreground prose-h6:text-foreground prose-p:text-secondary-foreground prose-a:text-primary prose-li:text-foreground prose-lead:text-foreground prose-blockquote:text-secondary-foreground prose-ul:text-foreground max-w-none prose-h1:text-5xl prose-h1:border-b-2 prose-h1:pb-3 prose-xl prose-ol:text-foreground prose-strong:text-foreground max-md:prose-base max-md:prose-h1:text-3xl min-h-screen prose-img:mx-auto">
        <PortableText value={blogs?.body} components={PortableTextComponent} />
      </div>
      <div className="mt-10 flex justify-center">
        <Link
          href="/blogs"
          className="border-secondary-color border rounded px-8 py-2 lg:hover:bg-secondary-color lg:hover:text-white transition-all duration-500 text-base"
        >
          Go to Blogs Page
        </Link>
      </div>
    </div>
  );
};

export default SpecificBlog;
