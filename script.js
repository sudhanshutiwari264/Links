const linkList = document.getElementById("link-list");

// Define your links here
const links = [
  { name: "Github", url: "https://github.com/sudhanshutiwari264" },
  { name: "Twitter", url: "https://twitter.com/Pythontiwari" },
  { name: "Instagram", url: "https://www.instagram.com/tiwariji264/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/tiwari-sudhanshu/" },
  // Add more links as needed
];

// Create links and append them to the link list
links.forEach(link => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = link.url;
  a.textContent = link.name;
  li.appendChild(a);
  linkList.appendChild(li);
});
