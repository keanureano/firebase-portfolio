import fs from "fs";
import path from "path";

interface TreeNode {
  name: string;
  link: string;
  children: TreeNode[];
}

function convertToNestedJSONTree(dirPath: string, basePath = "/"): TreeNode {
  const nodes: TreeNode[] = [];
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const link = `${basePath}${basePath === "/" ? "" : "/"}${file}`;
      const subNode = convertToNestedJSONTree(filePath, link);

      nodes.push({
        name: file,
        link,
        children: subNode.children,
      });
    }
  }

  const rootName =
    path.basename(dirPath) === "app" ? "home" : path.basename(dirPath);

  return {
    name: rootName,
    link: basePath,
    children: nodes,
  };
}

export default function SiteMap() {
  const srcAppDir = path.join(process.cwd(), "src/app");
  const nestedJSONTree: TreeNode = convertToNestedJSONTree(srcAppDir, "/");
  console.log(JSON.stringify(nestedJSONTree, null, 2));
  return <div></div>;
}
