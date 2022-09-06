// 1 Red: Write a failing test

var assert=require("assert");
const factorialize=require("./Factorial");
describe("factorialize",()=>{
// test 1
it("test1",()=>{
assert.equal(factorialize(1), 1); })
// Test 2

it("test2",()=>{
assert.equal(factorialize(2), 2); })   

// test 3
it("test3",()=>{
assert.equal(factorialize(3), 6); })   

// test 4
it("test4",()=>{
assert.equal(factorialize(4 ),24); })   

// test 5
it("test5",()=>{
assert.equal(factorialize(5), 120); })
})   
