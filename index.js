class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }
    //Insert the first node

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
    //Insert at Index
    insertAt(data, index) {
        if(index > 0 && index > this.size)
        {
            return;
        }    
        if(index === 0 ) {
            this.head = new Node(data, this.head);
            return;
        }
        const node = new Node (data);
        let current, previous;
        current = this.head;
        let count = 0;

        while(count  < index) {
            previous = current;
        }
}
    //Print List
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirstNode(100);
ll.insertFirstNode(200);
ll.insertFirstNode(300);


ll.insertLast(400);
ll.printListData();
