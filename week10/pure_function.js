// 1.Pure Function
function addPure(a,b){
    return a+b;
}

console.log('Pure Function:', addPure(1,6));

// 2.Avoid Side Effect
const b=7;
function addSideEffect(a){
    return a+b;
}
console.log('Side Effect', addSideEffect(1));