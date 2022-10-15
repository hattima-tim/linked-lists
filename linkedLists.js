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
  return { append, prepend, size ,head,tail};
}

const linkedList = LinkedList();

console.log(linkedList.append(10));

console.log(linkedList.prepend(0));

console.log(linkedList.size()); //6

console.log(linkedList.head())

console.log(linkedList.tail())