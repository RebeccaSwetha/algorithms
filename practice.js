class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

/*const n1 = new Node(100);
const n2 = new Node(200);

console.log(n1);
console.log(n2);
*/

//Create a Linked List
class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }
    //Insert at the beginning
    insertFirstNode (data) {
        this.head = new Node(data, this.head);
        this.size++;
           }
     //Insert Last
     insertLast(data) {
        let node = new Node(data);
        let current;
        if(!this.head) {
            this.head = node;
        }
        else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    //Insert at a certain index
    insertAt(data, index) {
        if(index > 0 && index > this.size) {
            return;
        }
        //If first index is zero
        if(index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const node = new Node (data);
        let current, previous;
        //Set current to first
        current = this.head;
        let count = 0;
        while(count < index) {
            previous = current; //Node before the index
            count++;
            current = current.next; //Node after index
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }
    //Get at a certain index
    getAt(index) {
        let current = this.head;
        let count = 0;
        while(current) {
            if (count == index) {
                console.log(current.data)
            }
            count ++;
            current = current.next;
        }
        return null;
    }
//Remove At
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        if(index === 0) {
            this.head = current.next;
        }
        else {
            while(count < index) {
                count ++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }
    //Print the list
    printList() {
        let current = this.head; //Start with the current node which starts with the head
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirstNode(100);
ll.insertFirstNode(200);
ll.insertFirstNode(300);
ll.insertFirstNode(400);
ll.insertLast(500);
ll.insertAt(600, 10);
ll.removeAt(1);
ll.printList();
//ll.getAt(1);
