const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1b3e89b8818599fd3d23d98a154f9850/' + latitude + ',' + longitude + ''

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callack('Unable to find location')
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain. The high and low will be '+body.daily.data[0].temperatureHigh+' and '+body.daily.data[0].temperatureLow)
        }
    })
}



module.exports = forecast