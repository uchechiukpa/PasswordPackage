export const getRandom = (number: number) => {
    const myRandom = Math.floor(Math.random() * number);
    return myRandom
    // return myRandom < 3 ? myRandom + 3 : myRandom
}