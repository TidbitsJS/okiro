import { photos, articles } from "./import";
import {
  authorbg01,
  authorbg02,
  authorbg03,
  authorbg04,
  authorbg05,
  authorbg06,
} from "../../components/imports/ImageImports";
// import {
//   calculateTotalArticlesPerAuthor,
//   calculateTotalTagsPerTag,
// } from "../../utils";

const postData = [
  {
    id: "post-08",
    url: photos.photo11,
    title: "I work best when my space is filled with inspiration",
    author: "Victoria West",
    authorUrl: "https://source.unsplash.com/1600x900/?nature",
    color: "#ffeab9",
    tags: ["creative", "idea", "product"],
    content: articles.article11,
  },
  {
    id: "post-01",
    url: photos.photo02,
    title: "Don't be afraid",
    author: "Lauren Langford",
    authorUrl: "https://source.unsplash.com/1600x900/?people",
    color: "#d7f8ff",
    tags: ["story", "creative"],
    member: false,
    content: articles.article02,
  },
  {
    id: "post-02",
    url: photos.photo07,
    title: "You have to fight to reach your dream",
    author: "Megan Anderson",
    authorUrl: "https://source.unsplash.com/1600x900/?laptop",
    color: "#fce6f0",
    tags: ["product", "idea"],
    member: false,
    content: articles.article07,
  },
  {
    id: "post-03",
    url: photos.photo08,
    title: "I always loved aesthetics",
    author: "Hannah Weastell",
    authorUrl: "https://source.unsplash.com/1600x900/?car",
    color: "#ffeab9",
    tags: ["home", "story", "creative"],
    member: true,
    content: articles.article08,
  },
  {
    id: "post-04",
    url: photos.photo09,
    title: "Creating deluxe drink is like playing a sport",
    author: "Victoria West",
    authorUrl: "https://source.unsplash.com/1600x900/?nature",
    color: "#d2f8f0",
    tags: ["lifestyle", "idea", "creative"],
    member: false,
    content: articles.article09,
  },
  {
    id: "post-05",
    url: photos.photo10,
    title: "You must grow like a tree",
    author: "Patricia Jenkins",
    authorUrl: "https://source.unsplash.com/1600x900/?animals",
    color: "#fddfd8",
    tags: ["creative", "idea", "story"],
    member: false,
    content: articles.article10,
  },
  {
    id: "post-06",
    url: photos.photo05,
    title: "The difference is quality",
    author: "Hannah Weastell",
    authorUrl: "https://source.unsplash.com/1600x900/?car",
    color: "#e1e6ff",
    tags: ["product", "idea"],
    member: false,
    content: articles.article05,
  },
  {
    id: "post-07",
    url: photos.photo06,
    title: "Being unique is better than being perfect",
    author: "Megan Anderson",
    authorUrl: "https://source.unsplash.com/1600x900/?laptop",
    color: "#fdeacc",
    tags: ["home", "idea", "creative", "lifestyle"],
    member: false,
    content: articles.article07,
  },

  {
    id: "post-09",
    url: photos.photo13,
    title: "My childhood was full of wonderful memories",
    author: "Charles Barrett",
    authorUrl: "https://source.unsplash.com/1600x900/?travel",
    color: "#e6f5ca",
    tags: ["story", "idea"],
    member: false,
    content: articles.article13,
  },
  {
    id: "post-10",
    url: photos.photo14,
    title: "Brand is just a perception, and will match reality over time",
    author: "Victoria West",
    authorUrl: "https://source.unsplash.com/1600x900/?nature",
    color: "#fdeacc",
    tags: ["product", "creative", "lifestyle"],
    member: true,
    content: articles.article14,
  },
  {
    id: "post-11",
    url: photos.photo15,
    title: "Look at life with the eyes of a child",
    author: "Victoria West",
    authorUrl: "https://source.unsplash.com/1600x900/?nature",
    color: "#fce6f0",
    tags: ["story", "creative"],
    member: false,
    content: articles.article15,
  },
  {
    id: "post-12",
    url: photos.photo16,
    title: "Now we're getting somewhere",
    author: "Patricia Jenkins",
    authorUrl: "https://source.unsplash.com/1600x900/?animals",
    color: "#ffeab9",
    tags: ["story", "product", "home"],
    member: false,
    content: articles.article16,
  },
  {
    id: "post-13",
    url: photos.photo01,
    title: "Anyone can hold the helm when the sea is calm",
    author: "Charles Barrett",
    authorUrl: "https://source.unsplash.com/1600x900/?travel",
    color: "#d2f8f0",
    tags: ["home", "story", "lifestyle"],
    member: true,
    content: articles.article01,
  },
  {
    id: "post-14",
    url: photos.photo12,
    title: "Cusine is a mirros, reflecting the culture",
    author: "Victoria West",
    authorUrl: "https://source.unsplash.com/1600x900/?nature",
    color: "#fddfd8",
    tags: ["creative", "idea", "story"],
    member: false,
    content: articles.article12,
  },
  {
    id: "post-15",
    url: photos.photo04,
    title: "I always loved aesthetics",
    author: "Hannah Weastell",
    authorUrl: "https://source.unsplash.com/1600x900/?car",
    color: "#ffeab9",
    tags: ["home", "story", "creative"],
    member: true,
    content: articles.article04,
  },
  {
    id: "post-16",
    url: photos.photo03,
    title: "Comfort and simplicity are two keys",
    author: "Megan Anderson",
    authorUrl: "https://source.unsplash.com/1600x900/?travel",
    color: "#f4f4f7",
    tags: ["product", "idea", "lifestyle"],
    member: false,
    content: articles.article03,
  },
  {
    id: "post-17",
    url: "https://source.unsplash.com/1600x900/?sea",
    title: "Music heals soul",
    author: "Charles Barrett",
    authorUrl: "https://source.unsplash.com/1600x900/?laptop",
    color: "#f1e0ff",
    tags: ["music", "lifestyle"],
    member: false,
    content: articles.article03,
  },
  {
    id: "post-18",
    url: "https://source.unsplash.com/1600x900/?book",
    title: "Even if we fall we will rise up",
    author: "Lauren Langford",
    authorUrl: "https://source.unsplash.com/1600x900/?sunrise",
    color: "#d4ffdf",
    tags: ["motivation", "lifestyle", "goal"],
    member: true,
    content: articles.article03,
  },
];

window.totalArticles = postData.length;

window.uniqueTags = [
  {
    tagName: "creative",
    tagUrl: "https://source.unsplash.com/1600x900/?creative",
  },
  {
    tagName: "idea",
    tagUrl: "https://source.unsplash.com/1600x900/?idea",
  },
  {
    tagName: "product",
    tagUrl: "https://source.unsplash.com/1600x900/?product",
  },
  {
    tagName: "story",
    tagUrl: "https://source.unsplash.com/1600x900/?story",
  },
  {
    tagName: "motivation",
    tagUrl: "https://source.unsplash.com/1600x900/?motivation",
  },
  {
    tagName: "goal",
    tagUrl: "https://source.unsplash.com/1600x900/?goal",
  },
  {
    tagName: "home",
    tagUrl: "https://source.unsplash.com/1600x900/?home",
  },
  {
    tagName: "music",
    tagUrl: "https://source.unsplash.com/1600x900/?music",
  },
  {
    tagName: "lifestyle",
    tagUrl: "https://source.unsplash.com/1600x900/?lifestyle",
  },
];

window.uniqueAuthors = [
  {
    authorName: "Megan Anderson",
    authorUrl: "https://source.unsplash.com/1600x900/?laptop",
    authorbg: authorbg01,
  },
  {
    authorName: "Hannah Weastell",
    authorUrl: "https://source.unsplash.com/1600x900/?car",
    authorbg: authorbg02,
  },
  {
    authorName: "Victoria West",
    authorUrl: "https://source.unsplash.com/1600x900/?nature",
    authorbg: authorbg03,
  },
  {
    authorName: "Charles Barrett",
    authorUrl: "https://source.unsplash.com/1600x900/?travel",
    authorbg: authorbg04,
  },
  {
    authorName: "Patricia Jenkins",
    authorUrl: "https://source.unsplash.com/1600x900/?animals",
    authorbg: authorbg05,
  },
  {
    authorName: "Lauren Langford",
    authorUrl: "https://source.unsplash.com/1600x900/?people",
    authorbg: authorbg06,
  },
];

function calculateTotalArticlesPerAuthor(array) {
  array.forEach((post, index) => {
    for (let i = 0; i < postData.length; i++) {
      if (postData[i].author === post.authorName) {
        if (array[index].total !== undefined) {
          array[index].total += 1;
        } else {
          array[index].total = 1;
        }
      }
    }
  });
}

function calculateTotalTagsPerTag(array) {
  array.forEach((tag, index) => {
    for (let i = 0; i < postData.length; i++) {
      if (postData[i].tags.includes(tag.tagName)) {
        if (array[index].total !== undefined) {
          array[index].total += 1;
        } else {
          array[index].total = 1;
        }
      }
    }
  });
}

calculateTotalTagsPerTag(window.uniqueTags);
calculateTotalArticlesPerAuthor(window.uniqueAuthors);

export default postData;
