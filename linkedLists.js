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

    let deepCloneOfList = JSON.parse(JSON.stringify(list));
    
    //this clone is necessary to prevent the following bug
    // const listAfterAppendingOne = LinkedList().append(1);
    // const listAfterAppendingTwo = LinkedList().append(2);
    // console.log(listAfterAppendingOne)
    // without the deep clone, console log will print
    // the value of listAfterAppendingTwo
    let tmp = deepCloneOfList;
    while (tmp.next !== null) {
      tmp = tmp.next;
    }
    tmp.next = Node(value, null);
    return list = deepCloneOfList;
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

  function find(value) {
    const valueToBeChecked = value;
    let nodeCount = 0;
    let tmp = list;

    while (tmp != null) {
      if (valueToBeChecked === tmp.value) return nodeCount;
      nodeCount += 1;
      tmp = tmp.next;
    }
    return null;
  }

  function toString() {
    let valuesOfList = [];
    let tmp = list;

    while (tmp != null) {
      valuesOfList.push(tmp.value);
      tmp = tmp.next;
    }
    return valuesOfList.join("->");
  }

  function doInsertionOrRemoval(actionName, index, value) {
    let deepCloneOfList = JSON.parse(JSON.stringify(list));
    
    // this clone is necessary to prevent the following bug
    // const listAfterRemovalOfNodeOne = LinkedList().removeAt(0)
    // const listAfterRemovalOfNodeThree = LinkedList().removeAt(2)
    // console.log(listAfterRemovalOfNodeOne)
    // console.log(listAfterRemovalOfNodeThree)
    // without the deep clone
    // both console log prints the value of listAfterRemovalOfNodeThree

    if (index >= size()) return;
    if (index === 0) {
      list = actionName === "insertion" ? Node(value, list) : list.next;
      return list;
    }

    let nodeCount = 0;
    let tmp = deepCloneOfList;
    let prevNode = null;

    while (tmp !== null) {
      if (index === nodeCount) {
        prevNode.next =
          actionName === "insertion" ? Node(value, tmp) : tmp.next;
        return (list = deepCloneOfList);
      }

      nodeCount += 1;
      prevNode = tmp;
      tmp = tmp.next;
    }
  }

  function insertAt(value, index) {
    return doInsertionOrRemoval("insertion", index, value);
  }

  function removeAt(index) {
    return doInsertionOrRemoval("removal", index);
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

const linkedList = LinkedList();

const listAfterAppend = linkedList.append(10);
console.log(
  `append result: 
  ${JSON.stringify(listAfterAppend, null, 4)}
  `
);

const listAfterPrepend = linkedList.prepend(0);
console.log(
  `prepend result:
  ${JSON.stringify(listAfterPrepend, null, 4)}
  `
);

console.log(`size: ` + linkedList.size()); //6

const headNode = linkedList.head();
console.log(
  `head node:
  ${JSON.stringify(headNode, null, 4)}
  `
);

const tailNode = linkedList.tail();
console.log(
  `tail node:
    ${JSON.stringify(tailNode, null, 4)}
    `
);

const nodeAtIndexThree = linkedList.at(3);
console.log(
  `node at index 3:
    ${JSON.stringify(nodeAtIndexThree, null, 4)}
    `
);

const listAfterRemovingLastNode = linkedList.pop();
console.log(`linkedList after removing last node:
${JSON.stringify(listAfterRemovingLastNode, null, 4)}`);

console.log(`linkedList contains 1: ` + linkedList.contains(1));
console.log(`linkedList contains k: ` + linkedList.contains("k"));

console.log(`index of 4 at the linkedList: ` + linkedList.find(4));
console.log(`index of 10 at the linkedList: ` + linkedList.find(10));

console.log(`values of the list: ` + linkedList.toString());

const listAfterInsertion = linkedList.insertAt("k", 1);
const listAfterInsertion2 = linkedList.insertAt("a", 0);
console.log(
  `insert 'k' at index 1:  ${JSON.stringify(listAfterInsertion, null, 4)}`
);
console.log(
  `insert 'a' at index 0:  ${JSON.stringify(listAfterInsertion2, null, 4)}`
);

const listAfterRemoval = linkedList.removeAt(0);
const listAfterRemoval2 = linkedList.removeAt(2);
console.log(
  `remove node at index 0:  ${JSON.stringify(listAfterRemoval, null, 4)}`
);
console.log(
  `remove node at index 2:  ${JSON.stringify(listAfterRemoval2, null, 4)}`
);
module.exports = { linkedList };
