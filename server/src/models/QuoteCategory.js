import sequelize from '../database/db.js'

const QuoteCategory = sequelize.define(
  'QuoteCategory',
  {
    // No need for any additional attributes in this table
    // Sequalize will create QuoteId and CategoryId fields automatically
  },
  {
    indexes: [
      { name: 'QuoteCategories_CategoryId', fields: ['CategoryId'] },
      { name: 'QuoteCategories_QuoteId', fields: ['QuoteId'] },
    ],
  }
)

export default QuoteCategory
