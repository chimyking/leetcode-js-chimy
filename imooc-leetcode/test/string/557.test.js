import revertByWord from '../../code/string/557';

test('1: Let\'s take LeetCode contest ',()=>{
    expect(revertByWord("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc");
})

test('2: i am  chimy ',()=>{
    expect(revertByWord("i am chimy")).toBe("ymihc ma i");
})

test('3: abc',()=>{
    expect(revertByWord("abc")).toBe("cba");
})