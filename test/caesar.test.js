// Write your tests here!
const expect = require("chai").expect
const {caesar} = require('../src/caesar.js')

describe('caesar', () => {
    it('Test 1', () => {
        let actual = caesar("thinkful", 3)
        let expected = 'wklqnixo'
        expect(actual).to.equal(expected)
    })
    it('Test 2', () => {
        let actual = caesar("thinkful", -3)
        let expected = 'qefkhcri'
        expect(actual).to.equal(expected)
    })
    it('Test 3', () => {
        let actual = caesar("This is a secret message!", 8)
        let expected = 'bpqa qa i amkzmb umaaiom!'
        expect(actual).to.equal(expected)
    })
    it('Test 4', () => {
        let actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false)
        let expected = 'this is a secret message!'
        expect(actual).to.equal(expected)
    })
    it('Test 5', () => {
        let actual = caesar("thinkful")
        let expected = false
        expect(actual).to.equal(expected)
    })
    it('Test 6', () => {
        let actual = caesar("thinkful", 99)
        let expected = false
        expect(actual).to.equal(expected)
    })
    it('Test 7', () => {
        let actual = caesar("thinkful", -26)
        let expected = false
        expect(actual).to.equal(expected)
    })
})