
const Main = {
    //esta funcao vai ficar responsavel de chamar
    //as funcoes que forem criadas
    init: function() {
        this.cacheSelectors()
        this.bindEvents()
    },

    //essa funcao e responsavel apenas por 
    // selecionar os elementos e armazenar numa variavel.
    cacheSelectors: function() {
        this.$checkButtons = document.querySelectorAll('.check') 
        this.$inputTask = document.querySelector('#inputTask')
        this.$list = document.querySelector('#list')
        
    },

    bindEvents: function() {
        const self = this

        this.$checkButtons.forEach(function(button) {
            button.onclick = self.Events.checkButtons_click
        });

        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)
    },



    Events: {
        checkButtons_click: function(e) {
            const li = e.target.parentElement
            
            const isDone = li.classList.contains('done')
            //usando IF ELSE de forma tradicional
            // if (isDone) {
            //     li.classList.remove('done')
            // } else {
            //     li.classList.add('done')
            // } 

            //essa e outra maneira de fazer if com menos processameneto e usando melhores praticas
            if (!isDone) {
                return li.classList.add('done')
            } 

            li.classList.remove('done')
        },

        inputTask_keypress: function(e) {
            console.log(this);
            
            const key = e.key
            const value = e.target.value

            if (key === 'Enter') {
                this.$list.innerHTML += `
                    <li>
                        <div class="check"></div>
                        <label class="task">
                            ${value}
                        </label>
                        <button class="remove"></button>
                    </li>
                `

                e.target.value = ''
            }
        }
    }

}

Main.init()