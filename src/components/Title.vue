<script setup></script>

<template>
    <div class="title container flex-col lg:flex-row items-center lg:my-6">
        <div class="image crop my-4 lg:my-0">
            <img
                alt="Vue logo"
                class="logo rounded-full"
                src="@/assets/images/picture_resize.jpeg"
                width="160"
                height="160"
            />
        </div>
        <div class="text px-5">
            <h1 class="green">Tomás Horacio Ambrogi</h1>
            <h3>Building software for companies big and small since 2015.</h3>
            <div class="social-icons flex justify-center lg:justify-start my-3 px-0">
                <a class="icon mx-3 lg:mx-3" title="Github" href="https://github.com/tomiambro" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-github" />
                </a>
                <a class="icon mx-3 lg:mx-3" title="Linkedin" href="https://www.linkedin.com/in/tomas-ambrogi/" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-linkedin" />
                </a>
                <a class="icon mx-3 lg:mx-3" title="Testdome certificate" href="https://www.testdome.com/certificates/15b7229d05f444ec9d80d9c8cb68a3e8" target="_blank">
                    <font-awesome-icon icon="fa-solid fa-igloo" />
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.title h1,
.title h3 {
    text-align: center;
}

@media (min-width: 1024px) {
    .title h1,
    .title h3 {
        text-align: left;
    }
}
.title {
    display: flex;
}

.social-icons a {
    color: rgb(72, 72, 72);
    font-size: 1.6rem;
}
</style>
