<template>
    <div class="p-6 w-4/6 m-2 border bg-blue-400 rounded-2xl">
        <div class="text-l lg:text-lg text-black text-left break-words">
            {{ message }}
        </div>
        <div class="border-t border-sky-500 text-black">
            {{ hour }} : {{ minutes }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserChatTextBox',
    props: ['message'],
    data() {
        return {
            hour: new Date().getHours(),
            minutes: this.checkMinutes(),
        }
    },
    methods: {
        checkMinutes() {
            // because new Date().getMinutes() function return single digits numbers without a zero in ahead of
            let minutes = new Date().getMinutes()
            if (minutes >= 0 && minutes <= 9) {
                return '0' + minutes
            } else return minutes
        },
    },
}
</script>
