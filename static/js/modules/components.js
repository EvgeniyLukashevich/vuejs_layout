import {getChosenPostId, savePostId} from "./functions.js";

const postCardComponent = {
    props: ["item"],
    methods: {
        saveChosenPostId: savePostId,
    },
    template: `
        <a :href="item.href" @click="saveChosenPostId(item.id)" :key="item.id"
           class="blog-items__item">
            <div class="blog-items__item__image-box">
                <img :src="item.image" :alt="item.tag" class="blog-items__item__image-box__image">
                <div class="blog-items__item__image-box__tags">
                    <p v-for="tag in item.tags">{{tag}} </p>
                </div>
            </div>
            <h3 class="blog-items__item__title">
                {{ item.title }}
            </h3>
            <div class="blog-items__item__bottom-box">
                <p class="blog-items__item__bottom-box__date">
                    {{ item.date }}
                </p>
                <div class="blog-items__item__bottom-box__button fas fa-chevron-right"></div>
            </div>
        </a>
    `
}

const postBigCardComponent = {
    props: ["item"],
    methods: {
        saveChosenPostId: savePostId,
    },
    template: `
    <a :href="item.href" @click="saveChosenPostId(item.id)" class="blog-last-post__item">
        <div class="blog-last-post__item__image-box">
            <img :src="item.image" :alt="item.tag" class="blog-last-post__item__image-box__image">
        </div>


        <div class="blog-last-post__item__text-box">
            <h3 class="blog-last-post__item__text-box__title">
                {{ item.title }}
            </h3>
            <p class="blog-last-post__item__text-box__text">
                {{ item.text }}
            </p>
            <div class="blog-details__post__tags-box__tags">
                <p class="blog-details__post__tags-box__tags__tag" v-for="tag in item.tags"> {{ tag }}</p>
            </div>
            <div class="blog-last-post__item__text-box__bottom-box">
                <p class="blog-last-post__item__text-box__bottom-box__date">
                    {{ item.date }}
                </p>
                <div class="blog-last-post__item__text-box__bottom-box__button fas fa-chevron-right"></div>
            </div>
        </div>
    </a>
    `,
}

const chosenPostComponent = {
    props: ["items"],
    template: `
        <div class="blog-details__post">
            <h3 class="blog-details__post__title">{{ chosenPost.title }}</h3>
            <div class="blog-details__post__image-box">
                <img :src="chosenPost.image" :alt="chosenPost.title" class="blog-details__post__image-box__image">
            </div>
            <div class="blog-details__post__tags-box">
                <p class="blog-details__post__tags-box__date">{{ chosenPost.date }}</p>
                <div class="blog-details__post__tags-box__tags">
                    <p class="blog-details__post__tags-box__tags__tag" v-for="tag in chosenPost.tags"> {{ tag }}</p>
                </div>
            </div>
            <p class="blog-details__post__text">{{ chosenPost.text }}</p>
            <div class="blog-details__post__quote-box">
                <p class="blog-details__post__quote-box__icon fas fa-quote-right"></p>
                <p class="blog-details__post__quote-box__quote ">{{ chosenPost.quote }}</p>
            </div>
        </div>
    `,
    computed: {
        chosenPost() {
            return this.items.find((item) => item.id === getChosenPostId());
        }
    }
}


export {postCardComponent, chosenPostComponent, postBigCardComponent}