class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

const video1 = new Video('Introduction to JavaScript', 'JohnDoe', 120);
video1.watch();

const video2 = new Video('CSS Basics', 'JaneSmith', 180);
video2.watch();

const videoData = [
  { title: 'React Basics', uploader: 'Alice123', time: 240 },
  { title: 'Node.js Fundamentals', uploader: 'Bob456', time: 300 },
  { title: 'HTML5 and Beyond', uploader: 'Eve789', time: 200 },
  { title: 'JavaScript Promises', uploader: 'CharlieXYZ', time: 150 },
  { title: 'Web Design Principles', uploader: 'Grace789', time: 180 }
];

const videoInstances = [];
for (const data of videoData) {
  const video = new Video(data.title, data.uploader, data.time);
  videoInstances.push(video);
}

for (const videoInstance of videoInstances) {
  videoInstance.watch();
}
