const Profile = require('../../../database/models/index').Profile
const Testimonial = require('../../../database/models/index').Testimonial
const Following = require('../../../database/models/index').Following
const Favorite = require('../../../database/models/index').Favorite
const User = require('../../../database/models/index').User
const Message = require('../../../database/models/index').Message
const axios = require('axios')

axios.post(`http://localhost:3214/auth/local/fixtures`, {
    email: `admin@email.com`,
    password: `pass1234`,
    firstName: 'Master',
    lastName: 'Admin',
    image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493268974/smqbmnavbzfsfssjf1hp.jpg'
}).then(resp => {
    Testimonial.create({
        author: 'Master Admin',
        message: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
        user_id: resp.data.id,
        image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493268974/smqbmnavbzfsfssjf1hp.jpg',
        likes: 0
    })
    Testimonial.create({
        author: 'Master Admin',
        message: `Donec mauris sapien, efficitur vitae tristique et, venenatis id ligula. Quisque ut elit lacus. Nam a tortor at purus placerat aliquet. Nulla facilisi. Proin tristique cursus neque sit amet sollicitudin. Aenean vel augue condimentum diam condimentum condimentum ac vel tellus. Suspendisse varius mattis dictum. Etiam quis justo porttitor, vestibulum mauris at, mollis lorem. Duis ac dui vel urna consequat condimentum in ut enim. Donec sit amet urna id elit tempor posuere vitae a tortor.`,
        user_id: resp.data.id,
        image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493268974/smqbmnavbzfsfssjf1hp.jpg',
        likes: 0
    })
    Testimonial.create({
        author: 'Master Admin',
        message: `In et ipsum id lorem mattis vehicula. Duis id hendrerit nunc. Donec maximus tempus purus, euismod pellentesque dui vulputate vitae. Donec consequat magna dui, vitae rutrum quam pulvinar vitae. Cras vehicula auctor urna, quis congue ligula posuere in. Nunc tincidunt dui sit amet sollicitudin vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam vel velit facilisis enim tristique facilisis vel eget nibh. Morbi quis feugiat mauris. Suspendisse vitae felis libero. Donec a finibus tortor.`,
        user_id: resp.data.id,
        image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493268974/smqbmnavbzfsfssjf1hp.jpg',
        likes: 0
    })
})
.catch(err => {
    
})


axios.post(`http://localhost:3214/auth/local/fixtures`, {
    email: `monica@email.com`,
    password: `pass1234`,
    firstName: 'Monica',
    lastName: 'Santa',
    image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493225294/s20botoerwinfvkadqow.jpg'
}).then(resp => {
    Testimonial.create({
        author: 'Monica Santa',
        message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        user_id: resp.data.id,
        image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493225294/s20botoerwinfvkadqow.jpg',
        likes: 0
    })
    Testimonial.create({
        author: 'Monica Santa',
        message: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`,
        user_id: resp.data.id,
        image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493225294/s20botoerwinfvkadqow.jpg',
        likes: 0
    })
    Testimonial.create({
        author: 'Monica Santa',
        message: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
        user_id: resp.data.id,
        image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493225294/s20botoerwinfvkadqow.jpg',
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
    image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493226722/ayqiuj6kccb37se8fnn1.jpg'
}).then(resp => {
    Testimonial.create({
        author: 'Master Admin',
        message: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
        user_id: resp.data.id,
        image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493226722/ayqiuj6kccb37se8fnn1.jpg',
        likes: 0
    })
    Testimonial.create({
        author: 'Master Admin',
        message: `"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."`,
        user_id: resp.data.id,
        image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493226722/ayqiuj6kccb37se8fnn1.jpg',
        likes: 0
    })
    Testimonial.create({
        author: 'Master Admin',
        message: `Nullam in dolor et felis laoreet dignissim. Integer tincidunt, nisi in tristique sollicitudin, est magna dictum augue, eget convallis massa leo ut purus. Phasellus dignissim diam purus, at cursus orci aliquam in. Praesent euismod odio vel posuere imperdiet. Curabitur id dolor nec sapien fringilla sagittis. Proin id massa felis. Curabitur vitae nulla in enim mattis tincidunt ut at enim. Proin efficitur mauris nec quam facilisis, in rhoncus eros dapibus.`,
        user_id: resp.data.id,
        image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493226722/ayqiuj6kccb37se8fnn1.jpg',
        likes: 0
    })
})
.catch(err => {

})
