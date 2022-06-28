import ImpactNumbersCarousel from '~/components/flexible/ImpactNumbersCarousel.vue'


export default {
    title: "Impact Numbers Carousel",
    component: ImpactNumbersCarousel,
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: `<impact-numbers-carousel v-bind="$props" />`
})

export const Default = Template.bind({})

Default.args = {
    blocks: [
        {
            largeText: '10',
            mediumText: 'millon',
            smallDescriptor: 'dollars in funding allocated for the procurement of digital and print material', 
            imagePath: 'https://i.pinimg.com/originals/02/4b/9f/024b9fee1d4fe6b6939110cc803dfefe.jpg',
            altImageText: 'Image for slide 1',
        },
        {
            largeText: '3.5',
            mediumText: 'millon',
            smallDescriptor: 'dollars in funding allocated for the procurement of digital and print material',
            imagePath: 'http://mynewsla.com/wp-content/uploads/2014/08/MNLA_FilePhotos_UCLAWestwood_0014.jpg',
            altImageText: 'Image for slide 2',
        },
        {
            largeText: '5',
            mediumText: 'bajillion',
            smallDescriptor: 'SMdes 0', 
            imagePath: 'https://www.p2sinc.com/uploads/UCLA-Powell-WH-1.jpg',
            altImageText: 'Image for slide 3'
        },
        {
            largeText: '25',
            mediumText: 'percent',
            smallDescriptor: 'SMdes 1',
            imagePath: 'https://farm7.staticflickr.com/6105/6263912377_bc0ab9d68a_z.jpg',
            altImageText: 'Image for slide 4'
        },
    ]
}

Default.args = {
    blocks: [
        {
            "largeText": "13",
            "mediumText": "Why Care About Sea Turtles?",
            "smallDescriptor": "Sea turtles play vital roles in the health of our oceans and on land.",
            "image": [
                {
                    "id": "18976",
                    "src": "https://static.library.ucla.edu/craftassetstest/images/_fullscreen/sad-turtle-1.jpg",
                    "height": 1706,
                    "width": 2560,
                    "srcset": "https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/sad-turtle-1.jpg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/sad-turtle-1.jpg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/sad-turtle-1.jpg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/sad-turtle-1.jpg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/sad-turtle-1.jpg 2560w",
                    "alt": "Sad turtle 1",
                    "focalPoint": [
                        0.5,
                        0.5
                    ]
                }
            ]
        },
        {
            "largeText": "23",
            "mediumText": "23 gagillion turtles are hurt",
            "smallDescriptor": "They are super sad and hurting. They need help.",
            "image": [
                {
                    "id": "19000",
                    "src": "https://static.library.ucla.edu/craftassetstest/images/_fullscreen/sad-turtle-2.jpeg",
                    "height": 1536,
                    "width": 2560,
                    "srcset": "https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/sad-turtle-2.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/sad-turtle-2.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/sad-turtle-2.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/sad-turtle-2.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/sad-turtle-2.jpeg 2560w",
                    "alt": "Sad turtle 2",
                    "focalPoint": [
                        0.5,
                        0.5
                    ]
                }
            ]
        },
        {
            "largeText": "43",
            "mediumText": "Who wants a turtle with an hourglass figure?",
            "smallDescriptor": "This is just plain sad. :(",
            "image": [
                {
                    "id": "19025",
                    "src": "https://static.library.ucla.edu/craftassetstest/images/_fullscreen/sad-turtle-3.jpeg",
                    "height": 1280,
                    "width": 2560,
                    "srcset": "https://static.library.ucla.edu/craftassetstest/images/_375xAUTO_crop_center-center_none/sad-turtle-3.jpeg 375w, https://static.library.ucla.edu/craftassetstest/images/_960xAUTO_crop_center-center_none/sad-turtle-3.jpeg 960w, https://static.library.ucla.edu/craftassetstest/images/_1280xAUTO_crop_center-center_none/sad-turtle-3.jpeg 1280w, https://static.library.ucla.edu/craftassetstest/images/_1920xAUTO_crop_center-center_none/sad-turtle-3.jpeg 1920w, https://static.library.ucla.edu/craftassetstest/images/_2560xAUTO_crop_center-center_none/sad-turtle-3.jpeg 2560w",
                    "alt": "Sad turtle 3",
                    "focalPoint": [
                        0.5,
                        0.5
                    ]
                }
            ]
        }
    ]
}
