export const idGen = () => {
    return Math.random().toString(36).slice(1, 10).replace(".", "")
}
