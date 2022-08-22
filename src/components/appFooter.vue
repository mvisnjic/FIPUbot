<template>
    <div
        class="p-2 bg-opacity-70 bg-sky-100"
        :class="[
            $route.name === 'aboutPage' || $route.name === 'contactPage'
                ? 'bg-sky-700'
                : '',
        ]"
    >
        <ul class="flex justify-center lg:space-x-10">
            <li>
                <a
                    class="inline-block cursor-pointer p-3"
                    href="https://www.facebook.com/matej.visnjic"
                    target="_blank"
                    ><img
                        class="w-5 h-5"
                        src="../assets/face-icon.png"
                        alt="facebook"
                /></a>
            </li>
            <li>
                <a
                    class="inline-block cursor-pointer p-3"
                    href="https://www.linkedin.com/in/matej-vi%C5%A1nji%C4%87-51b273213/"
                    target="_blank"
                    ><img
                        class="w-5 h-5"
                        src="../assets/linked-icon.png"
                        alt="linkedin"
                /></a>
            </li>
            <li>
                <a
                    class="inline-block cursor-pointer p-3"
                    href="https://twitter.com/MatejVisnjic"
                    target="_blank"
                    ><img
                        class="w-5 h-5"
                        src="../assets/twitter-icon.png"
                        alt="twitter"
                /></a>
            </li>
            <li>
                <a
                    class="inline-block cursor-pointer p-3"
                    href="https://github.com/mvisnjic"
                    target="_blank"
                    ><img
                        class="w-5 h-5"
                        src="../assets/github-icon.png"
                        alt="github"
                /></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'appFooter',
}
</script>
