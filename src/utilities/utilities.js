const getLocalDataReadList = () => {
  const localReadList = localStorage.getItem("ReadBooksId");
  if (localReadList === null) {
    localStorage.setItem("ReadBooksId", JSON.stringify([]));
    return [];
  } else {
    return JSON.parse(localReadList);
  }
};

const setLocalDataReadList = (bookId) => {
  console.log(parseInt(bookId) + 1);
  const localReadList = getLocalDataReadList();
  const newReadList = [...localReadList, parseInt(bookId) + 1];
  localStorage.setItem("ReadBooksId", JSON.stringify(newReadList));
};

const getLocalDataWishList = () => {
  const localWishList = localStorage.getItem("WishBooksId");
  if (localWishList === null) {
    localStorage.setItem("WishBooksId", JSON.stringify([]));
    return [];
  } else {
    return JSON.parse(localWishList);
  }
};

const setLocalDataWishList = (bookId) => {
  const localWishList = getLocalDataWishList();
  const newWishList = [...localWishList, parseInt(bookId) + 1];
  localStorage.setItem("WishBooksId", JSON.stringify(newWishList));
};

export {
  getLocalDataReadList,
  setLocalDataReadList,
  setLocalDataWishList,
  getLocalDataWishList,
};
