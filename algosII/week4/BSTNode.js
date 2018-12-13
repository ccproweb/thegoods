module.exports = class BSTNode
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    display()
    {
        console.log(`<BSTNode data: ${this.data} left: ${this.left?this.left.data:'empty'} right: ${this.right?this.right.data:'empty'} >`);
        return this;
    }
}
