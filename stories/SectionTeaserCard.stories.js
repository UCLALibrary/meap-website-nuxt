import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "SECTION / Teaser / Card",
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
    {
        image: API.image,
        to: "/visit/foo/bat/",
        category: "Gravida",
        title: "Adipiscing Tristique",
        date: "Martius, Fevrier 14, 2021",
        time: "8:00 - 5 pm",
    },
    {
        image: API.image,
        to: "/visit/foo/ban/",
        category: "Ullamco",
        title: "Fames ac turpis egestas sed tempus lorem ipsum",
        date: "Mercurii, Ocavia 14, 2021",
        time: "4am - 7:30 pm",
    },
    {
        image: API.image,
        to: "/visit/foo/barf/",
        category: "Curabitur ",
        title: "Vel Quam Elementum",
        date: "Pempti, Mars 14, 2021",
        time: "4am - 7:30 pm",
    },
    {
        image: API.image,
        to: "/visit/foo/bad/",
        category: "Sagittis",
        title: "Aenean Lectus Elit",
        date: "Augustus, Avril14, 2021",
        time: "3:23pm - 12:45 pm",
    },
    {
        image: API.image,
        to: "/visit/foo/bag/",
        category: "Tortor",
        title: "Vivamus Consectetuer Risus et Tortor",
        date: "Martius, Fevrier 14, 2021",
        time: "8:00 - 5 pm",
    },
    {
        image: API.image,
        to: "/visit/foo/bam/",
        category: "Maecenas",
        title: "Proin ut Ligula vel Nunc Egestas Porttitor",
        date: "Mercurii, Ocavia 14, 2021",
        time: "4am - 7:30 pm",
    },
]

// Variations of stories below
export const Default = () => ({
    data() {
        return { items: mock }
    },
    template: `
      <section-teaser-card
        :items="items"
      />
  `,
})