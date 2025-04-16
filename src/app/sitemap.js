import { client } from "@/lib/sanity";
import { groq } from "next-sanity";

async function getData() {
  return await client.fetch(
    groq`*[_type == "post"]
      | order(publishedAt desc){
    publishedAt,
    slug,
  }`
  );
}

export default async function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const blogs = await getData();

  const staticRoutes = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${siteUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const blogRoutes = blogs.map((elem) => ({
    url: `${siteUrl}/blogs/${elem.slug.current}`,
    lastModified: new Date(elem.publishedAt),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes];
}
