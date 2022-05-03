import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "Media Gallery / Lightbox",
}

const mock = {
    "images": API.images,
}

// Variations of stories below
export const Default = () => ({
    data() {
        return mock
    },
    template: `<media-gallery-lightbox :images="images" />`,
})

export const FirstItem = () => ({
    data() {
        return {
            image: mock,
            captionTitle: mock.title,
            captionText: mock.alt,
        }
    },
    template: `<media-gallery-lightbox :image="image" :captionTitle="caption-title" :caption-text="captionText" :selection-index="0" :n-items="9" />`,
})

export const LastItem = () => ({
    data() {
        return {
            image: mock,
            captionTitle: mock.title,
            captionText: mock.alt,
        }
    },
    template: `<media-gallery-lightbox :image="image" :captionTitle="caption-title" :caption-text="captionText" :selection-index="3" :n-items="4" />`,
})

export const OnlyItem = () => ({
    data() {
        return {
            image: mock,
            captionTitle: mock.title,
            captionText: mock.alt,
        }
    },
    template: `<media-gallery-lightbox :image="image" :captionTitle="caption-title" :caption-text="captionText" />`,
})