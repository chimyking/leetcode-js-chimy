class ArrayQueue {
    let items = []
    let n = 0
    let head = 0
    let tail = 0

    constructor(size) {
        this.n = size
        this.items = Array(size)
    }

    enqueue(item) {
        if (this.tail === n) {
            return false
        }
        this.items[this.tail] = item
            ++this.tail
        return true
    }

    dequeue() {
        if (this.head = this.tail) return null
        let result = this.items[this.head]
            ++this.head
        return result
    }
}