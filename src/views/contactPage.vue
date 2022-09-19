<template>
    <div
        class="lg:h-[600px] lg:w-[600px] md:mx-auto md:w-[500px] min-w-[250px] h-fit mx-2 border rounded-xl p-6 my-auto"
    >
        <div class="text-3xl lg:text-4xl font-bold mb-4">Contact me</div>
        <div class="text-l lg:text-xl lg:p-6 p-5 grid">
            <input
                class="border-b-2"
                type="fullname"
                autocomplete="fullname"
                placeholder="Full name..."
                required
                minlength="2"
                maxlength="25"
                v-model="fullname"
            />
        </div>
        <div class="text-l lg:text-xl lg:p-6 p-5 grid">
            <input
                class="border-b-2"
                type="email"
                autocomplete="email"
                placeholder="Email..."
                required
                maxlength="31"
                v-model="email"
            />
        </div>
        <div class="text-l lg:text-xl lg:p-6 p-5 grid">
            <input
                class="border-b-2"
                type="subject"
                autocomplete="subject"
                placeholder="Subject"
                maxlength="20"
                required
                v-model="subject"
            />
        </div>
        <div class="text-l lg:text-xl lg:p-6 p-5 grid">
            <textarea
                class="border-b-2 resize-none"
                name="message"
                placeholder="Message..."
                required
                minlength="15"
                maxlength="500"
                rows="4"
                v-model="message"
            />
        </div>
        <div>
            <button
                id="sendBtn"
                class="bg-sky-700 hover:bg-gray-700 text-white rounded-2xl text-center lg:px-32 md:px-24 px-16 py-2"
                type="submit"
                @click.prevent="sendMail()"
                :disabled="sendBtnClicked"
            >
                Send
            </button>
        </div>
    </div>
</template>

<script>
import { sendMail } from '../services'
export default {
    name: 'contactPage',
    data() {
        return {
            fullname: '',
            email: '',
            subject: '',
            message: '',
            sendBtnClicked: false,
        }
    },
    methods: {
        sendMail() {
            this.sendBtnClicked = true
            sendMail
                .send(this.fullname, this.email, this.subject, this.message)
                .then(() => {
                    this.fullname = ''
                    this.email = ''
                    this.subject = ''
                    this.message = ''
                    alert(
                        'E-mail sent! Thank you, I will respond you soon.\n :)'
                    )
                })
                .catch((e) => {
                    this.sendBtnClicked = false
                    console.error(e)
                    alert(e, +'\nTry again!')
                })
        },
    },
}
</script>
