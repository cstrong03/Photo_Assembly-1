const { User, Post, Comment, Like } = require('../models')

async function main() {

  await User.destroy({
    where: {}
  });

  await Post.destroy({
    where: {}
  });

  await Comment.destroy({
    where: {}
  });


  const cai = await User.create({
    email: 'real3$t@yahoo.com',
    username: 'da_real_cai',
    password: 'helloworld',
    avatar: 'https://i.pinimg.com/564x/63/a5/e8/63a5e8ee8cdcfab2f952bcd46a73e5c4.jpg',
    description: 'blahblahblah empty data!!!',
    homepage: "www.yahoo.com"
    
  })

  const niecey = await User.create({
    email: 'ayoooo@yahoo.com',
    username: 'petty_pendagrass',
    password: 'helloworld',
    avatar: 'https://i.dailymail.co.uk/i/pix/2010/12/06/article-1336035-007F32E900000258-94_196x206.jpg',
    description: 'blahblahblah empty data!!!',
    homepage: "www.github.com"

  })
  const fahad = await User.create({
    email: 'fahaddo@yahoo.com',
    username: 'fitness_savage',
    password: 'helloworld',
    avatar: 'https://i.dailymail.co.uk/i/pix/2010/12/06/article-1336035-07988498000005DC-505_196x206.jpg',
    description: 'blahblahblah empty data!!!',
    homepage: "www.google.com"

  })
  const sammi = await User.create({
    email: 'srammi@yahoo.com',
    username: 'dr_deez',
    password: 'helloworld',
    avatar: 'https://i.dailymail.co.uk/i/pix/2010/12/06/article-1336035-022F586F000004B0-721_196x206.jpg',
    description: 'blahblahblah empty data!!!',
    homepage: "www.facebook.com"

  })

  const post01 = await Post.create({
    image_url: 'https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_1280.jpg',
    caption: 'Here i am in the house'
  })
  const post02 = await Post.create({
    image_url: 'https://i.kinja-img.com/gawker-media/image/upload/s--dEpW4lr3--/c_scale,f_auto,fl_progressive,q_80,w_1600/z7jcryloxjedsztssw39.jpg',
    caption: `Let's go to the beach!!`
  })
  const post03 = await Post.create({
    image_url: 'https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141_1280.jpg',
    caption: 'Mood for today: ZzZzZz'
  })
  const post04 = await Post.create({
    image_url: 'https://cdn.pixabay.com/photo/2013/10/16/14/04/polar-bear-196318_1280.jpg',
    caption: 'Do you even lift bro?!?!'
  })
  const post05 = await Post.create({
    image_url: 'https://cdn.pixabay.com/photo/2013/10/16/14/04/polar-bear-196318_1280.jpg',
    caption: 'Do you even lift bro?!?!'
  })
  const post06 = await Post.create({
    image_url: 'https://cdn.pixabay.com/photo/2013/10/16/14/04/polar-bear-196318_1280.jpg',
    caption: 'Do you even lift bro?!?!'
  })
  const post07 = await Post.create({
    image_url: 'https://cdn.pixabay.com/photo/2013/10/16/14/04/polar-bear-196318_1280.jpg',
    caption: 'Do you even lift bro?!?!'
  })

  const comment01 = await Comment.create({
    comment: 'Woooooooooow'
  })
  const comment02 = await Comment.create({
    comment: 'PeRiOdT!!!!!'
  })
  const comment03 = await Comment.create({
    comment: `I can't believe that happened!!`
  })
  const comment04 = await Comment.create({
    comment: `Factz my guy!!!`
  })
  await post05.setUser(cai)
  await post06.setUser(cai)
  await post07.setUser(cai)
  await post03.setUser(cai)
  await comment01.setUser(cai)
  await post01.setUser(niecey)
  await comment04.setUser(niecey)
  await post04.setUser(fahad)
  await comment02.setUser(fahad)
  await post02.setUser(sammi)
  await comment03.setUser(sammi)
  await comment01.setPost(post01)
  await comment02.setPost(post02)
  await comment03.setPost(post03)
  await comment04.setPost(post04)

}

async function magic() {
  try {
    await main();
  } catch (e) {
    console.log(e)
  } finally {
    await process.exit()
  }
}

magic();
