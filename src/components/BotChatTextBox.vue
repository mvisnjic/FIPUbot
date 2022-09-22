<template>
    <div class="p-6 w-4/6 m-2 bg-gray-300 border rounded-2xl">
        <div class="text-lg lg:text-lg text-left break-words">
            {{ message }}

            <div v-if="urls" class="font-bold border-t border-black mt-2">
                URLs:
                <div v-for="(url, key) in urls" :key="url" class="underline">
                    <a :href="`${url}`" target="_blank"
                        >{{ key + 1 }} - {{ url }}</a
                    >
                </div>
            </div>
        </div>

        <div class="border-t">{{ hour }} : {{ minutes }}</div>
    </div>
</template>

<script>
export default {
    name: 'BotChatTextBox',
    props: ['message', 'urls'],
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
