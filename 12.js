export const day = 12;
export const title = "passage pathing";

const createAdjacencyList = (input) => {
  let result = {};
  for (let line of input) {
    let [point1, point2] = line.split("-");
    // swap the points if start and end are presented the wrong way around
    if (point1 === "end" || point2 === "start")
      [point1, point2] = [point2, point1];
    // store the adjacent points in their presented directions
    result[point1] ? result[point1].push(point2) : (result[point1] = [point2]);
    // also store the reverse orders since our map is undirected
    if (point1 === "start" || point2 === "end") continue;
    result[point2] ? result[point2].push(point1) : (result[point2] = [point1]);
  }
  return result;
};

const isSmallCave = (cave) => cave === cave.toLowerCase() && cave !== "start";

export function problem12_1(input) {
  const adjacencyList = createAdjacencyList(input);

  const mapPaths = (node = "start", path = "start", paths = []) => {
    if (isSmallCave(node) && path.includes(`-${node}-`)) return;
    if (node === "end") return paths.push(path);

    for (let nextNode of adjacencyList[node]) {
      mapPaths(nextNode, `${path}-${nextNode}`, paths);
    }
    return paths;
  };

  const paths = mapPaths();
  return paths.length;
}

export function problem12_2(input) {}
