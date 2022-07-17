<script setup>
import BotChatTextBox from './BotChatTextBox.vue'
import UserChatTextBox from './UserChatTextBox.vue'
</script>

<template>
    <div
        class="lg:h-[600px] lg:w-[600px] md:mx-auto md:w-[500px] min-w-[280px] h-[500px] mx-2 border rounded-xl bg-opacity-95 bg-[#6ECFF6] overflow-auto"
    >
        <div class="p-4 flex justify-between border-b border-slate-300">
            <p class="">FIPUbot - ask me anything</p>
            <!-- <img src="../assets/hamburgerIcon.svg" alt="" width="30" class="" /> -->
            <div class="lg:hidden flex">
                <button
                    class="px-6 py-3 rounded font-extrabold text-white"
                    @click="toggle"
                >
                    <svg
                        class="h-5 w-5 transform transition duration-1000 ease-in-out"
                        :class="open ? 'hidden' : 'open'"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>

                    <svg
                        class="fill-current h-5 w-5 transition duration-1000 ease-in-out"
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
                :class="open ? 'block ' : 'hidden'"
            >
                <div class="lg:flex lg:space-x-12">
                    <div>
                        <button
                            class="hover:font-bold mb-2 lg:bg-slate-300 lg:rounded-full lg:p-1 lg:place-self-center"
                            @click="closeMenu"
                        >
                            Clear chat
                        </button>
                    </div>
                    <div>
                        <button
                            @click="closeMenu"
                            class="hover:font-bold lg:bg-slate-300 lg:rounded-full lg:p-1 lg:place-self-center"
                        >
                            Restart FIPUbot
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="text-xl p-6 text-left overflow-y-auto">
            Bok ja sam FIPUbot! Tu sam ukoliko imaš pitanja u vezi fakulteta.
        </div> -->
        <div class="flex justify-start">
            <BotChatTextBox />
        </div>
        <div class="flex justify-end">
            <UserChatTextBox />
        </div>
        <div class="flex space-x-4 justify-center mb-6">
            <textarea
                name="message"
                id="message"
                required
                minlength="5"
                placeholder="Message..."
                class="md: w-3/4 rounded-xl resize-none max-h-[50px] px-2 mt-1"
            ></textarea>
            <button>
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
export default {
    name: 'chatComponent',
    data() {
        return {
            open: false,
        }
    },
    methods: {
        closeMenu() {
            this.open = false
        },
        toggle() {
            this.open = !this.open
        },
    },
}
</script>
