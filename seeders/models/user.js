const Testimonial = require('../../models/index').Testimonial;
const axios = require('axios');


axios.post(`http://localhost:3214/auth/local/register/admin`, {
	email: `admin@email.com`,
	password: `pass1234`,
	firstName: 'Bionica',
	lastName: 'Johnson',
	image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493268974/smqbmnavbzfsfssjf1hp.jpg',
}).then(resp => {
	Testimonial.create({
		author: 'Bionica Johnson',
		message: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
		image: resp.data.image,
		likes: [],
		user_id: resp.data.id,
	});
	Testimonial.create({
		author: 'Bionica Johnson',
		message: `Donec mauris sapien, efficitur vitae tristique et, venenatis id ligula. Quisque ut elit lacus. Nam a tortor at purus placerat aliquet. Nulla facilisi. Proin tristique cursus neque sit amet sollicitudin. Aenean vel augue condimentum diam condimentum condimentum ac vel tellus. Suspendisse varius mattis dictum. Etiam quis justo porttitor, vestibulum mauris at, mollis lorem. Duis ac dui vel urna consequat condimentum in ut enim. Donec sit amet urna id elit tempor posuere vitae a tortor.`,
		image: resp.data.image,
		likes: [],
		user_id: resp.data.id,
	});
	Testimonial.create({
		author: 'Bionica Johnson',
		message: `In et ipsum id lorem mattis vehicula. Duis id hendrerit nunc. Donec maximus tempus purus, euismod pellentesque dui vulputate vitae. Donec consequat magna dui, vitae rutrum quam pulvinar vitae. Cras vehicula auctor urna, quis congue ligula posuere in. Nunc tincidunt dui sit amet sollicitudin vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam vel velit facilisis enim tristique facilisis vel eget nibh. Morbi quis feugiat mauris. Suspendisse vitae felis libero. Donec a finibus tortor.`,
		image: resp.data.image,
		likes: [],
		user_id: resp.data.id,
	});
})
	.catch(() => {

	});


axios.post(`http://localhost:3214/auth/local/register/admin`, {
	email: `monica@email.com`,
	password: `pass1234`,
	firstName: 'Monica',
	lastName: 'Saint',
	image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493225294/s20botoerwinfvkadqow.jpg',
}).then(resp => {
	Testimonial.create({
		author: 'Monica Saint',
		message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		image: resp.data.image,
		likes: [],
		user_id: resp.data.id,
	});
	Testimonial.create({
		author: 'Monica Saint',
		message: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
		image: resp.data.image,
		likes: [],
		user_id: resp.data.id,
	});
	Testimonial.create({
		author: 'Monica Saint',
		message: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`,
		image: resp.data.image,
		likes: [],
		user_id: resp.data.id,
	});
})
	.catch(() => {

	});

axios.post(`http://localhost:3214/auth/local/register/admin`, {
	email: `jenny@email.com`,
	password: `pass1234`,
	firstName: 'Jenny',
	lastName: 'Lopez',
	image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493226722/ayqiuj6kccb37se8fnn1.jpg',
}).then(resp => {
	Testimonial.create({
		author: 'Jenny Lopez',
		message: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
		image: resp.data.image,
		likes: [],
		user_id: resp.data.id,
	});
	Testimonial.create({
		author: 'Jenny Lopez',
		message: `Nullam in dolor et felis laoreet dignissim. Integer tincidunt, nisi in tristique sollicitudin, est magna dictum augue, eget convallis massa leo ut purus. Phasellus dignissim diam purus, at cursus orci aliquam in. Praesent euismod odio vel posuere imperdiet. Curabitur id dolor nec sapien fringilla sagittis. Proin id massa felis. Curabitur vitae nulla in enim mattis tincidunt ut at enim. Proin efficitur mauris nec quam facilisis, in rhoncus eros dapibus.`,
		image: resp.data.image,
		likes: [],
		user_id: resp.data.id,
	});
	Testimonial.create({
		author: 'Jenny Lopez',
		message: `"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."`,
		image: resp.data.image,
		likes: [],
		user_id: resp.data.id,
	});
})
	.catch(() => {

	});

axios.post(`http://localhost:3214/auth/local/register/admin`, {
	email: `malia@email.com`,
	password: `pass1234`,
	firstName: 'Malia',
	lastName: 'Ayers',
	image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493346828/ds45sq0nipio7nlsrouv.jpg',
}).then(resp => {
	Testimonial.create({
		author: 'Malia Ayers',
		message: `Donec venenatis sem vel tortor luctus, quis aliquam nisl luctus. Curabitur in elit dignissim, placerat neque consequat, volutpat magna. Mauris eget scelerisque ipsum. Nullam consectetur mollis libero egestas pellentesque. In hac habitasse platea dictumst. Nullam rhoncus justo eu malesuada molestie. Sed at eros hendrerit, blandit diam id, ornare massa. Nunc sodales nisi et ex feugiat, et convallis mi ornare.`,
		image: resp.data.image,
		likes: [],
		user_id: resp.data.id,
	});
	Testimonial.create({
		author: 'Malia Ayers',
		message: `Vestibulum id turpis sed nisi lacinia dictum. Donec euismod lorem eros, sed porttitor elit gravida a. Donec condimentum volutpat tempor. Curabitur dictum eu turpis eu placerat. Maecenas in orci quis odio convallis vehicula nec non enim. Aliquam at magna in justo volutpat lacinia ut sodales magna. Sed efficitur, est ut euismod convallis, orci turpis fringilla mi, condimentum placerat mi risus ut ante. Sed a fermentum massa. Vestibulum gravida porta justo, ultrices laoreet est consectetur quis.`,
		image: resp.data.image,
		likes: [],
		user_id: resp.data.id,
	});
	Testimonial.create({
		author: 'Malia Ayers',
		message: `Phasellus iaculis leo nec lacus eleifend, non iaculis ante tristique. Nam libero sem, dignissim a malesuada et, tempor et massa. Curabitur aliquam enim at dui varius scelerisque. Morbi condimentum tellus ut ante sodales, ut rutrum magna ultrices. Aenean placerat odio eget erat aliquet, sodales ornare odio posuere. Vestibulum a sodales ipsum. Pellentesque facilisis vel nulla vel tincidunt. Nam in sem quis diam auctor efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer egestas quis sapien at rutrum. Cras feugiat, urna ac elementum auctor, turpis enim volutpat sapien, quis mattis est nunc ultricies orci. Vivamus enim lacus, molestie vitae semper vitae, gravida id felis.`,
		image: resp.data.image,
		likes: [],
		user_id: resp.data.id,
	});
	Testimonial.create({
		author: 'Malia Ayers',
		message: `Nam iaculis, ex at fermentum imperdiet, metus libero mollis orci, nec cursus ligula mauris in ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie, tellus in iaculis dapibus, mauris tortor maximus orci, at placerat enim orci eu mauris. Praesent tempor nunc vitae turpis facilisis accumsan. Cras rutrum leo sit amet placerat lacinia. Mauris viverra egestas sem, ac fringilla dolor ullamcorper vitae. Sed finibus sem et lorem sollicitudin, quis porttitor justo pellentesque.`,
		image: resp.data.image,
		likes: [],
		user_id: resp.data.id,
	});
})
	.catch(() => {

	});

axios.post(`http://localhost:3214/auth/local/register/admin`, {
	email: `zoey@email.com`,
	password: `pass1234`,
	firstName: 'Zoey',
	lastName: 'Jefferson',
	image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493226771/xsx0fgn0tbsnbirbfu5n.jpg',
}).then(resp => {
	Testimonial.create({
		author: 'Zoey Jefferson',
		message: `Aenean volutpat sollicitudin cursus. Suspendisse leo lorem, ultrices sed lacus sed, tempor tempus neque. Cras in erat sit amet diam aliquam tempus ut quis eros. Nam ornare, ipsum sed laoreet lobortis, metus quam scelerisque quam, id dictum dui mauris eu elit. Integer ornare, nibh in efficitur imperdiet, erat nulla lobortis odio, sed suscipit nisi erat in sapien. Quisque eget nulla et ligula tincidunt faucibus. Nulla sollicitudin urna mi, a vestibulum libero euismod sit amet.`,
		image: resp.data.image,
		likes: [],
		user_id: resp.data.id,
	});
})
	.catch(() => {

	});

axios.post(`http://localhost:3214/auth/local/register/admin`, {
	email: `emily@email.com`,
	password: `pass1234`,
	firstName: 'Emily',
	lastName: 'Mae',
	image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493269025/fblntkte5ximztctmya6.jpg',
}).then(resp => {
	Testimonial.create({
		author: 'Emily Mae',
		message: `In vitae magna id odio condimentum bibendum. Praesent dui nibh, bibendum in nibh non, hendrerit aliquam urna. Vestibulum interdum neque eget posuere consectetur. Cras ut consectetur magna. Donec sagittis justo nec rhoncus venenatis. Nunc vel convallis justo. Pellentesque et risus molestie, semper lacus mollis, facilisis dolor. Morbi id dolor ante. Sed semper libero sed lacus scelerisque accumsan. Suspendisse dolor elit, faucibus ut tellus ac, fermentum sollicitudin eros. Vivamus sagittis, ex in sodales fermentum, mi risus pharetra metus, eu volutpat purus ex et dui. Maecenas dignissim enim in sollicitudin tincidunt. Proin aliquam sodales nunc. Fusce at eros vulputate, fermentum metus eu, condimentum tortor.`,
		image: resp.data.image,
		likes: [],
		user_id: resp.data.id,
	});
})
	.catch(() => {

	});

axios.post(`http://localhost:3214/auth/local/register/admin`, {
	email: `nicole@email.com`,
	password: `pass1234`,
	firstName: 'Nicole',
	lastName: 'Rock',
	image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493252781/vgaesfbvim3uybok6rq2.jpg',
}).then(resp => {
	Testimonial.create({
		author: 'Nicole Rock',
		message: `Donec ut ullamcorper felis, nec scelerisque arcu. Integer venenatis, arcu id fermentum commodo, massa nisl viverra ipsum, sed vestibulum lacus odio sit amet leo. Quisque pellentesque risus augue, dignissim laoreet sem lobortis vitae. Sed euismod id velit a iaculis. Ut eget eleifend ligula. Donec quis porta quam. Ut sit amet placerat ante. Praesent vel lorem fringilla, bibendum nibh eget, pulvinar mauris. Fusce et neque sed libero convallis vestibulum. Vestibulum eu mauris aliquet sem tristique dictum. Nunc hendrerit at arcu eget aliquet. Maecenas non arcu non dolor rhoncus gravida non vel lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus ac sapien sed odio ultrices fringilla a sed metus. Nam malesuada magna dui, eu egestas enim suscipit nec.`,
		image: resp.data.image,
		likes: [],
		user_id: resp.data.id,
	});
})
	.catch(() => {

	});

axios.post(`http://localhost:3214/auth/local/register/admin`, {
	email: `vicki@email.com`,
	password: `pass1234`,
	firstName: 'Vicki',
	lastName: 'Garcia',
	image: 'http://res.cloudinary.com/dzllxh0km/image/upload/v1493913039/htnqjfab5nozaerolmk8.jpg',
}).then(resp => {
	Testimonial.create({
		author: 'Vicki Garcia',
		message: `Nunc eget pulvinar dolor. Pellentesque dignissim felis nec elit sollicitudin tincidunt. Nulla sed ligula id ex convallis porta a at sem. Praesent sagittis tristique convallis. Nam luctus vulputate turpis eleifend cursus. Cras felis ante, lacinia sit amet molestie nec, vulputate ut mauris. Duis malesuada, augue id porta consectetur, neque lorem luctus lectus, eu condimentum urna ligula vel mauris. Mauris placerat elementum finibus. Vestibulum sit amet porta tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sagittis turpis aliquam enim suscipit, tincidunt venenatis tellus accumsan. Sed feugiat arcu vel felis porttitor, ut faucibus sem posuere. Curabitur urna tortor, vulputate in suscipit viverra, ultricies quis orci.`,
		image: resp.data.image,
		likes: [],
		user_id: resp.data.id,
	});
})
	.catch(() => {

	});
