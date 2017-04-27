const Profile = require('../../database/models/index').Profile
const Testimonial = require('../../database/models/index').Testimonial
const Following = require('../../database/models/index').Following
const Favorite = require('../../database/models/index').Favorite
const User = require('../../database/models/index').User
const Message = require('../../database/models/index').Message
const axios = require('axios')


axios.post(`http://localhost:3214/auth/local/fixtures`, {
    email: `admin@email.com`,
    password: `pass1234`,
    firstName: 'Master',
    lastName: 'Admin',
    image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493268974/smqbmnavbzfsfssjf1hp.jpg',
    id: 1
}).then(resp => {
    Testimonial.create({
        author: 'Master Admin',
        message: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
        user_id: 1,
        image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493268974/smqbmnavbzfsfssjf1hp.jpg',
        likes: 0
    }).then(response => {
            Testimonial.create({
            author: 'Monica Santa',
            message: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
            user_id: 2,
            image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493225294/s20botoerwinfvkadqow.jpg',
            likes: 0
        })
    })
})
.catch(err => {
    
})


axios.post(`http://localhost:3214/auth/local/fixtures`, {
    email: `monica@email.com`,
    password: `pass1234`,
    firstName: 'Monica',
    lastName: 'Santa',
    image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493225294/s20botoerwinfvkadqow.jpg',
    id: 2
}).then(resp => {
    Testimonial.create({
        author: 'Monica Santa',
        message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        user_id: 2,
        image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493225294/s20botoerwinfvkadqow.jpg',
        likes: 0
    })
    Testimonial.create({
        author: 'Master Admin',
        message: `Donec mauris sapien, efficitur vitae tristique et, venenatis id ligula. Quisque ut elit lacus. Nam a tortor at purus placerat aliquet. Nulla facilisi. Proin tristique cursus neque sit amet sollicitudin. Aenean vel augue condimentum diam condimentum condimentum ac vel tellus. Suspendisse varius mattis dictum. Etiam quis justo porttitor, vestibulum mauris at, mollis lorem. Duis ac dui vel urna consequat condimentum in ut enim. Donec sit amet urna id elit tempor posuere vitae a tortor.`,
        user_id: 1,
        image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493268974/smqbmnavbzfsfssjf1hp.jpg',
        likes: 0
    })
})
.catch(err => {
    
})

axios.post(`http://localhost:3214/auth/local/fixtures`, {
    email: `jenny@email.com`,
    password: `pass1234`,
    firstName: 'Jenny',
    lastName: 'Lopez',
    image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493226722/ayqiuj6kccb37se8fnn1.jpg',
    id: 3
}).then(resp => {
    Testimonial.create({
        author: 'Master Admin',
        message: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
        user_id: 3,
        image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493226722/ayqiuj6kccb37se8fnn1.jpg',
        likes: 0
    })
    .then(response => {
        
    })
})
.catch(err => {

})
