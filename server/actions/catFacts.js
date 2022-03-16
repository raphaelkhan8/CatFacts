const axios = require('axios')
const { TOKEN } = process.env

const getCatFacts = async () => {
    const config = {
        'accept': 'application/json',
        'X-CSRF-TOKEN': 'JDMVPvPB2z0Y2Xu5NGzxS3bRG5xSJAEMnMivCwPx'
    }

    try {
        const { data } = await axios.get('https://catfact.ninja/facts', config)
        return data
    }
    catch (e) {
        console.error(e)
    }
}

module.exports.getCatFacts = getCatFacts
