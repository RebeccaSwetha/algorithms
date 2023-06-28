class Node {
    constructor (data, next = null){
        this.data = data;
        this.next = next;
    }
}

//Traversal
const printList = (head) => {
    let current = head;
    let sum = 0;
    while(current) {
        //console.log(current.data);
        sum = sum + current.data;
        
        current = current.next;
        //sum = sum + current.data;
    }
    console.log(sum);

}




/* class LinkedList{
    constuctor() {
        this.head = head;
    }
    //PrintList
    printList() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
*/

const a = new Node (2);
const b = new Node (5);
const c = new Node (8);
const d = new Node (3);


a.next = b; 
b.next = c;
c.next = d;
 
//const ll = new LinkedList();
//ll.printList();
printList(a);

