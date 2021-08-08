import { mount } from '@cypress/react'
import { Articles } from '@/components/Articles/index'

const articles = [
  {
    id: '0',
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloremque inventore eum quaerat saepe, corrupti non quibusdam!',
    date: new Date(),
    category: 'category'
  },
  {
    id: '1',
    title: 'Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloremque inventore eum quaerat saepe, corrupti non quibusdam!',
    date: new Date(),
    category: ''
  }
]

describe('Articles component', () => {
  it('should load articles', () => {
    mount(<Articles articles={articles} />)
      .then(() => cy.get('[data-cy=article]'))
      .should('have.length', articles.length)
  })
})