import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "SECTION / Teaser / Highlight",
}

const mock = [
    {
        image: API.image,
        to: "/visit/foo/bar/",
        category: "Feugiat",
        title: "Vel Quam Elementum",
        date: "Pempti, Mars 14, 2021",
        time: "4am - 7:30 pm",
    },
    {
        image: API.image,
        to: "/visit/foo/baz/",
        category: "Tincidunt",
        title:
            "Mauris pellentesque pulvinar pellentesque habitant morbi tristique",
        date: "Augustus, Avril 14, 2021",
        time: "3:23pm - 12:45 pm",
    },
]

// Variations of stories below
export const Default = () => ({
    data() {
        return { items: mock }
    },
    template: `
      <section-teaser-highlight
        :items="items"
      />
  `,
})
