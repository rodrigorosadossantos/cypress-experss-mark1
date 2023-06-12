///<reference types="cypress"/>

//import{faker} from'@faker-js/faker'

describe('tarefas', ()=> {

    it('deve cadastrar uma nova tarefa', ()=>{

        const taskName = 'Ler um livro de node.js'

        cy.removeTaskByName(taskName)
        cy.createTask(taskName)

       cy.contains('main div p', 'taskName')  
         .should('be.visible')  

    })

    it('Naõ deve permitir tarefa duplicada',()=> {

        const task = {
            name: 'Estudar javascript',
            is_done: false
        }

        cy.removeTaskByName(task.name)
        cy.postTask(task)
        cy.createTask(task.name)

      cy.get('.swal2-html-container')
        .should('be.visible')
        .should('have.text', 'Task already exists!')


    })

    it('campo obrigatório', ()=> {
        cy.createTask()
    })
  
})

