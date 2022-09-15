// class for each individual node

class Node {
  constructor(id) {
    this.id = id;

    this.children = [];
  }

  add(id) {
    this.children.push(new Node(id));
  }

  remove(id) {
    this.children = this.children.filter((node) => {
      return node.id !== id;
    });
  }
}

// class for node tree

class NodeTree {
  constructor(startingId) {
    this.root = startingId;
  }

  uniqueNodeIds() {
    const array = [this.root];

    const uniqueIds = [];

    while (array.length) {
      const node = array.shift();

      array.unshift(...node.children);

      if (!uniqueIds.includes(node.id)) {
        uniqueIds.push(node.id);
      }
    }

    return uniqueIds.length;
  }

  mostSharedNodeId() {
    const array = [this.root];

    const idFrequency = {};

    while (array.length) {
      const node = array.shift();

      array.unshift(...node.children);

      idFrequency[node.id]
        ? (idFrequency[node.id] += 1)
        : (idFrequency[node.id] = 1);
    }

    return Object.keys(idFrequency).reduce((previousValue, currentValue) =>
      idFrequency[previousValue] > idFrequency[currentValue]
        ? previousValue
        : currentValue
    );
  }
}

// What is the total number of unique node IDs?

const nodeTree = new NodeTree('089ef556-dfff-4ff2-9733-654645be56fe');

nodeTree.uniqueNodeIds();

// Which node ID is shared the most among all other nodes?

nodeTree.mostSharedNodeId();
