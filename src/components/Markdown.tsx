import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownProps {
  file: string;
}

export default function Markdown({ file }: MarkdownProps) {
  const filePath = path.join(process.cwd(), `public/markdown/${file}`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);

  return (
    <ReactMarkdown
      className="mx-auto w-full prose prose-sm prose-amber"
      children={content}
      remarkPlugins={[remarkGfm]}
    />
  );
}
