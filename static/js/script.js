import {blogItems} from "./modules/inputData.js";
import {parseDate} from "./modules/functions.js";

const blogApp = {
    data() {
        return {
            title: "Статьи & Новости",
            preTitle: "Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы",
            items: blogItems,
        }
    },
    computed: {
        sortedByDateItems() {
            return this.items.sort((a, b) => {
                return parseDate(b.date) - parseDate(a.date);
            })
        },
        lastItem() {
            return this.sortedByDateItems[0]
        },
    },
}

Vue.createApp(blogApp).mount("#blog_page_app")
Vue.createApp(blogApp).mount("#blog_items_app")
Vue.createApp(blogApp).mount("#blog_latest_app")