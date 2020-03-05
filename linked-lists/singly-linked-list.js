// Represents a node of a linked list.
class Node {
  // Create a node with a provided value with the next pointer set to null.
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Represnts the data structure of a singly linked-list of nodes.
class SinglyLinkedList {
  // Creates a linked list with one node with a provided value.
  // The head and the tail pointer pointing to that node.
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  // A utility method that helps us view the contents of the linked-list.
  // Not a part of linked-list ADT.
  // JSON.stringify() can be used alternately to view the contents of the linked-list.
  printLinkedList() {
    let currentNode = this.head;
    const listElements = [];
    while (currentNode) {
      listElements.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(listElements);
  }

  // Adds a node to the end of the linked list with the value which is provided.
  // O(1) operation as we are keeping track of the tail pointer.
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  // Adds a node to the start of the linked list with the value which is provided.
  // O(1) operation as we are keeping track of the head pointer.
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // Traverses the linked-list to the index specified and returns the node at that index,
  _traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // Adds a node with a value provided in the linked list at the index provided.
  // O(n) as finding the node after which the node should be inserted requires linked-list traversal.
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index >= this.length) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    const leader = this._traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }

  // Removes a node from the linkded-list at the index provided.
  remove(index) {
    if(index === 0) {
      this.head = this.head.next;
      return;
    }

    const leader = this._traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
  }
}

// test
const myLinkedList = new SinglyLinkedList(10);
myLinkedList.printLinkedList();
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.prepend(1);
myLinkedList.printLinkedList();
console.log(JSON.stringify(myLinkedList));
myLinkedList.insert(2, 99);
myLinkedList.insert(2, 69);
myLinkedList.insert(0, 420);
myLinkedList.insert(20, 666);
myLinkedList.printLinkedList();
myLinkedList.remove(0);
myLinkedList.remove(2);
myLinkedList.remove(5);
myLinkedList.printLinkedList()