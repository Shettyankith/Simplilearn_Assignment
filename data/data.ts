import { IMAGES } from "./images"

export const OUR_CLIENTS={
    
      heading: "Our Clients",
      sideHeading: "We have been working with some Fortune 500+ clients",
      clientList:[
        IMAGES.client1Logo,
        IMAGES.client2Logo,
        IMAGES.client3Logo,
        IMAGES.client4Logo,
        IMAGES.client5Logo,
      ]
    
  }

  export const MANAGE_COMMUNITY={
   
      heading: "Manage your entire community in a single system",
      sideHeading: "Who is Nextcent suitable for?",
      servicesList:[
       {
        logo:IMAGES.serviceIcon2,
        name:"National Associations",
        description:"Our membership management software provides full automation of membership renewals and payments"
       },
       {
        logo:IMAGES.serviceIcon3,
        name:"Clubs And Groups",
        description:"Our membership management software provides full automation of membership renewals and payments"
       },
      ]
   
  }

  export const HELPING_BUISNESS={
    heading: "Helping a local business reinvent itself",
    sideHeading: "We reached here with our hard work and dedication",
    counts:[
     {
      logo:IMAGES.membersIcon,
      count:"2,245,341",
      name:"Members"
     },
     {
      logo:IMAGES.clubsIcon,
      count:"46,328",
      name:"Clubs"
     },
     {
      logo:IMAGES.startBookingIcon,
      count:"828,867",
      name:"Event Bookings"
     },
     {
      logo:IMAGES.paymentIcon,
      count:"1,926,436",
      name:"Payments"
     },
    ]
}

export const CUSTOMERS={
  description: "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.",
  personName:"Tim Smith",
  designation:"British Dragon Boat Racing Association",
  customerLogos:[
   IMAGES.customerLogo,
   IMAGES.client2Logo,
   IMAGES.client3Logo,
   IMAGES.client4Logo,
   IMAGES.client5Logo,
  ],
  button:{
    text:"Meet all customers",
    link:"/",
  }
}

export const BLOGS={
  heading: "Caring is the new marketing",
  sideHeading: "The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​",
  blogList:[
   {
    logo:IMAGES.blogImage1,
    count:"Creating Streamlined Safeguarding Processes with OneRen",
    button:{
      text:"Readmore",
    }
   },
   {
    logo:IMAGES.blogImage2,
    count:"What are your safeguarding responsibilities and how can you manage them?",
    button:{
      text:"Readmore",
    }
   },
   {
    logo:IMAGES.blogImage3,
    count:"Revamping the Membership Model with Triathlon Australia",
    button:{
      text:"Readmore",
    }
   },
  ]
}