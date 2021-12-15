export const day = 15;
export const title = "chiton";

const adjacencyList = (caveMap) => {
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

const generateFullMap = (input, scale) => {
  let map = input.map((line) => line.split("").map(Number));
  const [partialWidth, partialHeight] = [map[0].length, map.length];

  // fill across
  for (let y = 0; y < partialWidth; y++) {
    for (let x = 0; x < partialHeight; x++) {
      let xy = map[y][x];
      for (let expansion = 1; expansion < scale; expansion++) {
        xy = xy === 9 ? 1 : xy + 1;
        map[y][expansion * partialWidth + x] = xy;
      }
    }
  }

  // fill down
  for (let x = 0; x < map[0].length; x++) {
    for (let y = 0; y < partialHeight; y++) {
      let xy = map[y][x];
      for (let expansion = 1; expansion < scale; expansion++) {
        xy = xy === 9 ? 1 : xy + 1;
        if (!map[expansion * partialHeight + y])
          map[expansion * partialHeight + y] = [];
        map[expansion * partialHeight + y][x] = xy;
      }
    }
  }

  return map;
};

export function problem15_1(input) {
  const caveMap = input.map((line) => line.split("").map(Number));
  const graph = adjacencyList(caveMap);
  const endNode = `${input[0].length - 1}_${input.length - 1}`;
  return shortestPath(graph, "0_0", endNode);
}

export function problem15_2(input) {
  const scale = 5;
  const fullMap = generateFullMap(input, scale);
  const graph = adjacencyList(fullMap);
  const endNode = `${input[0].length * scale - 1}_${input.length * scale - 1}`;
  return shortestPath(graph, "0_0", endNode);
}
