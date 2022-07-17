<template>
    <div class="p-6 w-4/6 m-2 bg-gray-300 border break-all rounded-xl">
        <div class="text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, itaque
            vero delectus voluptatum exercitationem ducimus cum tempora, fuga
            atque aliquam, architecto tenetur doloribus voluptatem deleniti
            autem iure impedit ea repellat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Id, itaque vero delectus voluptatum
        </div>
        <div class="border-t">{{ hour }} : {{ minutes }}</div>
    </div>
</template>

<script>
export default {
    name: 'BotChatTextBox',
    data() {
        return {
            hour: new Date().getHours(),
            minutes: new Date().getMinutes(),
        }
    },
}
</script>
