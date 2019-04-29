

//Homepage bio
const summary = "My name is Povchhadarith Sarath, but I go by Nick. I am a Product Designer currently based in the Washington, D.C. area. I have over three years of experience within many areas in design  including UI/UX, motion design, branding and art direction. I believe I can make an impact on people’s lives with my digital craftsmanship and innovating thought process. Nothing is more fulfilling to me than the ability to deliver beautifully built products and solutions to people on a global scale.";

// Homepage Projects List
const projects = [
  {
    title: "Turtle",
    description: "Founder & CEO, 2017, Turtle Labs LLC",
    url: "/Turtle",
    img1: "/turtle.png",
  },
  {
    title: "Fleet",
    description: "Lead Designer, 2016, We Grind Apparel LLC",
    url: "/Fleet",
    img1: "/fleet.png",
  },
  {
    title: "Stark Labs",
    description: "Freelance, 2016, Stark Labs Inc",
    url: "/Starklabs",
    img1: "/stark.png",
  },
  {
    title: "Stories",
    description: "Side Project, 2016",
    url: "/Stories",
    img1: "/stories.png",
  },
  {
    title: "PhoneWagon",
    description: "Side Project, 2017",
    img1: "/phonewagon.png",
  },
  {
    title: "Grouper",
    description: "Side Project, 2016",
    img1: "/grouper.png",
  },
  {
    title: "MyArena",
    description: "Lead Designer, 2015, MyArena LLC",
    img1: "/myarena.png",
  },
]

// About Page
const about = {
  mainImg: "/me.png",
  myStart: "I became interested in Product Design over three years ago. I was initially learning web development and I quickly discovered my passion for CSS and front end development. After finding my love for design, I slowly pivoted towards that area of expertise. I quickly gained experience by starting off with freelance design work. It eventually grew to long term contracts and eventually a few job offers from various technology startups. ",
  details: "I believe being product driven is the best way to build a successful company. When your product wins, your users win. When your users win, your company wins. Your digital product is the only interaction people will have with you as a company, so I believe it is essential to do everything you can to refine the interaction. Refining the smallest details is something I value. I believe that details matter because the slightest details are what speaks to the user’s emotions. This is the mindset I have when I approach every project. I believe it is my goal to touch the user’s emotions through digital interactions. ",
  friends: "I’ve had the privilege of meeting some amazing designers, developers, and managers the past few years who all come from very amazing areas of expertise. I would not be where I am today without their help and guidance. I’ve learned a lot from working with them and I wanted to honor that. Feel free to reach out to me if you’re interested in having me setting up an intro for you.",
  img1: "monkey.png",
  img2: "stripe.png",
  img3: "google.png",
  img4: "ubisoft.png",
  img5: "",
  img6: "facebook.png",
}


// Turtle Case Study

const turtle = {
  projectName: "Turtle",
  title: "Founder & CEO",
  date: "March 2017 to Present",
  description: "Turtle is an anonymous messaging app that lets users start conversations with each other while staying anonymous for three days. After three days, the user who began the conversation will be revealed to the other user. Turtle lets you start conversations with people without having that fear of instant judgment or implicit bias. Turtle is currently operating under Turtle Labs LLC, which is a company I founded over a year ago along with six other people on my team. My role as the CEO of Turtle included creative responsibilities for all UI, UX, video directing, prototyping, and art direction.",
  appImg: '/app.png',

  img1: "/turtle/img1.png",
  header1: "Taking a new approach to anonymous social networking",
  text1: "When I first came up with the idea for Turtle, I wasn’t sure if there was already an anonymous app that specifically tailored towards my idea. I took time to conduct extensive research of existing anonymous apps to see if there have already been attempts at my concept of temporary anonymity. In my findings, I stumbled upon a lot of anonymous apps, but none that revolved the idea of temporary anonymity explicitly. The most popular anonymous apps I found were all in the form of public forums, not private messaging. Additionally, they were functioning with permanent anonymity.",

  img2: "/turtle/img2.png",
  header2: "Existing apps have formats that are conducive to abuse",
  text2: "Anonymous apps are very controversial due to their lack of accountability and filtering. The most popular anonymous apps all follow very similar concepts and layout. From what I found, most anonymous apps are following a layout style of a public forum and feed which can cause abuse since it allows people the ability to publicly make abusive comments without the fear of facing scrutiny for what they say. This toxic environment is something I wanted to avoid the development and design of Turtle.",

  header3: "What a typical anonymous app feels like",
  img3: "/turtle/img3.png",

  header4: "What I wanted Turtle to feel like",
  img4: "/turtle/img4.png",

  img4_5: '/turtle/img4_5.png',
  header4_5: "First look at Turtle",
  text4_5: "This is a first glimpse of my design for Turtle. As you can see, it follows the usability pattern of a standard messaging application. My goal was to offer a unique first impression. I wanted to drive the idea that conversations are private, as opposed to the public forum style I mentioned earlier regarding other anonymous apps.",

  img5: "/turtle/img5.png",
  header5: "Use of playful colors, icons, and font",
  text5: "I wanted Turtle to be playful and relatable to the teenagers ranging from middle school to high school. I used a playful color palette to enhance the idea of fun and comfort. The rounded Nunito fonts were used to give users the impression that the conversations to be had in the app should not be too serious. Lastly, the animal icons provide each anonymous user a temporary name and symbol until the three days are up.",

  img6: '/turtle/img6.png',
  header6: "Connecting with the targeted age group",
  text6: "It was my goal from the start to make sure that the app was branded in a way to relate with the targeted age group. Colors, icons, and fonts as mentioned before are specific to resemble imagery a typical teenager would see on basis such as memes, school materials, and snacks.",

  img7: '/turtle/img7.png',
  header7: "Establishing usability patterns",
  text7: "Most Turtle users, which are mainly teenagers, are assumed to be familiar with the app listed above. I wanted a usability pattern that they’re already accommodated to such as the ones you’d see on Instagram, Twitter, and Snapchat. I wanted to make Turtle feel complementary to the existing apps that they already use on a daily basis.",

  img8_1: '/turtle/img8_1.png',
  img8_2: '/turtle/img8_2.png',
  header8: "Inbox and Revealed",
  text8: "Separating the anonymous users from the revealed users was essential. I decided it was best to create separate pages using a tab switch which users can intuitively slide back and forth to differentiate between who’s anonymous and who’s been revealed.",

  img9: '/turtle/img9.png',
  header9: "Someone messaging me vs me messaging someone",
  text9: "When I’m the first to initiate a conversation with someone else, their profile picture will appear as usual as any messaging app would. If someone else were the first to begin the conversation with me, the user profile would be a rounded square with a randomly generated background color and emoji. The rounded square is to prevent users from creating their animal and trying to trick others into thinking that they’re still anonymous.",

  img10: '/turtle/img10.png',
  header10: "Messaging page",
  text10: "The messaging pages of Turtle are very similar to the architecture of any typical messaging app. With Turtle, I added the timer to the top right of the page so users can easy toggle it and view how much time is left until anonymous is revealed. Additionally, I added a pill shaped container in top center to display the recipient’s name. That pill can be toggled to view their profile.",

  img11: '/turtle/img11.png',
  header11: "Avoiding the feeling of stranger danger",
  text11: "Another problem I saw amongst most anonymous apps was the lack of motivation to interact with anonymous users. An “anonymous” user on an app such as YikYak or AskFM could be a total stranger which can be demotivating to interact with. To avoid that feeling, I decided to come up with a hinting system. The concept was quite simple; users would be able to unlock hints about their anonymous messenger. My team and I decided to test this concept by merely having a single button that would display a clue when it was toggled.",

  img12: '/turtle/img12.png',
  header12: "Another iteration of anonymous hints",
  text12: "After testing the idea of hints with native iOS popups, I decided to go ahead and design a refined modal for it. I decided that it was best not to give all of the hints away immediately. I decided to keep all of the hints locked away at first and make a new hint available each day. This was to increase user retention rates and an incentive to keep users talking to their anonymous messenger.",

  img13: '/turtle/img13.png',
  header13: "A sense of who their “anonymous” sender is",
  text13: "These are some of the hints that we used. The hints are fetched from data we are provided with when users sign up for an account on the app. The hints reveal enough to keep the non anonymous party comfortable while remaining curious to keep chatting.",

  img14_1: '/turtle/img14_1.png',
  img14_2: '/turtle/img14_2.png',
  header14: "Moving forward to prototype and development",
  text14: "After completing the designs for the main screens and features, I decided to ship the designs to my talented CTO and development team to develop a rough build of the app so I could test how the app would actually feel like in actuality instead of theory. I used Invision to manage back and forth communication between my team and I. Since the entire team is remote, communication was very vital. I would sometimes record facetime videos explaining certain elements of the app so that my team could replay it whenever they needed clarification on something.",

  header15: "My thoughts from testing the initial builds",
  text15: "It felt very fulfilling to be able to test an early build of the app. Although it was very early on, the app felt very refined due to the fantastic work of my CTO and talented team of developers. Something I wanted to test heavily was the gestures and navigation movements. I wanted to make sure that there wasn’t any friction when it came to gestures and switching between pages.",

  img16: '/turtle/img16.png',
  header16: "Seamless onboarding flow",
  text16: "I wanted Turtle’s onboarding to feel as painless as possible. That meant eliminating email code confirmations and very dense pages asking for user’s information all at once. I decided to display 1 request per page to make it frictionless and digestible as possible.",

  img17: '/turtle/img17.png',
  header17: "Distributing the app privately to early testers",
  text17: "After thoroughly testing more builds of the app, my team and I decided it was time to distribute a build of the app to beta testers. We obtained over 500 signups to test the beta, most of the users were college and high school students within the Virginia area. We had set up a dispatch system within the app to collect user feedback and suggestions for new features.",

  img18: '/turtle/img18.png',
  header18: "Iterating the app based on initial feedbacks from testers",
  text18: "The beta testing stage of Turtle was very successful. It opened up a lot of ideas for my team. We received a lot of feedback that we were able to iterate and improve on. A common complaint we saw was that users were struggling to find who to message on the app. Additionally, users were also requesting that they’d have more options for their profiles.",
  
  img19: '/turtle/img19.png',
  header19: "User photos",
  text19: "One of the features we implemented after beta testing was user photos. Many users wanted a simple way to upload pictures to their profiles so that more users would be more incentivized to message them. Since photos aren’t the primary focus of Turtle, I decided to go with a simple four by four photo grid as shown above.",

  img20: '/turtle/img20.png',
  header20: "Experimenting with profile links",
  text20: "Another complaint received from beta testing was how hard it was for users to find other users to chat with. One of the features I suggested to solve this was profile links. With profile links, users can easily share their profile across other social media mediums such as twitter and instagram. This would help increase retention, as well as offer a discovery method for finding others to chat with.",
  
  img21: '/turtle/img21.png',
  header21: "Days feature",
  text21: "Another feature we implemented was referred to as the Days feature. The Days feature is a public list that would display the people you’ve chatted with after they’ve been revealed. This feature was aimed to help users find other people to talk to, as well as a scoreboard incentive to keep users motivated to find more people to chat with. ",
  
  img22: '/turtle/img22.png',
  header22: "My overall experience",
  text22: "Turtle is the first app and company I launched and I consider it very much as a success. It was such an amazing moment when Turtle surpassed over 4,000 users within the first 3 days of public release. It was very fulfilling to know that people were interested in what we were building. I’ve had the privilege of learning so much from building Turtle. I’ve met some amazing people as a result of this product. I believe the most important thing I learned from building Turtle was to always listen to what users are saying and iterate on their feedback. My biggest regret throughout the development of Turtle was spending too much time on features, which ultimately didn’t resonate with the users as much as I assumed. There has never been an end or an exit for Turtle. My team and I have always been iterating on the product ever since we’ve released it to the public and we plan on doing this for as long as we can.",
  
  header23: "Credits to my talented and diverse team",
  text23: "I wanted to take some time to credit my amazing team. I would not be where I am today without them. I am very proud of the team I’ve been able to put together. Although I’ve never been in the same room or time zone as them, communication and collaboration has never been a problem. They’ve made tremendous sacrifices from Turtle, and I’m forever grateful to have them in my circle. I hope to build more amazing product with them after Turtle. They’re a talented bunch who all come from very diverse backgrounds and area of expertise.",
}

const logos = {
  logo1: "/logos/waterloo.png",
  logo2: "/logos/condenaste.png",
  logo3: "/logos/shopify.png",
  logo4: "/logos/microsoft.png"
}

const people = [
  {
    name: "Don Bytyqi",
    bio: "Co-Founder & CTO, Kosovo 🇽🇰",
    photo: "/profiles/don.png"
  },
  {
    name: "Louis Vedel",
    bio: "iOS Engineer, France 🇫🇷",
    photo: "/profiles/louis.png"
  },
  {
    name: "Rafael Medina",
    bio: "Web Developer, United States 🇺🇸",
    photo: "/profiles/rafael.png"
  },
  {
    name: "Abraham Duran",
    bio: "iOS Engineer, Dominican Republic 🇩🇴",
    photo: "/profiles/abraham.png"
  },
  {
    name: "Benjamin Alardin",
    bio: "After Effects Animator, France 🇫🇷",
    photo: "/profiles/ben.png"
  },
  {
    name: "Calum Patrick",
    bio: "Web Developer, Canada 🇨🇦",
    photo: "/profiles/calum.png"
  },
]

// Fleet Case Study

const fleet = {
  header: "/fleet/header.png",
  projectName: "Fleet",
  title: "Lead Designer",
  date: "September 2016",
  description: "Fleet is an iOS app that brings together car enthusiasts. The app helps car lovers find upcoming local and global car events and car shows. The product went through various iterations over the time it was developed, but the core vision always stayed the same. As the Lead Designer, I was responsible for all UI, UX, prototyping, branding and art direction. I was also expected to assist with research and pitching new features to bring to the app.",

  img2: "/fleet/img2.png",
  header2: "Problems with existing apps",
  text2: "The Product Manager I had the pleasure of working with was able to provide me a list of apps trying to accomplish the same mission as Fleet. Most of the apps in the market lacked much attention to the visual design, information architecture, and understanding of their targeted audience. Moreover, they contained subpar visual designs and very trivial information architecture. I was very motivated to solve these problems, knowing that Fleet would be the first app to truly put a large emphasis on user interaction and experience.",

  header3: "First, I had to understand the targeted audience",
  text3: "Fleet is an app for car enthusiasts. Their ideal user is someone who values the beauty of exotic and high end luxury cars. I came into the project with very little knowledge of the car club culture, but I knew that it’d be very important for me to connect with the culture before beginning any stage of design. ",

  img4: "/fleet/img4.png",
  header4: "Connecting with the car culture",
  text4: "We had a Product Manager working on the project that was able to conduct a full scale research of the market, but I also took the initiative to put myself into the car club culture so I could be in the same headspace of the ideal Fleet user. And so I set out to car events, met with exotic car owners, and even conducted phone calls with two very prominent car reviewers.",
  
  img5: "/fleet/img5.png",
  header5: "Consulting with prominent car enthusiasts",
  text5: "Before starting work on the app, I was able to sync up with two well known Youtubers going by the name of Doug Demuro and JR Garage. Doug and JR are car channels on Youtube that amassed millions of views throughout their videos. Their viewer base is Fleet’s target audience. I consulted them to understand more about what their viewer base would want from an app like Fleet. They were able to provide new viewpoints for me to work with, even suggesting ideas for features to implement.",

  img6: "/fleet/img6.png",
  header6: "Use of colors, fonts, and imagery",
  text6: "I didn’t want Fleet to have the same impression as any other event apps such as Facebook events or Meetups. I wanted to make Fleet specifically crafted for car meets only. I laid the foundation to achieve this from the selected colors, icons, and font above. This is the same branding you’d find in an automobile magazines or sports car dashboards.",

  img7: "/fleet/img7.png",
  header7: "Meetups page",
  text7: "This is the main page of the app. Users come here to locate upcoming car events and meetups near them. I used an information architecture that would be easily digestible for users. The main information displayed per post are location, time, title, and attendees. For the attendees, instead of having the typical “X people are attending”, I decided to display a name of the most recent person who signed up to attend. This is to offer the feeling that there’s a friendly face attending the event, instead of just a number.",

  img8: "/fleet/img8.png",
  header8: "Core usability pattern",
  text8: "For the main page of the app, I wanted to use similar usability patterns across other apps that the targeted audience is already familiar with. Most car events are currently being hosted using existing apps such as Instagram and Meetups. I wanted to accommodate users with a pattern they’d already be familiar with.",

  img9: "/fleet/img9.png",
  header9: "Event filtering",
  text9: "For filtering events, users are able to sort events based on a series of factors such as location, popularity, and the cars attending. For filtering the car attendees, instead of using texts to display the names of the cars, I decided to use the actual car logos instead. The reason for this was simply because I wanted to back the idea that this app is specifically crafted for car events, unlike other meetup apps.",

  img10: "/fleet/img10.png",
  header10: "Event page",
  text10: "For the event page of the app, I knew the information architecture would be really important. At first glance, I wanted users to be able to instantly grasp the information they’d need such as location, time, and details. Other meetup apps are very quick to display information all at once in architecture that can cause decision fatigue. With Fleet, I made the interactable elements specifically stay on the right side of the screen, while the other content such as location, time and details would be on the left side.",

  img11: "/fleet/img11.png",
  header11: "Attending event",
  text11: "When users choose the attend an event, the state of the button will change color and a check mark will appear to reaffirm their decision. In addition to that, when the button is toggled, there will be a subtle haptic feedback sent to the phone so the user is even more aware of the interaction which they just committed to.",

  img12: "/fleet/img12.png",
  header12: "Event options",
  text12: "For event options, I ended up using the native iOS option bar so users can instantly select between the options they want to take action on without any distractions. Instead of opening up a separate page or modal, I chose the native iOS architecture so the user would know that they’re still on the same page and the action they choose is directly related to the event.",

  img13: "/fleet/img13.png",
  header13: "Location options",
  text13: "For location options, I placed the button directly next to the address to affirm the action is directly linked to it. The choice to use the native iOS architecture is also to make the decision instant for the users.",

  img14: "/fleet/img14.png",
  header14: "Cars attending",
  text14: "For the view displaying the cars attending, I chose to go with a sliding photo grid with the option to toggle into a vertical table grid. I wanted to put the main attention towards the cars, but also included the view at the top left to display the user that’s bringing the car.",

  img15: "/fleet/img15.png",
  header15: "Profile page",
  text15: "For user profiles, I wanted to avoid adding any unnecessary content to distract the users from the main objectives of their profile page. My goal was to draw most of the attention towards the cars that the users have in their inventory, while also displaying other information such as name, username, and location.",

  img16: "/fleet/img16.png",
  header16: "Profile banners",
  text16: "Instead of having a traditional photo banner like most profile apps would have, I wanted to offer a visual touch to really connect with car lovers. If you attend a car event, you are likely to find people who came from all over the country. They bring their cars with them too and their license plates are all unique based on where they came from. I wanted to offer the same experience on the app and so I designed the banner to visually reflect a license plate. The location are also accurate too, they are fetching the user’s actual state and location.",

  img17: "/fleet/img17.png",
  header17: "Profile transition",
  text17: "When scrolling up, the top banner will be collapsed. This is to offer more room and real estate for cars on the user’s page. This is also to reduce decision fatigue by putting more attention on the objective.",

  img18: "/fleet/img18.png",
  header18: "Garage",
  text18: "For the garage section of the app, I pitched the idea that users should also be able to upload their “dream car”. Something I learned after going to these car events is the fact that not everyone owns an exotic high end car. By allowing people to allow their dream car, the app can be enjoyable for those who don’t own a high end car. I wanted to avoid any confusing visuals for the garage section so that there aren’t any elements to distract the users from their main objective. I experimented around with the idea of including paint color name and engine model as well to offer users more quirks to showcase about their car.",

  img19: "/fleet/img19.png",
  header19: "Finding services",
  text19: "I was requested to design a concept for a new page of the app for finding car related services in the area. Users would go on to this if they wanted to find local businesses that offered services such as car washes, paint coating, and other services. I chose to only display the most basic information about the businesses per thumbnail view such as name, location, and rating. I wanted the page to be digestible and have an information architecture that wouldn’t cause any confusion.",

  img20: "/fleet/img20.png",
  header20: "Services page",
  text20: "For the services page, I chose to make the information architecture similar to the events page so they’d be accommodated with a layout they’re already familiar with. I wanted to avoid adding extra or unnecessary “fluff” from services page to avoid content overflow.",

  img21: "/fleet/img21.png",

}

const starklabs = {
  header: "/starklabs/header.png",
  projectName: "Stark Labs",
  title: "Product Designer",
  date: "September 2016",
  description: "Stark Labs is a company that develops artificial messaging bots to integrate into apps such as Slack, Facebook, and Trello. I was approached by them to design a landing page and request order page. In addition to that, I was also expected to  collaborate with Rafael Medina on establishing the branding of their company.",
  appImg: "/starklabs/visit.png",

  img1: "/starklabs/img1.png",
  header1: "Home page",
  text1: "My goal for the home page was to display content in an architecture that would be digestible. I wanted to avoid including content that would ultimately cause decision fatigue and confusion. I wanted to make everything straight to the point to increase engagements and conversions. Rafael and I went through several iterations to test what layout converted the most and the one above is the final one that showed the most promising results. I had the pleasure of working on the artwork with Rafael Medina. Our goal our illustrations was to be able to tell a story, while being able to sell the service it provides.",

  img2: "/starklabs/img2.png",
  header2: "Requesting services",
  text2: "The requesting service page is where visitors go to order a bot. We chose the order of the request as shown above to allow users time to process each order properly. We also didn’t want to be intrusive and ask for certain information up front first such as contact info and budget.",

  img3: "/starklabs/img3.png",
  header3: "Illustrations and artwork",
  text3: "For the illustrations, Rafael and I looked at the branding of related apps such as Slack, Intercom, and Trello for inspiration. After all, Stark Lab’s focus is to build bots which are complementary to those apps. Throughout collaboration with Rafael, I would hand draw my ideas on paper and then he would design them out in Illustrator. Stark Labs’ goal is to create messaging bots to help businesses interact with their customers, which is why the illustrations of the robot you see are all expressing positive interactions.",

}

const stories = {
  header: "/stories/header.png",
  projectName: "Stories",
  title: "Side Project",
  date: "September 2016",
  description: "Stories is a side project that I came up with during a Hackathon here in the Washington, D.C. area. Stories is an iOS application that takes full screen horizontal videos from Youtube and displays it on your phone vertically without having you to rotate it to watch view the landscape angle. The goal of the project was to change the way video viewing experience is on mobile devices.",

  img1: "/stories/img1.png",
  header1: "The idea",
  text1: "I came up with this idea because I believe vertical videos is where the trend is heading in terms of how people are viewing video on the go. I personally love what Snapchat did with viewing video on mobile, I wanted to take that experience further by taking Youtube videos and displaying it in the same visual architecture  as Snapchat vertical videos.",

  img2: "/stories/img2.png",
  header2: "Utilizing the gyroscope",
  text2: "Displaying full screen horizontal videos on a vertical device comes with great compromise of the aspect ratio. The solution I came up with to fix this problem was to use the built in gyroscope to move the video left and right if the user chooses to view the other angles of the video.",

  img3: "/stories/img3.png",
  header3: "Depicting gyroscope movement",
  text3: "If you look at the bottom of the screens above, you will notice 3 different phone angles being visually displayed with gradients. I came up with a gyroscope gauge to track what angle of the phone the user is tilted towards. I came up with that visual depiction because that’s the primary movement users would rotate by when turn their phone left and right.",

  video4: "//player.vimeo.com/video/272580212?color=05E5DD&title=0&byline=0&portrait=0",
  header4: "Developing a rough concept",
  text4: "While I was designing the app, one of the developers on my team decided to test the theory by developing a simple prototype to see how the gyroscope would feel like in actuality. Instead of using video, we decided to use a landscaped photo for testing.",

  img5: "/stories/img5.png",
  header5: "Adding more content information and options",
  text5: "I went ahead and added a text container to the bottom of the screen to display the video’s title. I also added a like button on the bottom right to allow users the ability to save the video. I chose to play the like button on the bottom right to accommodate easy and instant gestures.",

  img6: "/stories/img6.png",
  header6: "Visual overhaul",
  text6: "At this point, the app was lacking characteristics in terms of the visuals. I went ahead and added a tab switcher at the bottom to allow users the ability to access their saved video. I also chose to remove the gyroscope gauge to accommodate space for video details and like option. The colors for the home page and saved tab were also added to give the app more sense of branding.",

  img7: "/stories/img7.png",
  header7: "Dominant color exploration",
  text7: "I experimented with the idea of having the navbar and gradients change adaptively based on the dominant colors in the video. The goal of this was to give more visual characteristics to each video viewed. Ultimately, this idea was abandoned due to performance issue concerns from my team.",

  img8: "/stories/img8.png",
  header8: "Adding a share option",
  text8: "Being a video app, it made sense to allow users the ability to share videos. I included the share option on the top right and moved the like button below it so the interactables would be contained in one area. I also removed the circular video progress bar and made it a line progress bar on the top as well since videos can be as long as 1 or 4 minutes.",

  img9: "/stories/img9.png",
  header9: "Simple playback controls",
  text9: "The playback controls for the app were adapted from Instagram and Snapchat stories. I wanted the gestures to be similar to the gesture patterns of apps most people were accommodated with in terms of mobile video such as Youtube, Snapchat, and Instagram stories.",

  video10: "//player.vimeo.com/video/272580172?color=05E5DD&title=0&byline=0&portrait=0",
  header10: "Thoughts from testing a rough build",
  text10: "Anonymous apps have been around for a long time with focus on building functional and usable products Doing research, value propositions and information structure Strong eye for clean, pixel perfect design and a relentless attention to detail Sketching, creating wireframes, prototyping, storytelling Usability testing, identifying red routes and card sorting Strong sense of design theory and typography. Anonymous apps have been around for a long time with focus on building functional and usable products Doing research, value propositions and information structure Strong eye for clean, pixel perfect design and a relentless attention to detail Sketching, creating wireframes, prototyping, storytelling Usability testing, identifying red routes and card sorting Strong sense of design theory and typography.",
}

export {projects, summary, about, turtle, logos, people, fleet, starklabs, stories};