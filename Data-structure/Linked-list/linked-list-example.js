function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// to create [1, 2, 4] Linked-list
let list1 = new ListNode(1);
console.log(list1.val);
console.log(list1.next);

list1.next = new ListNode(2);
list1 = list1.next;
console.log(list1.val);
console.log(list1.next);

list1.next = new ListNode(4);
list1 = list1.next;
console.log(list1.val);
console.log(list1.next);

// [3, 2, 0, -4]
let list = new ListNode(3);
list.next = new ListNode(2);
list.next.next = new ListNode(0);
list.next.next.next = new ListNode(-4);
list.next.next.next.next = list.next;
