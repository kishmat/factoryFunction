// creating object using factory Object method.
const Player = (name, team) =>  {
    const info = () => `${name} plays from ${team}.`
    return {info};
}

const p1 = Player("Abd",'RCB')
console.log(p1.info())