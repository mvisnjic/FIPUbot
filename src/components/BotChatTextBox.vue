<template>
    <div class="p-6 w-4/6 m-2 bg-gray-300 border rounded-xl">
        <div class="text-l lg:text-xl text-justify break-words">
            {{ message }}
        </div>
        <div class="border-t">{{ hour }} : {{ minutes }}</div>
    </div>
</template>

<script>
export default {
    name: 'BotChatTextBox',
    props: ['message'],
    data() {
        return {
            hour: new Date().getHours(),
            minutes: this.checkMinutes(),
        }
    },
    methods: {
        checkMinutes() {
            let minutes = new Date().getMinutes()
            if (minutes >= 0 && minutes <= 9) {
                return '0' + minutes
            } else return minutes
        },
    },
}
</script>
