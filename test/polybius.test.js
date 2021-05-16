const expect = require("chai").expect
const {polybius} = require('../src/polybius.js')

describe('polybius', () => {
    it('Test 1', () => {
        let actual = polybius("thinkful")
        let expected = "4432423352125413"
        expect(actual).to.equal(expected)
    })
    it('Test 2', () => {
        let actual = polybius("Hello world")
        let expected = '3251131343 2543241341'
        expect(actual).to.equal(expected)
    })
    it('Test 3', () => {
        let actual = polybius("3251131343 2543241341", false)
        let expected = "hello world"
        expect(actual).to.equal(expected)
    })
    it('Test 4', () => {
        let actual = polybius("4432423352125413", false)
        let expected = "th(i/j)nkful"
        expect(actual).to.equal(expected)
    })
    it('Test 5', () => {
        let actual = polybius("44324233521254134", false)
        let expected = false
        expect(actual).to.equal(expected)
    })
})