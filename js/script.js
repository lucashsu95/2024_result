// <!-----------------------main Start-->
var flag = "";
var flag2 = 1;
// const root = document.documentElement;
let oldTop = 0;
window.onscroll = () => {
    var nowTop = document.documentElement.scrollTop;
    if (nowTop > oldTop) {
        document.querySelector("nav").classList.add("nav_active");
    } else {
        document.querySelector("nav").classList.remove("nav_active");
    }
    oldTop = nowTop;
};

// <!-----------------------Vue Start-->
const app = Vue.createApp({
    data() {
        return {
            text_h: "",
            text_content: "",
            Lsum: 0,
            select_value: "減脂系列",
            shopingCart_toggle_img: "<i class='bi bi-cart4'></i>",
            select_container: ["減脂系列", "增肌系列", "豪華系列"],
            slide_id: 0,
            slide: [{
                title: "什麼是人工智慧？",
                english: "What is Artificial Intelligence?",
                content: `人工智慧是模擬人類智慧的科技領域，通過機器學習、深度學習等技術實現。它使機器能夠學習、理解、推理和解決問題，應用範疇涵蓋自動駕駛、醫療診斷等多領域。`,
                color: "#7da9d5d9",
                class: "btn-outline-danger",
            },
            {
                title: "常見的AI應用",
                english: "Common Applications of AI",
                content: `人工智慧在日常生活中有著廣泛應用，包括智能助手、影像辨識、語音辨識等。智能助手如Siri和Alexa，以及影像辨識軟體如OpenCV，都是AI技術的實際應用。`,
                color: "#c3c076",
                class: "btn-outline-success",
            },
            {
                title: "AI軟體工具介紹",
                english: "Introduction to AI Software Tools",
                content: "AI的發展得益於多種軟體工具，如TensorFlow、PyTorch、NLTK等。這些工具提供了建立和訓練機器學習模型所需的功能，推動了AI技術的快速發展。",
                color: "#d3a5a5",
                class: "btn-outline-info",
            },
            {
                title: "AI的未來展望",
                english: "The Future of AI",
                content: `人工智慧的未來將不斷演進，應用領域將擴展至更多行業。自動駕駛、醫療診斷、環境監測等將成為AI技術的重要應用，為社會帶來更多的便利和創新。`,
                color: "#b1aacb",
                class: "btn-outline-info",
            },
            ],
            contests: [
                {
                    title: '2021北區程式設計競賽',
                    imgs: ['20211107_074311.jpg', '20211107_131426.jpg'],
                    date: '2021-11-07',
                    rank: '佳作',
                },
                {
                    title: '2022全國技能競賽',
                    imgs: ['20220421_143055.jpg', '20220421_143146.jpg'],
                    date: '2022-04-21',
                    rank: '佳作',
                },
                {
                    title: '2022鶑歌陪訓賽',
                    imgs: ['20221119_081055.jpg', '20221119_081737.jpg', '20221119_082645.jpg', '20221119_082655.jpg', '20221119_105345.jpg'],
                    date: '2022-11-19',
                },
                {
                    title: '2023景文專題',
                    imgs: ['20230317_134334.jpg', '20230317_134520.jpg', '20230317_134650.jpg', '20230317_151152.jpg', '1682495526161.jpg', '1682495587327.jpg'],
                    date: '2023-03-17',
                    rank: '第五名',
                },
                {
                    title: '2023全國技能競賽-區賽',
                    imgs: ['20230323_114708.jpg', '20230323_114710.jpg', '20230323_114711.jpg'],
                    date: '2023-03-23',
                    rank: '第四名',
                },
                {
                    title: '2023專題複賽',
                    imgs: ['20230331_134314.jpg'],
                    date: '2023-03-31',
                    rank: '優勝',
                },
                {
                    title: '2023全國專題',
                    imgs: ['20230504_181251.jpg', '20230505_151030.jpg', '20230505_152146.jpg', '20230505_152229.jpg', '20230505_152430.jpg', '20230506_102212.jpg'],
                    date: '2023-05-04',
                    rank: '',
                },
                {
                    title: '2023全國技能競賽-全國賽',
                    imgs: ['20230713_102652.jpg', '20230715_085628.jpg', '20230715_085645.jpg', '20230715_085653.jpg'],
                    date: '2023-07-13',
                    rank: '佳作',
                },
                {
                    title: '2023TQC比賽',
                    imgs: ['20231014_134136.jpg', '20231014_134208.jpg', '20231014_134234.jpg'],
                    date: '2023-10-14',
                    rank: '北區第二',
                },
                {
                    title: '2023鶑歌陪訓賽',
                    imgs: ['20231028_083318.jpg', '20231028_083347.jpg', '20231028_083440.jpg', '20231028_091738.jpg', '20231028_132853.jpg', '20231028_132858.jpg', '20231028_154944.jpg'],
                    date: '2023-10-28',
                    rank: '',
                },
                {
                    title: '112全國技藝競賽',
                    imgs: ['LINE_ALBUM_20231130_231201_7.jpg', 'LINE_ALBUM_20231130_231201_2.jpg', 'LINE_ALBUM_20231130_231201_10.jpg'],
                    date: '2023-11-30',
                    rank: '',
                },
            ],

            current_contest: {},
            userName: "",
            userGmail: "",
            usercontent: "",
            sliderIndexDivs: [],
            currentIndex: 0,
            auto: null,
        };
    },
    mounted() {
        this.current_contest = this.contests[0]
    },
    computed: {},
    methods: {
        fs_footerSubmit() {
            if (
                this.userName != "" &&
                this.userGmail != "" &&
                this.usercontent != ""
            ) {
                this.userName = this.userGmail = this.usercontent = "";
                alert("我們己經接收到您的留言!\r");
            } else {
                console.log("請填完整填寫資料");
            }
        },
        changeCurrentContest(idx) {
            this.current_contest = this.contests[idx];
            this.currentIndex = 0
        },
        prviewImg(title, url) {
            return `images/${title}/${url}`;
        },
        renderSlider() {
            clearInterval(this.auto);
            this.auto = setTimeout(this.changeSlider, 10000);
        },
        changeSlider(flag = 1) {
            this.currentIndex = (this.currentIndex + flag + this.current_contest.imgs.length) % this.current_contest.imgs.length;
            this.renderSlider();
        },
        changeIndex(index) {
            this.currentIndex = index;
            this.renderSlider();
        },
    },
    watch: {
        currentIndex() {
            this.renderSlider();
        },
    },
}).mount("#app");
// <!-------------------------main End------------------------->


// <!-------------------------swiper Start------------------------->

// <!-------------------------swiper End------------------------->