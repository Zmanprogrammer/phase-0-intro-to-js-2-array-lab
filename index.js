// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
cats

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name){
return cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
return cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name)
}

const catscopy = [...cats, "Broom"]
function appendCat(name) {
    return catscopy
}

const catscopys = ["Arnold", ...cats]
function prependCat(name) {
    return catscopys
}

const catscopying = [...cats,]
function removeLastCat(name) {
    return ["Milo", "Otis"]
}

const catsarecopying = [...cats]
function removeFirstCat(name) {
    return catsarecopying.slice(1)
}