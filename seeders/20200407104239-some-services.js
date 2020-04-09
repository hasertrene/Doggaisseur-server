"use strict";
const Cat = require("../models").category;
const Service = require("../models").service;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [cat1, cat2, cat3, cat4, cat5, cat6] = await Promise.all([
      Cat.findOne({
        where: { name: "Cleaning" },
      }),
      Cat.findOne({
        where: { name: "Exercise" },
      }),
      Cat.findOne({
        where: { name: "School" },
      }),
      Cat.findOne({
        where: { name: "Leisure" },
      }),
      Cat.findOne({
        where: { name: "Hostel" },
      }),
      Cat.findOne({
        where: { name: "Special treatment" },
      }),
    ]);

    return Service.bulkCreate(
      [
        {
          name: "Budget wash",
          price: 45,
          description: "Just a quick wash and a comb",
          imageUrl:
            "https://musthavestuff.com/wp-content/uploads/2018/10/Circular-Dog-Shower.jpg",
          categoryId: cat1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Luxury wash",
          price: 60,
          description: "Bath with special dog aroma and fur styling",
          imageUrl:
            "https://inleaguercd.org/images/top_60_best_home_dog_wash_station_ideas_-_canine_shower_designs_27.jpg",
          categoryId: cat1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lunch walk",
          price: 10,
          description: "An hour of walking around the neighbourhood",
          imageUrl:
            "https://www.feedfond.com/wp-content/uploads/2017/08/rescue-dog-restaurants-food-instagram-popeyethefoodie-17-581057ebc5312__700.jpg",
          categoryId: cat2.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zen Yoga",
          price: 30,
          description:
            "30 minutes of streching and breathing excerces which align the dog body and mind",
          imageUrl:
            "https://i.pinimg.com/originals/68/74/4d/68744d45feb1549eaea840c3a0ab59a3.jpg",
          categoryId: cat2.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Deep tissue massage",
          price: 15543266,
          description: "Seven hour massage by Arnold Schwarzenegger",
          imageUrl:
            "https://www.eigenkracht.nl/media/nieuws/842/arnold%20schwarzenegger.jpg",
          categoryId: cat6.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pool fun",
          price: 70,
          description: "Water games and activities",
          imageUrl:
            "https://whatsamanthadoeshome.files.wordpress.com/2019/07/dog-swimming-pool-ramp-ramps-for-dogs-diy.jpg?w=1000",
          categoryId: cat4.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Frisbee",
          price: 30,
          description: "Playing in the park",
          imageUrl:
            "https://i0.wp.com/puppytoob.com/wp-content/uploads/2013/07/Frisbee_Dog_8.jpg?resize=620%2C413",
          categoryId: cat4.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Night in the hostel",
          price: 100,
          description: "Shared room & breakfast",
          imageUrl:
            "https://www.adaalo.com/upload/Document/1486378156_1_thumb.png",
          categoryId: cat5.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Luxury Stay",
          price: 300,
          description: "Private room, spa & breakfast",
          imageUrl:
            "https://nebula.wsimg.com/de73686b2855ec9a23b614cc0dba2c23?AccessKeyId=524EBB1DF8CBE1D1D206&disposition=0&alloworigin=1",
          categoryId: cat5.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Graduate course",
          price: 3000,
          description: "Learning high class manners",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRnDiEbrowoXw6nhneqXpeu3PZHajveCZ9AwdvqVYFhDIIA9Mz&usqp=CAU",
          categoryId: cat3.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Beginner course",
          price: 1000,
          description: "Learn how to pee with one leg up and sit on the but",
          imageUrl:
            "https://miro.medium.com/max/719/1*LZxNUUjUXpGRsZ7KaMqIXA.jpeg",
          categoryId: cat3.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Puppies course",
          price: 2000,
          description: "Learning what a doggy life is all about",
          imageUrl:
            "https://www.dogonit.com.au/wp-content/uploads/2014/08/puppyschool.jpg",
          categoryId: cat3.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("services", null, {});
  },
};
