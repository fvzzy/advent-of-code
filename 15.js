export const day = 15;
export const title = "chiton";

const adjacencyList = (input) => {
  const caveMap = input.map((line) => line.split("").map(Number));
  const directions = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  let adjacencyList = {};
  for (let y = 0; y < caveMap.length; y++) {
    for (let x = 0; x < caveMap[0].length; x++) {
      const node = `${x}_${y}`;
      adjacencyList[node] = {};

      for (let [shiftX, shiftY] of directions) {
        const [adjX, adjY] = [shiftX + x, shiftY + y];
        const adjKey = `${adjX}_${adjY}`;
        if (caveMap[adjY]?.[adjX])
          adjacencyList[node][adjKey] = caveMap[adjY][adjX];
      }
    }
  }

  return adjacencyList;
};

const nearestNeighbour = (distances, visited) => {
  let nearest;
  for (let node in distances) {
    const isNearestSoFar = !nearest || distances[node] < distances[nearest];
    // track all visited nodes as the shortest path will never require backtracking
    if (isNearestSoFar && !visited.has(node)) nearest = node;
  }
  return nearest;
};

const shortestPath = (graph, startNode, endNode) => {
  // find shortest path via Dijkstra's algorithm
  let distances = {};
  distances[endNode] = Infinity;
  distances = { ...distances, ...graph[startNode] };

  let parents = {};
  for (let node in graph[startNode]) {
    parents[node] = startNode;
  }

  let visited = new Set();
  let node = nearestNeighbour(distances, visited);

  while (node) {
    let distance = distances[node];
    let neighbours = graph[node];

    for (let n in neighbours) {
      if (n === startNode) continue;
      let newDistance = distance + neighbours[n];
      if (!distances[n] || distances[n] > newDistance) {
        // assign a new distance and parent for this neighbour
        distances[n] = newDistance;
        parents[n] = node;
      }
    }

    visited.add(node);
    node = nearestNeighbour(distances, visited);
  }

  let path = [endNode];
  let parent = parents[endNode];
  while (parent) {
    path.push(parent);
    parent = parents[parent];
  }
  path.reverse();

  return distances[endNode];
};

export function problem15_1(input) {
  const graph = adjacencyList(input);
  const endNode = `${input[0].length - 1}_${input.length - 1}`;
  return shortestPath(graph, "0_0", endNode);
}

export function problem15_2(input) {}
