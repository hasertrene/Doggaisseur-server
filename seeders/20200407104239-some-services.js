'use strict';
const Cat = require("../models").category;
const Service = require("../models").service;

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const [cat1, cat2, cat3] = await Promise.all([
        Cat.findOne({
          where: { name: "Cleaning" }
        }),
        Cat.findOne({
          where: { name: "Exercise" }
        }),
        Cat.findOne({
          where: { name: "Special treatment" }
        })
      ]);

      return Service.bulkCreate(
        [{
        name: 'Budget wash',
        price: 45,
        description: 'Just a quick wash and a comb',
        imageUrl:'https://icleannaarden.nl/nl/wp-content/uploads/sites/2/2019/06/GoldenRetriever.jpg',
        categoryId: cat1.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Luxury wash',
        price: 60,
        description: 'Bath with special dog aroma and fur styling',
        imageUrl:'https://inleaguercd.org/images/top_60_best_home_dog_wash_station_ideas_-_canine_shower_designs_27.jpg',
        categoryId: cat1.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {        
      name: 'Lunch walk',
      price: 10,
      description: 'An hour of walking around the neighbourhood',
      imageUrl:'https://www.feedfond.com/wp-content/uploads/2017/08/rescue-dog-restaurants-food-instagram-popeyethefoodie-17-581057ebc5312__700.jpg',
      categoryId: cat2.id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: 'Zen Yoga',
        price: 30,
        description: '30 minutes of streching and breathing excerces which align the dog body and mind',
        imageUrl:'https://i.pinimg.com/originals/68/74/4d/68744d45feb1549eaea840c3a0ab59a3.jpg',
        categoryId: cat2.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Deep tissue massage',
        price: 15543266,
        description: 'Seven hour massage by Arnold Schwarzenegger',
        imageUrl:'https://www.eigenkracht.nl/media/nieuws/842/arnold%20schwarzenegger.jpg',
        categoryId: cat3.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
    },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('services', null, {});

  }
}
