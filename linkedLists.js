function Node(value, nextNode) {
  return { value, next: nextNode };
}

function LinkedList() {
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  };

  function append(value) {
    if (!value && value !== 0) return;

    let tmp = list;
    while (tmp.next !== null) {
      tmp = tmp.next;
    }
    tmp.next = Node(value, null);
    return list;
  }

  function prepend(value) {
    if (!value && value !== 0) return;
    list = Node(value, list);
    return list;
  }

  function size() {
    let nodeCount = 0;
    let tmp = list;
    while (tmp !== null) {
      nodeCount += 1;
      tmp = tmp.next;
    }
    return nodeCount;
  }

  function head() {
    return list;
  }

  function tail() {
    let tmp = list;
    while (tmp.next !== null) {
      tmp = tmp.next;
    }
    return tmp;
  }

  function at(index) {
    if (typeof index !== "number") return;

    let nodeCount = 0;
    let tmp = list;

    while (tmp !== null) {
      if (nodeCount === index) return tmp;
      nodeCount += 1;
      tmp = tmp.next;
    }
    return "Not Found";
  }

  function pop() {
    if (size() === 1) return {};

    let tmp = list;
    let prevNode = tmp;
    while (tmp.next !== null) {
      prevNode = tmp;
      tmp = tmp.next;
    }
    prevNode.next = null;
    return list;
  }

  function contains(value) {
    const valueToBeChecked = value;
    let tmp = list;

    while (tmp !== null) {
      if (valueToBeChecked === tmp.value) return true;
      tmp = tmp.next;
    }
    return false;
  }  
  return { append, prepend, size, head, tail, at, pop, contains };
}

const linkedList = LinkedList();

console.log(
  `append result: 
  ${JSON.stringify(linkedList.append(10), null, 4)}
  `
);

console.log(
  `prepend result:
  ${JSON.stringify(linkedList.prepend(0), null, 4)}
  `
);

console.log(`size: ` + linkedList.size()); //6

console.log(
  `head node:
  ${JSON.stringify(linkedList.head(), null, 4)}
  `
);

console.log(
  `tail node:
    ${JSON.stringify(linkedList.tail(), null, 4)}
    `
);

console.log(`node at index 3:
${JSON.stringify(linkedList.at(3), null, 4)}`);

console.log(`linkedList after removing last node:
${JSON.stringify(linkedList.pop(), null, 4)}`);

console.log(`linkedList contains 1: ` + linkedList.contains(1))
console.log(`linkedList contains k: ` + linkedList.contains('k'))
module.exports = { linkedList };
