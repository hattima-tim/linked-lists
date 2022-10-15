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
    console.log(list);
  }

  function prepend(value) {
    if (!value && value !== 0) return;
    list = Node(value, list);
    console.log(list);
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
  return { append, prepend, size };
}

const linkedList = LinkedList();
linkedList.append(10);
linkedList.prepend(0);
console.log(linkedList.size()); //6
