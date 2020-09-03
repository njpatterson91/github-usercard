/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";
axios
  .get("https://api.github.com/users/odst0016")
  .then((stuff) => {
    console.log(stuff.data.avatar_url);
  })
  .catch((err) => {
    console.log(err);
    //debugger;
  });
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const entryPoint = document.querySelector(".cards");
function githubUsersCard(props) {
  //Instantiating and adding content
  const divCard = document.createElement("div");
  const userImg = document.createElement("img");
  userImg.src = props.avatar_url;
  const divInfo = document.createElement("div");
  const usersFullNameH3 = document.createElement("h3");
  usersFullNameH3.textContent = props.name;
  const userName = document.createElement("p");
  userName.textContent = props.login;
  const userLocation = document.createElement("p");
  userLocation.textContent = props.location;
  const userProfile = document.createElement("p");
  userProfile.textContent = "Profile:";
  const userProfileLink = document.createElement("a");
  userProfileLink.src = props.html_url;
  const userFollower = document.createElement("p");
  userFollower.textContent = `Followers: ${props.followers}`;
  const userFollowing = document.createElement("p");
  userFollowing.textContent = `Following: ${props.following}`;
  const userBio = document.createElement("p");
  userBio.textContent = `Bio: ${props.bio}`;
  //Setting Styles
  divCard.classList.add("card");
  divInfo.classList.add("card-info");
  usersFullNameH3.classList.add("name");
  userName.classList.add("username");
  //creating component structure
  divCard.appendChild(userImg);
  divCard.appendChild(divInfo);
  divInfo.appendChild(usersFullNameH3);
  divInfo.appendChild(userName);
  divInfo.appendChild(userLocation);
  divInfo.appendChild(userProfile);
  userProfile.appendChild(userProfileLink);
  divInfo.appendChild(userFollower);
  divInfo.appendChild(userFollowing);
  divInfo.appendChild(userBio);
  return divCard;
}

axios.get("https://api.github.com/users/odst0016").then((props) => {
  const data = props.data;
  //console.log(test);
  //console.log(githubUsersCard({ test }));
  // console.log(
  //test.forEach((props) => {
  //console.log();c
  entryPoint.appendChild(githubUsersCard(data));
  // })
  //);
});

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
