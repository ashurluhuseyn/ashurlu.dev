import Parser from "rss-parser";

const parser = new Parser();

export const revalidate = 86400;

export async function getMediumArticles() {
  const feed = await parser.parseURL(
    "https://medium.com/feed/@huseynashurlu"
  );

  return feed.items.slice(0, 3).map((item) => ({
    title: item.title || "",
    description: item.contentSnippet || "",
    url: item.link || "",
    readTime: "Medium article",
  }));
}