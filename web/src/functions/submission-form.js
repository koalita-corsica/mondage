/* eslint-disable no-unused-vars */
const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'xlw4ib3d',
  dataset: 'production',
  token: process.env.SANITY_TOKEN,
  useCdn: true
})

exports.handler = async function (event, context, callback) {
  const {payload} = JSON.parse(event.body)
  const form = {
    _type: 'submission.form',
    title: 'Form ' + payload.data.name,
    created_at: payload.created_at,
    nom: payload.data.nom,
    prenom: payload.data.prenom,
    mail: payload.data.mail,
    message: payload.data.message,
  }
  client.create(form).then((res) => {
    console.log(payload)
  })
}
