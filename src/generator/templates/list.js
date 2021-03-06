module.exports = [{
  type: 'post',
  title: 'Blog post/article',
  template: 'default/post.md',
  fields: [{
    message: 'Title:',
    name: 'title',
    type: 'input',
    required: true,
  },{
    message: 'Short description:',
    name: 'description',
    type: 'input',
    required: true,
  }, {
    message: "Path to post's cover image (URL or local path):",
    name: 'image',
    type: 'input',
  }, {
    message: 'Tags (separate tag by comma): ',
    name: 'tags',
    type: 'input',
  }, {
    message: 'Category:',
    name: 'category',
    type: 'input',
  }, {
    message: 'When to publish:',
    name: 'publishedAt',
    type: 'datetime',
    format: ['mm', '/', 'dd', '/', 'yyyy', ' ', 'hh', ':', 'MM', ' ', 'TT'],
  }]
}, {
  type: 'product',
  title: 'Product page',
  template: 'default/product.md',
  fields:[
  {
    message: 'Title:',
    name: 'title',
    type: 'input',
    required: true,
  },
  {
    message: 'Short description:',
    name: 'description',
    type: 'input',
    required: true,
  },
  {
    message: "Path to post's cover image (URL or local path):",
    name: 'image',
    type: 'input',
  },
  {
    message: 'Product price:',
    name: 'price',
    type: 'input',
    required: true,
  },
  {
    message: 'Tags (separate tag by comma):',
    name: 'tags',
    type: 'input',
  },
  {
    message: 'Category:',
    name: 'category',
    type: 'input',
  }
  ]
}, {
  type: 'doc',
  title: 'Documentation page',
  template: 'default/doc.md',
  fields:[
  {
    message: 'Title:',
    name: 'title',
    type: 'input',
    required: true,
  },
  {
    message: 'Short description:',
    name: 'description',
    type: 'input',
    required: true,
  },
  {
    name: 'position',
    type: 'input',
    message: 'Position of page on sidebar:',
  },
  {
    name: 'version',
    type: 'input',
    message: 'Version of page:',
  },
  {
    name: 'category',
    type: 'input',
    message: 'Category:',
  },
  {
    name: 'fullscreen',
    type: 'boolean',
    message: 'Expand to fullscreen:',
    default: false,
  },
  {
    name: 'menuTitle',
    type: 'input',
    message: 'Title on the side menu for page:',
  },
  {
    name: 'subtitle',
    type: 'input',
    message: 'Subtitle of page:',
  },
  {
    name: 'badge',
    type: 'input',
    message: 'Badge:',
  }]
}]
