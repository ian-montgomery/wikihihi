exports.seed = (knex) =>
  knex("posts")
    .del()
    .then(() =>
      knex("posts").insert([
        {
          id: 1,
          title: "cool video 1",
          content: "this is a cool video i found 1",
          url:
            "https://www.youtube.com/embed/SZQhgExjBvQ",
          author: "mr 1",
        },
        {
          id: 2,
          title: "cool video 2",
          content: "this is a cool video i found 2",
          url:
            "https://www.youtube.com/embed/SZQhgExjBvQ",
          author: "mr 2",
        },
        {
          id: 3,
          title: "cool video 3",
          content: "this is a cool video i found 3",
          url:
            "https://www.youtube.com/embed/SZQhgExjBvQ",
          author: "mr 3",
        },
        {
          id: 4,
          title: "cool video 4",
          content: "this is a cool video i found 4",
          url:
            "https://www.youtube.com/embed/SZQhgExjBvQ",
          author: "mr 4",
        },
        {
          id: 5,
          title: "cool video 5",
          content: "this is a cool video i found 5",
          url:
            "https://www.youtube.com/embed/SZQhgExjBvQ",
          author: "mr 5",
        },
        {
          id: 6,
          title: "cool video 6",
          content: "this is a cool video i found 6",
          url:
            "https://www.youtube.com/embed/SZQhgExjBvQ",
          author: "mr 6",
        },
        {
          id: 7,
          title: "cool video 7",
          content: "this is a cool video i found 7",
          url:
            "https://www.youtube.com/embed/SZQhgExjBvQ",
          author: "mr 7",
        },
        {
          id: 8,
          title: "cool video 8",
          content: "this is a cool video i found 8",
          url:
            "https://www.youtube.com/embed/SZQhgExjBvQ",
          author: "mr 8",
        },
        {
          id: 9,
          title: "cool video 9",
          content: "this is a cool video i found 9",
          url:
            "https://www.youtube.com/embed/SZQhgExjBvQ",
          author: "mr 9",
        },
        {
          id: 10,
          title: "cool video 10",
          content: "this is a cool video i found 10",
          url:
            "https://www.youtube.com/embed/SZQhgExjBvQ0",
          author: "mr 10",
        },
      ])
    );
