export default {
    name: 'submission.form',
    type: 'document',
    title: 'Form submission',
    readOnly: true,
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'created_at',
        type: 'datetime',
        title: 'Created at'
      },
      {
        name: 'nom',
        type: 'string',
        title: 'Nom:'
      },
      {
        name: 'prenom',
        type: 'string',
        title: 'Prenom:'
      },
      {
        name: 'mail',
        type: 'string',
        title: 'Mail'
      },
      {
        name: 'message',
        type: 'text',
        title: 'Message'
      }
    ]
  }
  