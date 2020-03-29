const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/databases/connection')

describe('ong',() => {
    beforeEach( async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(() => {
        connection.destroy()
    })

    it('should be able create a new ong', async () => {
        const response =  await request(app).post('/ongs').send({
            name: 'Hello',
            email: 'edas@rs.com',
            whatsapp: '55127654321',
            city: 'rio de janeiro',
            uf: 'rj'
        })

        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})