import fs from "fs";
import path from "path";

export interface TreeNode {
  name: string;
  link: string;
  children: TreeNode[];
}

function convertToNestedJSONTree(
  directoryPath: string,
  basePath = "/"
): TreeNode {
  const treeNodes: TreeNode[] = [];
  const filesInDirectory = fs.readdirSync(directoryPath);

  for (const file of filesInDirectory) {
    const filePath = path.join(directoryPath, file);
    const fileStats = fs.statSync(filePath);

    if (fileStats.isDirectory()) {
      const link = `${basePath}${basePath === "/" ? "" : "/"}${file}`;
      const subNode = convertToNestedJSONTree(filePath, link);

      treeNodes.push({
        name: file,
        link,
        children: subNode.children,
      });
    }
  }

  const rootName =
    path.basename(directoryPath) === "app"
      ? "home"
      : path.basename(directoryPath);

  return {
    name: rootName,
    link: basePath,
    children: treeNodes,
  };
}

export const RootTree = convertToNestedJSONTree(
  path.join(process.cwd(), "src/app")
);
