const blogItems = [
    {
        href: "#",
        image: "./public/images/blog1.png",
        tag: "Дизайн Кухни",
        title: "Создадим лучший макет перепланировки",
        text: "",
        date: "26 декабря, 2022"
    },
    {
        href: "#",
        image: "./public/images/blog2.png",
        tag: "Дизайн для жизни",
        title: "Лучшие интерьерные идеи по низкой цене",
        text: "",
        date: "22 декабря, 2022"
    },
    {
        href: "#",
        image: "./public/images/blog3.png",
        tag: "Дизайн Интерьера",
        title: "Лучшие интерьерные решения для офисов",
        text: "",
        date: "25 декабря, 2022"
    },
    {
        href: "#",
        image: "./public/images/blog4.png",
        tag: "Дизайн Кухни",
        title: "Создадим лучший макет перепланировки",
        text: "",
        date: "26 декабря, 2022"
    },
    {
        href: "#",
        image: "./public/images/blog5.png",
        tag: "Дизайн для жизни",
        title: "Лучшие интерьерные идеи по низкой цене",
        text: "",
        date: "22 декабря, 2022"
    },
    {
        href: "#",
        image: "./public/images/blog6.png",
        tag: "Дизайн Интерьера",
        title: "Лучшие интерьерные решения для офисов",
        text: "",
        date: "25 декабря, 2022"
    },
    {
        href: "#",
        image: "./public/images/blog_new.png",
        tag: "Дизайн Интерьера",
        title: "Low Cost Latest Invented Interior Designing Ideas",
        text: "С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов. Перед появлением электронных издательств дизайнеры импровизировали в работе над макетами, изображая текст при помощи волнистых линий. С появлением самоклеющихся наклеек с напечатанным текстом «Lorem ipsum» появился более реалистичный способ обозначения расположения текста на странице.",
        date: "26 декабря, 2022"
    },
]

const blogApp = {
    data() {
        return {
            title: "Статьи & Новости",
            preTitle: "Хорошо известно, что читатель будет отвлекаться на читабельный контент страницы",
            items: blogItems,
        }
    },
    computed: {
        lastItem() {
            return this.items[this.items.length - 1]
        }
    }
}

Vue.createApp(blogApp).mount("#blog_page_app")
Vue.createApp(blogApp).mount("#blog_items_app")
Vue.createApp(blogApp).mount("#blog_latest_app")