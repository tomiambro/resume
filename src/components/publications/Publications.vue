<script setup>
import { reactive } from 'vue'
import PublicationItem from './PublicationItem.vue'
import { Publication } from './publication.js'

const publications = reactive([
    new Publication(
        'Ensembling Fast.ai Convolutional Neural Network Learners',
        'https://medium.com/@tomi.ambro94/ensembling-fast-ai-convolutional-neural-network-learners-817b827c4934'
    ),
    new Publication(
        'Convolutional Neural Networks & Transfer Learning with PyTorch and Fast.ai',
        'https://medium.com/python-in-plain-english/convolutional-neural-networks-transfer-learning-with-pytorch-and-fast-ai-a0ea4e11a9c5'
    ),
    new Publication(
        'Learning Robot Operative System [ROS] on the fly.',
        'https://medium.com/gitconnected/learning-robotics-operative-system-ffee4366a813'
    ),
    new Publication(
        'Taking Advantage of MongoDB’s ‘Change Streams’ for real-time IoT applications using Node.js',
        'https://medium.com/gitconnected/taking-advantage-of-mongodbs-change-streams-for-real-time-iot-applications-using-nodejs-a0a76ae1376d'
    )
])
</script>

<template>
    <div class="publications mb-5">
        <div class="subclass"><h2 class="green">Publications</h2></div>
        <div v-for="p in publications">
            <PublicationItem :publication="p" />
        </div>
    </div>
</template>

<style scoped>
.publications h1,
.publications h3 {
    text-align: center;
}

@media (min-width: 1024px) {
    .publications h1,
    .publications h3 {
        text-align: left;
    }
}

.publications > div {
    padding: 0 15px;
}
</style>
