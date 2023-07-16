class ListNode{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
      }
    
    push(val){
     let newNode = new ListNode(val)
     
     if(!this.head){
         this.head = newNode
         this.tail = this.head
     } else {
        this.tail.next = newNode
        this.tail = newNode 
      }
      this.length++
      return this
    }
}

const myList = new LinkedList()
// const node1 = new ListNode(6);
// const node2 = new ListNode(10)
// const node3 = new ListNode(5)
myList.push(6)
myList.push(5)
myList.push(10)

console.log(JSON.stringify(myList))

