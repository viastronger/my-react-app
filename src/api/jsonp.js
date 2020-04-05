import jsonp from 'jsonp'

export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            jsonp(options.url, {
                param: 'callback'
            }, (err, res) => {
                
            })
        })
    }
} 