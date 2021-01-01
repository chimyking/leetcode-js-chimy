class Stack {
    size = 0;
    top = -1;
    list = []
    constructor(size) {
        this.size = size;
        this.list = Array(size)
        this.top = 0
    }
    push(item) {
        // 扩充
        if (this.top !== 0 && this.top === this.size) {
            this.list = [...this.list, ...Array(this.size)]
            this.size += this.size
        }
        this.list[++this.top] = item
    }
    pop() {

        console.log('top-', this.top)
        console.log('size-', this.size)
        let value = this.list[this.top]
        console.log('value-', value)
        this.list[this.top] = undefined
        this.top--
        console.log('top-', this.top)
        return value
    }
}


function test() {
    let stack = new Stack(10)

    console.log(stack)

    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.push(5)
    stack.push(6)
    stack.push(7)
    stack.push(8)
    stack.push(9)
    stack.push(10)

    console.log(stack)
    stack.push(11)
    stack.push(12)
    console.log(stack)
    let value = stack.pop()
    console.log(value)
    console.log(stack)
}

test()