import axios from 'axios'

const fipubotAPI = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    timeout: 10000,
})

let getAnswer = {
    getMessage(message) {
        return fipubotAPI.get(`/getanswer/${message}`)
    },
}

let sendMail = {
    send(fullname, email, subject, message) {
        return fipubotAPI.post(
            `/sendmail?fullname=${fullname}&sender=${email}&recipient=visnjicmatej@gmail.com&message=${message}&title=${subject}`
        )
    },
}

export { fipubotAPI, getAnswer, sendMail }
