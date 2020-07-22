const Animal = (name) => {
    const info = () => `This is ${name}`
    const added = () => `If all object checking`
    return {info,added}
}

const Cow = (name) => {
    const all = Animal(name) //inheritated
    const farm = () => `it gives milk`
    console.log(all)
    console.log({farm})
    return Object.assign({},all,{farm}) // if we want to inherit all
    //Object.assign actually add two object.
} 

const c1 = Cow('Moti')
console.log(c1.info())
console.log(c1.farm())
console.log(c1.added())

// this is great as it allows us to pick the feature we want to add in child
// no mandatory


