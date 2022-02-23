Vue.createApp({
    data(){
        return{
            // index.html
            classDark: false,
            iconChange: true,

            // product.html
            selectId: 0,
            products: [{
                id: 'WS-SF101-FG',
                product: 'ソファ二人掛け フレッシュグリーン',
                image: './img/photo06.jpg'
            },
            {
                id: 'WS-SF101-MB',
                product: 'ソファ二人掛け ミッドナイトブルー',
                image: './img/photo06-mb.jpg'
            },
            {
                id: 'WS-SF101-CB',
                product: 'ソファ二人掛け チョコレートブラウン',
                image: './img/photo06-cb.jpg'
            },
        ],

        // contact.html
        name: '',
        kana: '',
        tel: '',
        mail: '',
        post: '',
        address: '',
        caseNo: '',
        content: '',
        alert: false,
        phoneCheck: false,
        failCheck: false,

        }
    },
    methods: {
        // index.html
        toggleDark() {
            this.classDark = !this.classDark
            this.iconChange = !this.iconChange
        },

        // product.html
        toggleGreen() {
            this.selectId = 0
        },
        toggleBlue() {
            this.selectId = 1
        },
        toggleBrown() {
            this.selectId = 2
        },

        // contact.html
        onSubmit() {
            this.alert = false
            this.phoneCheck = false

            if (this.name === '' || this.kana === '' || this.tel === '' || this.mail === '' || this.address === '' || this.caseNo === '' || this.content === '') {
                this.alert = !this.alert
            }
            else if (this.tel.length !=11 || isNaN(Number(this.tel))) {
                this.phoneCheck = !this.phoneCheck
            }

            else {
                // データを格納した後にフォームを初期化
                this.name = ''
                this.kana= ''
                this.tel = ''
                this.mail = ''
                this.post = ''
                this.address = ''
                this.caseNo = ''
                this.content = ''
                this.alert = false
                this.phoneCheck = false
                this.failCheck = true
            }

        }
    },

    computed: {
        // product.html
        id() {
            return this.products[this.selectId].id
        },
        product() {
            return this.products[this.selectId].product
        },
        image() {
            return this.products[this.selectId].image
        },
    }

}).mount('#app')