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

const isSmallCave = (cave) =>
  cave === cave.toLowerCase() && cave !== "start" && cave !== "end";

const mapPaths = ({
  adjacencyList,
  isInvalidVisitFn,
  cave = "start",
  path = "start",
  paths = [],
  smallCaveVisits = {},
}) => {
  // store counts of visits to small caves
  if (isSmallCave(cave)) {
    smallCaveVisits[cave]
      ? smallCaveVisits[cave]++
      : (smallCaveVisits[cave] = 1);
  }

  // exit the recursion if we're breaking the small cave visit rules
  if (isInvalidVisitFn(smallCaveVisits)) return;

  // push to our results array
  if (cave === "end") return paths.push(path);

  for (let nextCave of adjacencyList[cave]) {
    const options = {
      adjacencyList,
      isInvalidVisitFn,
      cave: nextCave,
      path: `${path}-${nextCave}`,
      paths,
      smallCaveVisits: { ...smallCaveVisits },
    };
    mapPaths(options);
  }

  return paths;
};

export function problem12_1(input) {
  const adjacencyList = createAdjacencyList(input);
  const isInvalidVisitFn = (smallCaveVisits) =>
    Object.values(smallCaveVisits).some((visitCount) => visitCount > 1);

  const paths = mapPaths({ adjacencyList, isInvalidVisitFn });
  return paths.length;
}

export function problem12_2(input) {
  const adjacencyList = createAdjacencyList(input);
  const isInvalidVisitFn = (smallCaveVisits) => {
    const backtrackedCaves = Object.values(smallCaveVisits).filter(
      (visitCount) => visitCount > 1
    );
    const visitedAnyMoreThanOnce = backtrackedCaves.length > 1;
    const visitedOneMoreThanTwice = backtrackedCaves.some((c) => c > 2);
    return visitedAnyMoreThanOnce || visitedOneMoreThanTwice;
  };

  const paths = mapPaths({ adjacencyList, isInvalidVisitFn });
  return paths.length;
}
