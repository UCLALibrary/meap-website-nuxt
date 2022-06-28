<template>
    <impact-numbers-carousel
        class="impact-numbers-carousel"
        :block="block"
    />
</template>

<script>
export default {
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        parsedContent() {
            return this.block.map((obj) => {
                return {
                    ...obj,
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.impact-numbers-carousel {
    border: 3px solid aquamarine;
}
</style>

// "impactNumbersCarousel": [
//     {
//         "largeText": "13",
//         "mediumText": "Why Care About Sea Turtles?",
//         "smallDescriptor": "Marine Biologists know sea turtles are essential for the health of our eco-system. Sea turtles play vital roles in the health of our oceans and on land. Each of the 7 species provides critical activities which has a domino effect on many species in the ocean and the land.",
//         "image": [
//             {
//                 "id": "18976",
//                 "src": "https://static.library.ucla.edu/craftassetstest/images/_fullscreen/sad-turtle-1.jpg",
//                 "height": 1706,
//                 "width": 2560,
//                 "srcset": "https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/sad-turtle-1.jpg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/sad-turtle-1.jpg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/sad-turtle-1.jpg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/sad-turtle-1.jpg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/sad-turtle-1.jpg 2560w",
//                 "alt": "Sad turtle 1",
//                 "focalPoint": [
//                     0.5,
//                     0.5
//                 ]
//             }
//         ]
//     },
//     {
//         "largeText": "23",
//         "mediumText": "23 gagillion turtles are hurt",
//         "smallDescriptor": "They are super sad and hurting and need saving.",
//         "image": [
//         {
//             "id": "19000",
//             "src": "https://static.library.ucla.edu/craftassetstest/images/_fullscreen/sad-turtle-2.jpeg",
//             "height": 1536,
//             "width": 2560,
//             "srcset": "https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/sad-turtle-2.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/sad-turtle-2.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/sad-turtle-2.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/sad-turtle-2.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/sad-turtle-2.jpeg 2560w",
//             "alt": "Sad turtle 2",
//             "focalPoint": [
//             0.5,
//             0.5
//             ]
//         }
//         ]
//     },
//     {
//         "largeText": "43",
//         "mediumText": "Who wants a turtle with an hourglass figure",
//         "smallDescriptor": "This is just plain sad. :(",
//         "image": [
//             {
//                 "id": "19025",
//                 "src": "https://static.library.ucla.edu/craftassetstest/images/_fullscreen/sad-turtle-3.jpeg",
//                 "height": 1280,
//                 "width": 2560,
//                 "srcset": "https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/sad-turtle-3.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/sad-turtle-3.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/sad-turtle-3.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/sad-turtle-3.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/sad-turtle-3.jpeg 2560w",
//                 "alt": "Sad turtle 3",
//                 "focalPoint": [
//                 0.5,
//                 0.5
//                 ]
//             }
//         ]
//     }
// ]
