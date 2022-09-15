<script setup>
import BotChatTextBox from '../components/BotChatTextBox.vue'
import UserChatTextBox from '../components/UserChatTextBox.vue'
</script>

<template>
    <div
        ref="chatbot"
        class="flex flex-col lg:h-[650px] lg:w-[600px] md:mx-auto md:w-[500px] min-w-[280px] h-[500px] sm:mx-16 mx-4 border rounded-xl bg-opacity-80 bg-sky-100 overflow-auto"
        :class="
            open
                ? 'flex lg:bg-inherit transform origin-top-right transition duration-300 fade-in-out h-full bg-opacity-90'
                : ''
        "
    >
        <div
            class="px-4 flex justify-between items-center border-b border-slate-300 w-full"
        >
            <p class="pt-6 lg:pt-0 text-left">FIPUbot - ask me anything</p>
            <!-- <img src="../assets/hamburgerIcon.svg" alt="" width="30" class="" /> -->
            <div class="lg:hidden flex">
                <button
                    class="px-6 py-3 rounded font-extrabold text-white"
                    @click="toggle"
                >
                    <svg
                        class="absolute h-5 w-5 transform transition duration-1000 ease-in-out"
                        :class="open ? 'hidden' : 'open'"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>

                    <svg
                        class="absolute close fill-current h-5 w-5 transition duration-1000 ease-in-out"
                        :class="open ? 'close' : 'hidden'"
                        height="18px"
                        version="1.1"
                        viewBox="0 0 14 14"
                        width="18px"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <title />
                        <desc />
                        <defs />
                        <g>
                            <g
                                fill="black"
                                id="Core"
                                transform="translate(-341.000000, -89.000000)"
                            >
                                <g
                                    id="close"
                                    transform="translate(341.000000, 89.000000)"
                                >
                                    <path
                                        d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z"
                                        id="Shape"
                                    />
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
            <div
                class="pt-[20px] lg:pt-0 lg:mb-6 text-l lg:flex lg:text-l font-semibold items-start lg:items-center"
                :class="open ? 'block absolute right-0 pr-4 pt-24' : 'hidden'"
            >
                <div class="lg:flex lg:space-x-12">
                    <div>
                        <button
                            class="flex flex-row hover:font-bold mt-5 lg:bg-slate-300 lg:rounded-2xl lg:p-2 lg:place-self-center"
                            @click="closeMenu() + clearChat()"
                        >
                            Clear chat
                            <img
                                src="/src/assets/delete-chat.jpg"
                                class="w-4 ml-2"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-start pt-28">
            <BotChatTextBox :message="welcomeMsg" />
        </div>
        <div v-for="(message, i) of store.messages" :key="i">
            <div class="flex justify-start">
                <BotChatTextBox
                    :message="message.msg"
                    v-if="message.author === 'server'"
                />
            </div>
            <div class="flex justify-end">
                <UserChatTextBox
                    :message="message.msg"
                    v-if="message.author === 'client'"
                />
            </div>
        </div>

        <div class="flex space-x-4 justify-center mb-6">
            <textarea
                v-model="store.clientMessage"
                @keyup.enter.down="sendMessage"
                maxlength="100"
                minlength="2"
                placeholder="Message..."
                class="md: w-3/4 rounded-xl resize-none max-h-[50px] px-2 mt-1"
                :disabled="isActive"
            ></textarea>

            <button @click="sendMessage">
                <img
                    src="../assets/send-btn.png"
                    alt="send-button"
                    width="20"
                    max-width="50"
                />
            </button>
        </div>
    </div>
</template>

<script>
import { getAnswer } from '../services'
import { store } from '../store.js'
export default {
    name: 'chatComponent',
    data() {
        return {
            open: false,
            welcomeMsg:
                'Bok ja sam FIPUbot! Tu sam ukoliko imaš pitanja u vezi fakulteta.',
            isActive: false,
        }
    },
    methods: {
        closeMenu() {
            this.open = false
        },
        toggle() {
            this.open = !this.open
        },
        async sendMessage() {
            // function for sending a message
            this.isActive = true
            if (store.clientMessage.length < 3) {
                store.clientMessage = ''
                this.isActive = false
                return alert('Blank or too short message!')
            } else {
                await getAnswer
                    .getMessage(store.clientMessage.toLowerCase())
                    .then((res) => {
                        store.messages.push({
                            msg: store.clientMessage,
                            author: 'client',
                        })
                        store.clientMessage = ''

                        console.log(res.data)
                        store.messages.push({
                            msg: res.data,
                            author: 'server',
                        })
                        this.isActive = false
                    })
                    .catch((e) => {
                        console.error(e)
                        alert(e)
                        store.clientMessage = ''
                        this.isActive = false
                    })
                this.$nextTick(() => {
                    this.$refs.chatbot.scrollTop =
                        this.$refs.chatbot.scrollHeight
                })
            }
        },
        clearChat() {
            // doesn't call function if chat is already cleared.
            if (store.messages.length < 1) {
                return 0
            } else {
                store.messages = []
            }
        },
    },
}
</script>
