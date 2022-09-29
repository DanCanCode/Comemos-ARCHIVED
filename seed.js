const { db, User, Post } = require("./server/database/index");

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  const users = await Promise.all([
    User.create({
      fullName: "Daniel Elijah",
      email: "dancancode@protonmail.com",
      username: "DanCanCode",
      profilePic:
        "https://68.media.tumblr.com/a3841903b1a9c7be82dd770becf1fbfb/tumblr_okwu3aAXdF1scj9lro4_1280.png",
    }),
    User.create({
      fullName: "Jeff Wittek",
      email: "mynamejeff@comemos.com",
      username: "Jeff",
      profilePic:
        "https://www.thefamouspeople.com/profiles/images/jeff-wittek-2.jpg",
    }),
  ]);

  const posts = await Promise.all([
    Post.create({
      picture:
        "https://cdn.newsday.com/polopoly_fs/1.44260830.1588251750!/httpImage/image.jpg_gen/derivatives/landscape_1280/image.jpg",
      description: 'The "ATOMIC BURGER" from Burgerology',
      userId: 1,
    }),
    Post.create({
      picture:
        "https://senortacony.com/wp-content/uploads/2020/11/senor-taco-starters.jpg",
      description: "esas empanadas estaban deliciosas",
      userId: 1,
    }),
    Post.create({
      picture: "https://www.abcpizzashop.com/assets/images/calzone_greek.jpg",
      description: "homemade calzone. kiss the 👨‍🍳",
      userId: 1,
    }),
    Post.create({
      picture:
        "https://s.inyourpocket.com/gallery/brighton/2019/12/shutterstock-1567433683.jpg",
      description: "It's bulking season!",
      userId: 1,
    }),
    Post.create({
      picture:
        "https://www.bosshunting.com.au/wp-content/uploads/2020/07/1_Manchester-Evening-News-goes-behind-the-scenes-at-Five-Guys.jpg",
      description: "Best burgers in NYC",
      userId: 1,
    }),
    Post.create({
      picture:
        "https://i.pinimg.com/originals/61/03/27/61032789576e9879820de07fb0fa8b4d.jpg",
      description: "Do you enjoy sushi?",
      userId: 1,
    }),
    Post.create({
      picture:
        "https://hungryhealthyhappy.com/wp-content/uploads/2017/01/Triple-Berry-Oat-Smoothie-featured.jpg",
      description: "",
      userId: 1,
    }),
    Post.create({
      picture:
        "https://www.phoebebakes.com/images/nutella-stuffed-cookies/nutella-stuffed-cookies2.jpg",
      description: "Nutella-stuffed cookies",
      userId: 1,
    }),
    Post.create({
      picture:
        "https://www.californiastrawberries.com/wp-content/uploads/2021/01/mixed-green-strawberry-salad-1024-1024x1024.png",
      description: "Nutella-stuffed cookies",
      userId: 1,
    }),
    Post.create({
      picture:
        "http://motivatingmommy.com/wp-content/uploads/2013/04/Nachos_Grande-2.jpg",
      description: "Homade nachos",
      userId: 1,
    }),
    Post.create({
      picture:
        "https://i.pinimg.com/originals/ab/29/11/ab2911cb030fb234c630da0a1dd0be9e.jpg",
      description: "",
      userId: 2,
    }),
    Post.create({
      picture:
        "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/08/main/margherita-pizza-0210.jpg",
      description: "Homemade Pizza",
      userId: 2,
    }),
    Post.create({
      picture:
        "https://ourwabisabilife.com/wp-content/uploads/2019/10/Halloween-Monster-Cake-4-scaled.jpg",
      description: "Happy Halloween! 🎃",
      userId: 2,
    }),
    Post.create({
      picture:
        "https://www.protegez-vous.ca/var/protegez_vous/storage/images/_aliases/social_network_image/medias/illustrations-et-images/archives/2014-08/croissants-deux/568859-2-fre-CA/croissants-deux.jpg",
      description: "Breakfast Croissants",
      userId: 2,
    }),
    Post.create({
      picture:
        "https://hilahcooking.com/wp-content/uploads/2011/12/L2CChicken2.jpg",
      description: "Diet starts today!",
      userId: 2,
    }),
    Post.create({
      picture:
        "https://preview.redd.it/6zcxag6mh8x21.jpg?auto=webp&s=c3f4ef522eb525cf64b78e955648beabf65a9c89",
      description: "Believe it",
      userId: 2,
    }),
    Post.create({
      picture:
        "https://thesproutedbean.com/wp-content/uploads/2019/05/19702877-25FF-42B0-8503-63EA382AE692-1024x1024.jpeg",
      description: "McMuffin but with a twist!",
      userId: 2,
    }),
    Post.create({
      picture:
        "https://cooksmarts.imgix.net/meal_photos/828/20170206-Thai-Butternut-Chicken-Ramen-NM-3.jpg?ixlib=rails-2.1.4&w=500&dpr=3",
      description: "",
      userId: 2,
    }),
  ]);

  console.log(`seeded successfully`);
  return {
    users: {
      DanCanCode: users[0],
      Jeff: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
    Execute the `seed` function, IF we ran this module directly (`node seed`).
    `Async` functions always return a promise, so we can use `catch` to handle
    any errors that might occur inside of `seed`.
  */
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
