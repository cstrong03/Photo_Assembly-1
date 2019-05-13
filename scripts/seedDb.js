const { User, Post, Comment } = require('../models')

async function main(){

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
    username: 'da_real_cai',
    password: 'helloworld',
    user_photo: 'image1'
  })

  const niecey = await User.create({
    username: 'petty_pendagrass',
    password: 'helloworld',
    user_photo: 'image2'
  })
  const fahad = await User.create({
    username: 'fitness_savage',
    password: 'helloworld',
    user_photo: 'image3'
  })
  const sammi = await User.create({
    username: 'dr_deez',
    password: 'helloworld',
    user_photo: 'image4'
  })

  const post01 = await Post.create({
    image_url: 'image01',
    caption: 'Here i am in the house'
  })
  const post02 = await Post.create({
    image_url: 'image02',
    caption: `Let's go to the beach!!`
  })
  const post03 = await Post.create({
    image_url: 'image03',
    caption: 'Mood for today: ZzZzZz'
  })
  const post04 = await Post.create({
    image_url: 'image04',
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

async function magic(){
  try {
    await main();
  } catch (e) {
    console.log(e)
  } finally {
    await process.exit()
  }
}

magic();
