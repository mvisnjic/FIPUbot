import axios from 'axios'

const fipubotAPI = axios.create({
    baseURL: import.meta.env.VITE_SERVER,
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
