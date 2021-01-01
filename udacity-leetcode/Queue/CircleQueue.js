class CircleQueue {
    let items = []
    let n = 0
    let head = 0
    let tail = 0

    constructor(size) {
        this.n = size
        this.items = Array(size)
    }

    enqueue(item) {
        if ((this.tail + 1) % this.n === this.head) return false

        this.items[this.tail] = item

        this.tail = (this.tail + 1) % this.n

        return n
    }

    dequeue() {
        if (this.head = this.tail) return null
        let result = this.items[this.head]
            ++this.head
        return result
    }
}