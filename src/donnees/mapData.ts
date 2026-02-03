export const mapData = {
    nodes: [
        { id: 0, position: { x: 100, y: 100 } },
        { id: 25, position: { x: 200, y: 200 } },
        { id: 1, position: { x: 150, y: 250 } },
        { id: 2, position: { x: 250, y: 250 } },
        { id: 3, position: { x: 200, y: 300 } },
        { id: 59, position: { x: 300, y: 400 } },
    ],
    edges: [
        { from: 0, to: 25 },
        { from: 25, to: 1 },
        { from: 25, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 3 },
        { from: 3, to: 59 },
    ],
};
