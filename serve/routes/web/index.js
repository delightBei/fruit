module.exports = app => {
  const router = require('express').Router()
  const mongoose = require('mongoose')
  const Category = mongoose.model('Category')
  const Article = mongoose.model('Article')
  const Item = mongoose.model('Item')
  // router.get('/news/init',async (req,res) => {
  //   const parent = await Category.findOne({
  //     name: '文章分类'
  //   })
  //   const cats = await Category.find().where({
  //     parent: parent
  //   }).lean()
  //   const newsTitles = ["为什么草莓这么贵，而草莓干却便宜？","春节的C位水果帮你挑好了，颜美心甜等你来撩","水果哥带你品尝一下千年柿子树结的果子"]
  //   const newsList = newsTitles.map(title => {
  //     const randomCats = cats.slice(0).sort((a,b) => Math.random() - 0.5)
  //     return {
  //       categories: randomCats.slice(0, 2),
  //       title: title
  //     }
  //   })
  //   await Article.insertMany(newsList)
  //   res.send(newsList)
  // })


  router.get('/news/list',async(req,res) => {
    const parent = await Category.findOne({
    name:'文章分类'
  })
  const cats = await Category.aggregate([
    { $match: { parent: parent._id }},
    {
      $lookup: {
        from: 'articles',
        localField: '_id',
        foreignField: 'categories',
        as: 'newsList'
      }
    },
    {
      $addFields: {
        newsList: { $slice: ['$newsList',3]}
      }
    }
  ])

  const subCats = cats.map(v => v._id)
  cats.unshift({
    name: '热门',
    newsList: await Article.find().where({
      categories: { $in: subCats }
    }).populate('categories').limit(3).lean()
  })

  cats.map(cat => { 
    cat.newsList.map(news => {
      news.categoryName =
      (cat.name === '热门')
      ? news.categories[0].name : cat.name
      return news
    })
    return cat
  })
  res.send(cats)
  })

  router.get('/articles/:id',async(req,res) => {
    const data = await Article.findById(req.params.id)
    res.send(data)
  })

  
  
  router.get('/items/list',async(req,res) => {
    const items = await Item.find().lean()
  res.send(items)
})

router.get('/items/:id',async(req,res) => {
  const data = await Item.findById(req.params.id)
  res.send(data)
})
  


  app.use('/web/api',router)
}