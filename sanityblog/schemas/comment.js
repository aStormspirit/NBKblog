export default {
    name: 'comment',
    type: "document",
    title: 'Comment',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'approved',
        title: 'Approved',
        type: 'boolean',
        description: 'comments dont show on the site without approved'
      },
      {
        name: 'email',
        type: 'string',
      },
      {
        name: 'comment',
        type: 'text',
      },
      {
        name: 'post',
        type: 'reference',
        to: [{type: 'post'}],
      }
    ],
  }
  