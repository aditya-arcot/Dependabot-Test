// eslint-disable-next-line no-console
console.log('inside index file')

export const getTime = () => {
    return new Date().toLocaleTimeString()
}
