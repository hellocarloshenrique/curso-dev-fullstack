
const Main = {

    tasks: [],
    //esta funcao vai ficar responsavel de chamar
    //as funcoes que forem criadas
    init: function() {
        this.cacheSelectors()
        this.bindEvents()
        this.getStoraged()
        this.buildTasks()
    },

    //essa funcao e responsavel apenas por 
    // selecionar os elementos e armazenar numa variavel.
    cacheSelectors: function() {
        this.$checkButtons = document.querySelectorAll('.check') 
        this.$inputTask = document.querySelector('#inputTask')
        this.$list = document.querySelector('#list')
        this.$removeButtons = document.querySelectorAll('.remove')
        
    },

    bindEvents: function() {
        const self = this

        this.$checkButtons.forEach(function(button) {
            button.onclick = self.Events.checkButtons_click
        });

        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)

        this.$removeButtons.forEach(function(button) {
            button.onclick = self.Events.removeButton_click.bind(self)
        
        }) 
    },

    getStoraged: function() {
        const tasks = localStorage.getItem('tasks')

        this.tasks = JSON.parse(tasks)
    },

    //Guardar o texto da task que vamos reutilizar durante o code
    getTaskHtml: function(task) {
        return `
            <li>
                <div class="check"></div>
                <label class="task">
                    ${task}
                </label>
                <button class="remove" data-task="${task}"></button>
            </li>
        `
    },

    buildTasks: function() {
        let html = ''
        this.tasks.forEach(item => {
           html += this.getTaskHtml(item.task)
        })

        this.$list.innerHTML = html

        this.cacheSelectors()
        this.bindEvents()
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
                this.$list.innerHTML += this.getTaskHtml(value)

                e.target.value = ''

                this.cacheSelectors()
                this.bindEvents()

                const savedTaks = localStorage.getItem('tasks')
                const savedTaksObj = JSON.parse(savedTaks)

                const obj = [
                    { task: value },
                    ...savedTaksObj,
                ]

                localStorage.setItem('tasks', JSON.stringify(obj))
            }
        },

        removeButton_click: function(e) {
            const li = e.target.parentElement
            const value = e.target.dataset['task']

            

            const newTaskState = this.tasks.filter(item => item.task !== value)

            // console.log(newTaskState);
            localStorage.setItem('tasks',  JSON.stringify(newTaskState))   

            li.classList.add('removed')

            setTimeout(function() {
                li.classList.add('hidden')
            },300)
        }
    }

}

Main.init()