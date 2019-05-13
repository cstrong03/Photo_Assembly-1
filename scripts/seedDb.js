const {  } = require('../models')

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

  await cai.setPost(post03)
  await cai.setComment(comment01)
  await niecey.setPost(post01)
  await niecey.setComment(comment04)
  await fahad.setPost(post04)
  await fahad.setComment(comment02)
  await sammi.setPost(post02)
  await sammi.setComment(comment03)
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
