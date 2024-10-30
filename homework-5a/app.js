function begin() {
  // Initial message to the user
  let proceed = confirm(
    "You are here to help your friend who doesn't know what they want to eat. Follow the prompt to make your selection.\nClick Ok to continue."
  );

  // Check if the user clicked "Cancel" on the initial confirm
  if (!proceed) {
    confirm("Operation canceled.");
    return; // Exit if "Cancel" was clicked
  }

  part1();

  function part1() {
    let p = prompt(
      `Question: Would you like to Cook or Eat Out? \n Enter number (1) for "Eat Out" or (2) for "Cook"`
    );

    // Check if user clicked "Cancel"
    if (p === null) {
      confirm("Operation canceled.");
      return; // Exit the function to stop further execution
    }
    if (p == 1) {
      confirm(" Congratulations! You Selected Eat Out.");
      part2();
    } else if (p == 2) {
      // Fixed the typo here
      confirm("Congratulations! You Selected Cook.");
      part3();
    }
  }

  function part2() {
    p = prompt(
      `Let's Continue! Where would you like to eat at? #\nSelect (1) for Fastfood or (2) for Fancy Resturant`
    );
    // Check if user clicked "Cancel"
    if (p === null) {
      confirm("Operation canceled.");
      return; // Exit the function to stop further execution
    }
    if (p == 1) {
      confirm("Congratulations! You Selected Fast food.");
      part4();
    } else if (p == 2) {
      confirm("Congratulations! You Selected Fancy Resturant.");
      part5();
    }
  }

  function part4() {
    prompt(
      `Yuck! but let's keep going. What's your fav?\nSelect (1) for MCdonalds or (2) for PandaXpress`
    );

    // Check if user clicked "Cancel"
    if (p === null) {
      confirm("Operation canceled.");
      return; // Exit the function to stop further execution
    }
    if (p == 1) {
      confirm("Congratulations! You Selected MC Donalds"); // Model End 8
    } else if (p == 2) {
      confirm("Congratulations! You Selected PandaXpress"); // Model End 9
    }
  }

  function part5() {
    prompt(
      `Nice Choice! let keep going. What's your fav choice?\nSelect (1) for Nobu or (2) for Logans`
    );
    // Check if user clicked "Cancel"
    if (p === null) {
      confirm("Operation canceled.");
      return; // Exit the function to stop further execution
    }
    if (p == 1) {
      confirm("Congratulations! You Selected Nobu"); // Model End 10
    } else if (p == 2) {
      confirm("Congratulations! You Selected Logan"); // Model End 11
    }
  }

  function part3() {
    p = prompt(
      `Let's Continue! What would you like to cook? #\nSelect (1) for Chinese Cusine or (2) for Mexican dish`
    );

    // Check if user clicked "Cancel"
    if (p === null) {
      confirm("Operation canceled.");
      return; // Exit the function to stop further execution
    }
    if (p == 1) {
      confirm("Congratulations! You Selected Chinese Cusine");
      part6();
    } else if (p == 2) {
      confirm("Congratulations! You Selected Mexican dish");
      part7();
    }
  }

  function part6() {
    prompt(
      `Nice! let's keep going. What's your fav choice?\nSelect (1) for Chicken Fried Rice or (2) for Shrimp Fried Rice`
    );
    // Check if user clicked "Cancel"
    if (p === null) {
      confirm("Operation canceled.");
      return; // Exit the function to stop further execution
    }

    if (p == 1) {
      confirm("Congratulations! You Selected Chicken Fried Rice"); // End  12
    } else if (p == 2) {
      confirm("Congratulations! You Selected Shrimp Fried Rice"); // End 13
    }
  }

  function part7() {
    prompt(
      `Nice! let's keep going. What's your fav choice?\nSelect (1) for Street taco or (2) for Tamales`
    );

    // Check if user clicked "Cancel"
    if (p === null) {
      confirm("Operation canceled.");
      return; // Exit the function to stop further execution
    }
    if (p == 1) {
      confirm("Congratulations! You Selected Street taco"); // End 14
    } else if (p == 2) {
      confirm("Congratulations! You Selected Tamales"); // End 15
    }
  }
}
