import Parser from "rss-parser";

const parser = new Parser();

export const revalidate = 3600;

function stripHtml(html = "") {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export async function getMediumArticles() {
  const feed = await parser.parseURL(
    "https://medium.com/feed/@huseynashurlu"
  );

  return feed.items.slice(0,7).map((item) => {
    const rawDescription =
      item.contentSnippet || stripHtml(item.content || "");

    return {
      title: item.title || "",
      description: rawDescription.slice(0, 140) + "...",
      url: item.link || "",
      readTime: "Medium article",
    };
  });
}
