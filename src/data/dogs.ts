export interface Dog {
  slug: string;
  name: string;
  sex: string;
  age: string;
  weight: string;
  status: 'available' | 'pending' | 'new';
  statusLabel: string;
  fosterLocation: string;
  traits: string[];
  bio: string[];
  cardImage: string;
  photos: string[];
  hasProfile: boolean;
}

export const DOGS: Dog[] = [
  {
    slug: 'sky',
    name: 'Sky',
    sex: 'Male',
    age: '8 months old',
    weight: '27 lbs',
    status: 'available',
    statusLabel: 'Available',
    fosterLocation: 'Chicago, IL',
    traits: ['Loves to play', 'Very vocal', 'Continued training required', 'Ideally would be only pet'],
    bio: [
      'Hello! I\u2019m Sky, an 8-month-old Shiba weighing about 27 pounds.',
      'I\u2019m looking for a forever family that has a house with a yard! I\u2019m used to playing in the yard on a long leash, so a fence isn\u2019t necessary but would be a great bonus. I like to make my presence known at home with my voice, so apartment or condo life wouldn\u2019t be best for me.',
      'I think I would do best as an only pet so I don\u2019t have to compete for my family\u2019s attention. I love people more than other animals, and I really love playing with toys!',
      'I hang out in my crate when I\u2019m left alone \u2014 it\u2019s not my favorite place to be, but I settle down after a little bit. It would be helpful if my family is home more often than not, as I really don\u2019t love being alone.',
      'I can\u2019t wait to find my forever home where I can play with toys, go for walks, maybe play in a yard, and eat yummy treats!',
    ],
    cardImage: '/images/dogs/card-sky.jpg',
    photos: ['/images/dogs/sky-1.jpg', '/images/dogs/sky-2.jpg', '/images/dogs/sky-3.jpg', '/images/dogs/sky-4.jpg', '/images/dogs/sky-5.jpg', '/images/dogs/sky-6.jpg', '/images/dogs/sky-7.jpg', '/images/dogs/sky-8.jpg'],
    hasProfile: true,
  },
  {
    slug: 'hawaiian-tropic',
    name: 'Hawaiian Tropic',
    sex: '—',
    age: 'New arrival',
    weight: '—',
    status: 'new',
    statusLabel: 'New Arrival',
    fosterLocation: 'Midwest',
    traits: ['New arrival', 'Details coming soon'],
    bio: ['Hawaiian Tropic is a brand-new arrival to MSIR. We\u2019re getting to know her in her foster home and will post her full profile soon. An adoption application must be on file to be considered.'],
    cardImage: '/images/dogs/card-hawaiian-tropic.jpg',
    photos: [],
    hasProfile: false,
  },
  {
    slug: 'dusk',
    name: 'Dusk',
    sex: 'Female',
    age: '7ish years old',
    weight: '30 lbs',
    status: 'available',
    statusLabel: 'Available',
    fosterLocation: 'St. Louis, MO',
    traits: ['Confident doggy friend preferred', 'Needs a very patient, loving family', 'Must be treated like a princess'],
    bio: [
      'Hello, my name is Dusk! I\u2019m a beautiful, calm, and maternal, 7ish-year-old, 30-pound Shiba who loves pets, baby talk, playing with toys, and chewing on things. That said, I may need some supervision to ensure I\u2019m chewing on Dusk-friendly, parent-approved toys!',
      'After what she\u2019s been through, Dusk deserves to be treated like an absolute princess for the rest of her life!',
      'I enjoy slow, leashed walks each day, but I\u2019m a low-energy gal who prefers to simply hang out and relax with my thoughts. My foster family would love it if I\u2019d snuggle on the couch, but my lack of confidence has made this a slow process. I like to lounge in my bed or on the floor and watch the goings-on around me.',
      'I don\u2019t like loud noises or large crowds, and I don\u2019t have experience with cats, but I\u2019m good with calm kids and other dogs. I\u2019d love a confident canine companion to show me the ropes in my new home.',
    ],
    cardImage: '/images/dogs/card-dusk.jpg',
    photos: ['/images/dogs/dusk-1.jpg', '/images/dogs/dusk-2.jpg', '/images/dogs/dusk-3.jpg', '/images/dogs/dusk-4.jpg', '/images/dogs/dusk-5.jpg', '/images/dogs/dusk-6.jpg', '/images/dogs/dusk-7.jpg', '/images/dogs/dusk-8.jpg', '/images/dogs/dusk-9.jpg', '/images/dogs/dusk-10.jpg'],
    hasProfile: true,
  },
  {
    slug: 'banner',
    name: 'Banner',
    sex: 'Male',
    age: '2 years old',
    weight: '20 lbs',
    status: 'available',
    statusLabel: 'Available',
    fosterLocation: 'Chicago, IL',
    traits: ['Needs a doggy friend', 'Continued training required', 'Loves to play', 'Shy but adorable'],
    bio: [
      'Hi! My name is Banner and I\u2019m about 2 years old and weigh around 20 pounds. I\u2019m a good boi!',
      'I\u2019m a well-natured pup who is looking for my forever home! I do best when learning from another dog \u2014 particularly my brother Rocket. I\u2019d love a home with him, but if that\u2019s not possible I would need another confident dog in the house.',
      'I am a lover boy who enjoys hanging out with people once I\u2019ve gotten to know them a bit! I enjoy attention from humans but don\u2019t compete for it \u2014 I just take what I can get when I can get it.',
      'I love snoozing in my crate at night \u2014 it\u2019s so cozy and safe! During the day, if I\u2019m home alone, I\u2019m left in a room with a gate and I\u2019m a very good boy, never getting into trouble when I\u2019m alone.',
      'I am playful and would love another dog friend to play with! Going for walks where I can try to chase the squirrels and bunnies is quickly becoming one of my favorite hobbies. I love to sniff all the amazing smells of nature too!',
    ],
    cardImage: '/images/dogs/card-banner.jpg',
    photos: ['/images/dogs/banner-1.jpeg', '/images/dogs/banner-2.jpeg', '/images/dogs/banner-3.jpeg', '/images/dogs/banner-4.jpeg', '/images/dogs/banner-5.jpeg', '/images/dogs/banner-6.jpeg', '/images/dogs/banner-7.jpg', '/images/dogs/banner-8.jpg'],
    hasProfile: true,
  },
  {
    slug: 'valentina',
    name: 'Valentina',
    sex: 'Female',
    age: '4 years old',
    weight: '26 lbs',
    status: 'available',
    statusLabel: 'Available',
    fosterLocation: 'Aurora, IL',
    traits: ['Playful doggy friend REQUIRED', 'Can be vocal', 'Total sweetheart'],
    bio: [
      'Hi! My name is Valentina and I am 4 years old and weigh about 26 pounds. (This is Val just a few weeks after being rescued from the streets!)',
      'I am looking for a forever home that has another doggy sibling for me! I love playing with other dogs and also learn from them. I\u2019ve never been in a home before, so there\u2019s a lot to learn!',
      'A home with a fenced-in yard would be great for me. I\u2019m a bit rambunctious on a leash when walking, so I would need some more practice at that.',
      'I\u2019m great at being groomed and have become very used to my medicated baths that help regrow my fur. I\u2019ll need them for a few more months, as well as allergy shots from the vet. I\u2019m getting prettier and fluffier every day!',
      'I can be left home alone and I don\u2019t mess with anything because I\u2019m a very good girl! I love sleeping in my crate at night because it makes me feel safe and cozy. I love to alert my humans when I see people outside, so you can count on me to protect the family.',
    ],
    cardImage: '/images/dogs/card-valentina.jpg',
    photos: ['/images/dogs/valentina-1.jpg', '/images/dogs/valentina-2.jpg', '/images/dogs/valentina-3.jpg', '/images/dogs/valentina-4.jpg', '/images/dogs/valentina-5.jpg'],
    hasProfile: true,
  },
  {
    slug: 'maggie-mae',
    name: 'Maggie Mae',
    sex: '—',
    age: 'New arrival',
    weight: '—',
    status: 'new',
    statusLabel: 'New Arrival',
    fosterLocation: 'Midwest',
    traits: ['New arrival', 'Details coming soon'],
    bio: ['Maggie Mae is a brand-new arrival to MSIR. We\u2019re getting to know her in her foster home and will post her full profile soon. An adoption application must be on file to be considered.'],
    cardImage: '/images/dogs/card-maggie-mae.jpeg',
    photos: [],
    hasProfile: false,
  },
  {
    slug: 'rocket',
    name: 'Rocket',
    sex: 'Male',
    age: '2 years old',
    weight: '20 lbs',
    status: 'pending',
    statusLabel: 'Adoption Pending',
    fosterLocation: 'Midwest',
    traits: ['Loves his people', 'Continued training required', 'Loves walks and being active', 'Very social'],
    bio: [
      'Hey there! I\u2019m Rocket, a two-year-old Shiba mix weighing about 20 lbs.',
      'I\u2019m looking for a home where someone in the family is home a decent amount of time \u2014 I don\u2019t like being alone. I\u2019m not your usual Shiba and crave time with my humans!',
      'I love to play, go for walks, and try to chase after the squirrels and bunnies that are outside. I\u2019m a smart boy and know a couple of commands. I can\u2019t wait to learn even more with my new family!',
      'I sleep well in a crate but am ready to start my day once I notice my human is awake! When foster mom has to leave during the day, she puts me behind a gate in the kitchen. I bark a bit at first to let everyone know I miss mom, but then I settle down until she comes back.',
      'I can\u2019t wait to find my new family who will take me on walks, do some training with me, and let me cuddle with them.',
    ],
    cardImage: '/images/dogs/card-rocket.jpg',
    photos: ['/images/dogs/rocket-1.jpg', '/images/dogs/rocket-2.jpg', '/images/dogs/rocket-3.jpeg', '/images/dogs/rocket-4.jpeg', '/images/dogs/rocket-5.jpeg', '/images/dogs/rocket-6.jpeg', '/images/dogs/rocket-7.jpeg', '/images/dogs/rocket-8.jpeg'],
    hasProfile: true,
  },
];

export function getDog(slug: string): Dog | undefined {
  return DOGS.find((d) => d.slug === slug);
}
