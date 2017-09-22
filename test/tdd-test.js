const chai = require('chai')
const expect = chai.expect
const pizza = require('../src/tdd')

//submitting this alternative test, since my browser calculator uses methods instead of functions 

describe('math functions', function () {

  it('add is a function', function () {
    expect(pizza.add).to.be.a('function');
  })

  it('add function adds two numbers together', function () {
    expect(pizza.add(2, 3)).to.equal(5);
  })

  it('sub is a function', function () {
    expect(pizza.sub).to.be.a('function');
  })

  it('sub function subtacts one number from another', function () {
    expect(pizza.sub(7, 3)).to.equal(4);
  })

})
