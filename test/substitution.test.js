const expect = require("chai").expect
const {substitution} = require('../src/substitution.js')

describe('substitution', () => {
    it('Test 1', () => {
        let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        let expected = 'jrufscpw'
        expect(actual).to.equal(expected)
    })
    it('Test 2', () => {
        let actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        let expected = 'elp xhm xf mbymwwmfj dne'
        expect(actual).to.equal(expected)
    })
    it('Test 3', () => {
        let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
        let expected = 'thinkful'
        expect(actual).to.equal(expected)
    })
    it('Test 4', () => {
        let actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
        let expected = "y&ii$r&"
        expect(actual).to.equal(expected)
    })
    it('Test 5', () => {
        let actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
        let expected = "message"
        expect(actual).to.equal(expected)
    })
    it('Test 6', () => {
        let actual = substitution("thinkful", "short")
        let expected = false
        expect(actual).to.equal(expected)
    })
    it('Test 7', () => {
        let actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
        let expected = false
        expect(actual).to.equal(expected)
    })
})
