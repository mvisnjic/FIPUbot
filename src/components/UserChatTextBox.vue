<template>
    <div class="p-6 w-4/6 m-2 border break-all bg-white rounded-xl">
        <div class="text-xl text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            porro architecto nobis repellendus error quod. Vel at culpa
            dignissimos laborum laboriosam voluptatem. Quasi sint autem iste
            sequi earum reprehenderit nesciunt? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Possimus porro architecto nobis repel
        </div>
        <div class="border-t">{{ hour }} : {{ minutes }}</div>
    </div>
</template>

<script>
export default {
    name: 'UserChatTextBox',
    data() {
        return {
            hour: new Date().getHours(),
            minutes: new Date().getMinutes(),
        }
    },
}
</script>
