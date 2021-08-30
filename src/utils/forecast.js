const request = require('request')

const forecast = (lat,long,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=b5b2e7fcb6aaee01d0c625da3a705df7&query='+lat+','+long
    request({ url: url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error === 0){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,body.current.weather_descriptions[0] + ': It is currently '+ body.current.temperature + ' degrees out. There is a ' + body.current.precip + ' % chance of rain.')
        }
    })
}   

module.exports = forecast