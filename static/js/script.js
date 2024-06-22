import {blogItems} from "./modules/inputData.js";
import {parseDate, savePostId} from "./modules/functions.js";
import {chosenPostComponent, postBigCardComponent, postCardComponent} from "./modules/components.js";

const blogApp = Vue.createApp({
    data() {
        return {
            title: "Статьи & Новости",
            preTitle: "Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы",
            items: blogItems,
            currentTag: "",
            uniqueTags: [],
        }
    },
    computed: {
        sortedByDateItems() {
            return [...this.items].sort((a, b) => {
                return parseDate(b.date) - parseDate(a.date);
            })
        },
        lastItem() {
            return this.sortedByDateItems[0]
        },
        filteredByTagItems() {
            if (this.currentTag)
                return [...this.items].filter(item => item.tags.includes(this.currentTag))
            else
                return [...this.sortedByDateItems]
        }
    },
    methods: {
        setUniqueTags() {
            const tags = this.items.flatMap(item => item.tags);
            this.uniqueTags = [...new Set(tags)];
        },
        setCurrentTag(tag) {
            if (this.currentTag === tag) {
                this.currentTag = "";
            } else {
                this.currentTag = tag;
            }
        }
    },
    mounted() {
        this.setUniqueTags();
    },
})

blogApp.component("post-card", postCardComponent);
blogApp.component("post-big-card", postBigCardComponent);
blogApp.component("chosen-post", chosenPostComponent)

blogApp.mount("#blog_app")
