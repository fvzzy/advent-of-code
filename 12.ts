export const day = 12;
export const title = "passage pathing";

const createAdjacencyList = (input) => {
  let result = {};
  for (let line of input) {
    let [cave1, cave2] = line.split("-");
    // swap the caves if start and end are presented the wrong way around
    if (cave1 === "end" || cave2 === "start") [cave1, cave2] = [cave2, cave1];
    // store the adjacent caves in their presented directions
    result[cave1] ? result[cave1].push(cave2) : (result[cave1] = [cave2]);
    // also store the reverse orders since our graph is undirected
    if (cave1 === "start" || cave2 === "end") continue;
    result[cave2] ? result[cave2].push(cave1) : (result[cave2] = [cave1]);
  }
  return result;
};

const isSmallCave = (cave) =>
  cave !== "start" && cave !== "end" && cave === cave.toLowerCase();

const mapPaths = (options) => {
  const {
    adjacencyList,
    isInvalidVisitFn,
    cave = "start",
    path = "start",
    paths = [],
    smallCaveVisits = {},
  } = options;

  // store counts of visits to small caves
  if (isSmallCave(cave)) {
    smallCaveVisits[cave]
      ? smallCaveVisits[cave]++
      : (smallCaveVisits[cave] = 1);
  }

  // exit the traversal if we're breaking the small cave visit rules
  if (isInvalidVisitFn(smallCaveVisits)) return;

  // save path and exit if we've reached an "end" cave
  if (cave === "end") return paths.push(path);

  for (let nextCave of adjacencyList[cave]) {
    const options = {
      adjacencyList,
      isInvalidVisitFn,
      cave: nextCave,
      path: `${path},${nextCave}`,
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
    const visitedOneMoreThanTwice = backtrackedCaves.some((vc) => vc > 2);
    return visitedAnyMoreThanOnce || visitedOneMoreThanTwice;
  };

  const paths = mapPaths({ adjacencyList, isInvalidVisitFn });
  return paths.length;
}
