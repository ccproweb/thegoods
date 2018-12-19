const BSTNode = require("./BSTNode.js");

module.exports = class BST
{
    //this bst puts values less than or equalto to the left
    constructor()
    {
        this.root = null;
        this.size = 0;
    }

    isEmpty()
    {
        return this.size === 0;
    }

    add(val)
    {
        let newNode = new BSTNode(val);
        if(this.isEmpty())
        {
            this.root = newNode;
        }else{
            let parent = this.root;
            let runner = this.root;
            while(runner)
            {
                parent = runner;
                runner = newNode.data >= runner.data ? runner.right : runner.left;
            }
            if(parent.data >= newNode.data)
            {
                parent.left = newNode;
            }else{
                parent.right = newNode;
            }
        }        
        this.size++;
        return this;
    }

    displayStats()
    {
        console.log(
            `
            BST of size: ${this.size}
            Root Node: ${this.isEmpty()?this.root.display:"newp"}
            Height: ${0}
            `
        )
    }
}