<template>
    <div
        class="w-full p-6 bg-opacity-70 bg-sky-100 lg:justify-center flex text-xl text-sky-700"
        :class="[
            open
                ? 'absolute flex bg-[#0369A1] lg:bg-inherit transform origin-top-right transition duration-300 fade-in-out h-full bg-opacity-90'
                : '',
            $route.name === 'aboutPage' || $route.name === 'contactPage'
                ? 'bg-sky-700 text-white'
                : '',
        ]"
    >
        <div class="lg:hidden flex">
            <button
                class="flex items-top rounded py-3 font-extrabold text-white mb-2"
                @click="toggle"
            >
                <svg
                    class="open absolute fill-[#0369A1] h-5 w-5 transform transition duration-1000 ease-in-out"
                    :class="open ? 'hidden' : 'open'"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>

                <svg
                    class="absolute fill-current h-5 w-5 transition duration-1000 ease-in-out"
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
                            fill="white"
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
            class="flex pt-[20px] lg:pt-0 lg:mb-6 text-l lg:flex lg:text-l font-semibold"
            :class="open ? 'flex text-left pt-16 text-white ' : 'hidden'"
        >
            <div
                class="lg:flex lg:space-x-12 lg:justify-center"
                :class="open ? 'space-y-4' : 'space-y-0'"
            >
                <div>
                    <button @click="closeMenu">
                        <router-link to="/" class="hover:font-semibold"
                            >Home</router-link
                        >
                    </button>
                </div>
                <div>
                    <button @click="closeMenu">
                        <router-link to="/chatbot" class="hover:font-semibold"
                            >FIPUbot</router-link
                        >
                    </button>
                </div>
                <div>
                    <button @click="closeMenu">
                        <router-link to="/about" class="hover:font-semibold"
                            >About</router-link
                        >
                    </button>
                </div>
                <div>
                    <button @click="closeMenu">
                        <router-link to="/contact" class="hover:font-bold"
                            >Contact</router-link
                        >
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'appHeader',
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
