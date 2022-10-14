function Node(value, nextNode) {
    return {value,next:nextNode}
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
                    next: null
                }
            }
        }
    };
}
