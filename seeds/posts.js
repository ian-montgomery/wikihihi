exports.seed = (knex) =>
  knex("posts")
    .del()
    .then(() =>
      knex("posts").insert([
        {
          id: 1,
          title: "NPM",
          content: "This is the lecture on NPM",
          url:"https://www.youtube.com/embed/zcZqXkKfWvc",
          author: "anonymous"
        },    
        {
          id: 2,
          title: "Data Structures",
          content: "This is the lecture on Data Structures",
          url:"https://www.youtube.com/embed/YcPri6n62uk",
          author: "anonymous"
        },
        {
          id: 3,
          title: "Jest",
          content: "This is the lecture on Jest",
          url:"https://www.youtube.com/embed/Xwa-rIjBS3U", 
          author: "anonymous"
        },
        {
          id: 4,
          title: "Test Driven Development",
          content: "This is the lecture on Test Driven Development",
          url:"https://www.youtube.com/embed/dpCibPgM3vk",  
          author: "anonymous"
        },
        {
          id: 5,
          title: "Express",
          content: "This is the lecture on Express",
          url:"https://www.youtube.com/embed/7zmgBqZiIsM",  
          author: "anonymous"
        },
        {
          id: 6,
          title: "Async",
          content: "This is the lecture on Async",
          url:
          "https://www.youtube.com/embed/vKJZdqL777c",
          author: "anonymous"
        },
        {
          id: 7,
          title: "Server Side Rendering",
          content: "This is the lecture on Server Side Rendering",
          url:"https://www.youtube.com/embed/8Qm9q5wLCss",
          author: "anonymous"
        },
        {
          id: 8,
          title: "Express Handlebars",
          content: "This is the lecture on Express Handlebars",
          url:
            "https://www.youtube.com/embed/xXH113isbWw",
          author: "anonymous"
        },
        {
          id: 9,
          title: "Express Routers",
          content: "This is the lecture on Express Routers",
          url: "https://www.youtube.com/embed/-bIky1cqt5s",
          author: "anonymous"
        },
        {
          id: 10,
          title: "Knex",
          content: "This is the lecture on Knex",
          url:"https://www.youtube.com/embed/EsK7Mj4K3A4",
          author: "anonymous"
        }
      ])
    );
