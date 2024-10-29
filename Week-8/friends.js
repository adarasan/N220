// Reference Variables

const friendNameInputRef = document.getElementById("friendName");

const friendsList = document.getElementById("friendsList");

//create an mnew variable to track my friend list
// use arrays to track a list

const myFriends = [];

// function for adding my friend

function addFriend() {
  //get the name of the user typed in
  const nameValue = friendNameInputRef.value;
  //add friend to myFriends list
  myFriends.push(nameValue);
  //add the name to the friend list
  friendsList.innerHTML += `<li>
    ${nameValue} <button onclick= "removeFriend('${nameValue}')">X</button>
    </li>`;
  //clear the name the user typed
  friendNameInputRef.value = "";
}

// create a function to remove friends
function removeFriend(friendName) {
  // use variables t track index of friend to delete
  let friendIndex;

  //loop current friends to find friends to find the  friendnName to delete
  for (let i = 0; i < myFriends.length; i++) {
    if (myFriends[i] === friendName) {
      friendName = i;
    }

    //console.log(friendIndex);
  }

  myFriends.splice(friendIndex, 1);

  console.log(myFriends);
}

// function to show friend list
function showFriends() {
  // clear page old friend list

  friendsListRef.innerHTML = "";

  // loop throught the friend list

  myFriends.forEach(function (friendName) {
    //add the name to the friends list
    friendsListRef.innerHTML += `<li<span>${nameValue}</span><button onclick= "removeFriend('${nameValue}')">X
        </button>

        <button onclick= "removeFriend('${friendName}', true)"> &#8593; </button>

        <button onclick= "removeFriend('${friendName}', false)"> &#8595; </button>
    
    </li>`;
  });
}

// function for clear list of friends
function clearList() {
  myFriends.splice(0, myFriends.length);

  showFriends();
}

// function to move friends ranking
function moveFriend(friendName, isMovingUp) {
  let friendIndex;
  let friendNewIndex;
  for (i = 0; i < myFriends.length; i++) {
    if (myFriends[i] === friendName) {
      friendIndex = i;

      //['A', 'B', 'C'] move 'B' up 1 space
      //index of 'B' is originally 1
      // This is what the result should be
      //['B', 'A', 'C'] so the new index would be zero 0
      if (isMovingUp) {
        friendNewIndex = friendIndex - 1;
      } else {
        friendNewIndex = friendIndex + 1;
      }
    }
  }

  //remove friend from old space
  myFriends.splice(friendIndex, 1);
  //add
}
