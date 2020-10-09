export const registerUser = (newUser) => {
  // sacamos los usuarios registrados que haya en session storage
  const usersStorage = sessionStorage.getItem("users");

  if (usersStorage) {
    const users = JSON.parse(usersStorage);
    const newUsers = [...users, newUser];
    sessionStorage.setItem("users", JSON.stringify(newUsers));
  } else {
    sessionStorage.setItem("users", JSON.stringify([newUser]));
  }
};

export const getUserByUsernameAndPassword = (username, password) => {
  const usersStorage = sessionStorage.getItem("users");

  if (usersStorage) {
    const users = JSON.parse(usersStorage);
    const loggedUser = users.find(
      (user) => user.username === username && user.password === password
    );
    return loggedUser;
  } else {
    return null;
  }
};
