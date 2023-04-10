export default defineEventHandler(async (event) => {
    // const { name } = getQuery(event)

    const data = await $fetch('https://api.currencyapi.com/v3/latest?apikey=SX5oksbByUP2eFPEEPBdPUdxpx0CUguMqQPz5y0m&currencies=EUR%2CUSD%2CCAD')

    return data
})