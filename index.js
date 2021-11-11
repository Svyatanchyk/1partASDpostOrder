class Node {
   constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
   }
}

class BinarySearchTree {
   constructor() {
      this.root = null;
   }

   add(value) {
      const newNode = new Node(value);
      if (!this.root) {
         this.root = newNode;
         return;
      }

      let currentNode = this.root;

      while (currentNode) {
         if (newNode.value < currentNode.value) {

            if (!currentNode.left) {
               currentNode.left = newNode;
               return
            }

            currentNode = currentNode.left;
         } else {
            if (!currentNode.right) {
               currentNode.right = newNode;
               return
            }

            currentNode = currentNode.right;
         }
      }
   }

   preOrder(node, cb) {
      if (!node) {
         return;
      }

      if (cb) {
         cb(node)
      }

      this.preOrder(node.left, cb)
      this.preOrder(node.right, cb)
   }

   inOrder(node, cb) {
      if (!node) {
         return;
      }

      if (cb) {
         cb(node)
      }

      this.inOrder(node.left, cb)

      if (cb) {
         cb(node)
      }

      this.inOrder(node.right, cb)
   }

   postOrder(node, cb) {
      if (!node) {
         return;
      }

      if (cb) {
         cb(node)
      }

      this.postOrder(node.left, cb)
      this.postOrder(node.right, cb)

      if (cb) {
         cb(node)
      }

   }

   traverseDFS(cb, method) {
      if (method = 'preOrder') {
         return this.preOrder(this.root, cb)
      }

      if (method = 'inOrder') {
         return this.inOrder(this.root, cb)
      }

      return this.postOrder(this.root, cb)
   }
}

const myTree = new BinarySearchTree();

for (let i = 1; i <= 7; i++) {
   const res = prompt('Введите значение', "")
   myTree.add(res)
}

myTree.traverseDFS((node) => {
   console.log(node.value);
}, 'postOrder');
console.log(myTree);

document.body.innerHTML = `
<a href="https://youtu.be/iys-2Pc4SKk?t=72" target="_blank">ВКЛЮЧИТЬ БИТ БОКС МОНСТРА</a>
`;
