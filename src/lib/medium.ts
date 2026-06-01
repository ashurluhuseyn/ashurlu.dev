import Parser from "rss-parser";

const parser = new Parser();

export const revalidate = 86400;

function stripHtml(html = "") {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function calculateReadTime(text: string) {
  const wordsPerMinute = 200;

  const wordCount = text.split(/\s+/).length;

  const minutes = Math.ceil(wordCount / wordsPerMinute);

  return `${minutes} min read`;
}

export async function getMediumArticles() {
  const feed = await parser.parseURL(
    "https://medium.com/feed/@huseynashurlu"
  );

  return feed.items.slice(0, 3).map((item) => {
    const cleanContent = stripHtml(item.content || "");

    const rawDescription =
      item.contentSnippet || cleanContent;

    return {
      title: item.title || "",
      description: rawDescription.slice(0, 140) + "...",
      url: item.link || "",
      readTime: calculateReadTime(cleanContent),
    };
  });
}