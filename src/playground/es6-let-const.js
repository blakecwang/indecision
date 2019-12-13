//        can reassign?   can redefine?
// var:   yes             yes
// let:   yes             no
// const: no              no
// - default to using const
// - if you need to reassign, switch to let
// - NEVER use var
// 
// var, let, const => function-scoped
// let, const => block-scoped


var nameVar = 'Blake';
var nameVar = 'George';
nameVar = 'Bill';
console.log('nameVar', nameVar);

let nameLet = 'Cindy';
nameLet = 'Alice';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

if (true) {
  let blockScopeTest = 'Only inside the block'
  nameLet = 'Slagathor';
}
console.log('nameLet', nameLet);

// console.log('blockScopeTest', blockScopeTest);
// ReferenceError: Can't find variable: blockScopeTest
