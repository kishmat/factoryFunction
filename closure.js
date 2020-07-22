const factoryFunction= (text) =>{
    const info = () => text.toUpperCase();
    const desc = () => console.log(`-----${info()}------`)
    return {desc}
}

const world = factoryFunction('hello')

world.desc()

// here desc is const but also it is called outside the block because of 
// closure property in js. closure retain their scope


//factory func create private variables and func.