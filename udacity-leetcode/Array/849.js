// 在一排座位（ seats） 中， 1 代表有人坐在座位上， 0 代表座位上是空的。

// 至少有一个空座位， 且至少有一人坐在座位上。

// 亚历克斯希望坐在一个能够使他与离他最近的人之间的距离达到最大化的座位上。

// 返回他到离他最近的人的最大距离。

// 示例 1：

// 输入：[1, 0, 0, 0, 1, 0, 1]
// 输出： 2
// 解释：
// 如果亚历克斯坐在第二个空位（ seats[2]） 上， 他到离他最近的人的距离为 2。
// 如果亚历克斯坐在其它任何一个空位上， 他到离他最近的人的距离为 1。
// 因此， 他到离他最近的人的最大距离是 2。
// 示例 2：

// 输入：[1, 0, 0, 0]
// 输出： 3
// 解释：
// 如果亚历克斯坐在最后一个座位上， 他离最近的人有 3 个座位远。
// 这是可能的最大距离， 所以答案是 3。
// 提示：
//     1.1 <= seats.length <= 20000
//     2.seats 中只含有 0 和 1， 至少有一个 0， 且至少有一个 1。

/**
 * 
 * 如有人坐下，记录下标，继续往后走
 * 如果依然有人坐，更新以上下标
 * 
 * 如果没人坐，设置为临时座位，继续往后走，
 * 
 * 
 * 
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    // 边界
    if (!seats || !Array.isArray(seats) || seats.length === 0) {
        return -1
    }
    let length = seats.length

    let resultIndex = 0
    let maxStep = 0

    let lastSeated = 0
    let i = 0
    while (i < length) {
        if (seats[i] === 1) {
            if (lastSeated === 0) {
                lastSeated = i
            } else {
                // 偶数取中，奇数取前
                if ((i + lastSeated) % 2 === 0) {

                    let step = (i - lastSeated) / 2
                    if (step > maxStep) {
                        resultIndex = (i + lastSeated) / 2
                        maxStep = step
                    }
                } else {
                    // 两个情况 取前
                    let step = Math.floor((i - lastSeated) / 2)
                    if (step > maxStep) {
                        resultIndex = Math.floor((i + lastSeated) / 2)
                        maxStep = step
                    }
                }

            }
        }
        i++
    }
    return resultIndex
}