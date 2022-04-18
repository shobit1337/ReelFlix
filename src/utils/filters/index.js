export const filterList = (list, filters) => {
  let newList = list.filter((item) => {
    // Filter by Category
    if (filters.categoryName && !item.category.includes(filters.categoryName)) {
      return false;
    }
    return true;
  });

  newList = searchItems(newList, filters.searchName);

  if (filters.sort.type === 'ASCENDING') {
    switch (filters.sort.by) {
      case 'LIKES':
        return [...newList].sort((a, b) => a.likes - b.likes);

      case 'VIEWS':
        return [...newList].sort((a, b) => a.views - b.views);

      case 'LATEST':
        return [...newList].sort((a, b) => {
          const dateA = new Date(a.uploadedAt);
          const dateB = new Date(b.uploadedAt);
          return dateA.getTime() - dateB.getTime();
        });

      default:
        break;
    }
  } else if (filters.sort.type === 'DESCENDING') {
    switch (filters.sort.by) {
      case 'LIKES':
        return [...newList].sort((a, b) => b.likes - a.likes);

      case 'VIEWS':
        return [...newList].sort((a, b) => b.views - a.views);

      case 'LATEST':
        return [...newList].sort((a, b) => {
          const dateA = new Date(a.uploadedAt);
          const dateB = new Date(b.uploadedAt);
          return dateB.getTime() - dateA.getTime();
        });

      default:
        break;
    }
  }
  return newList;
};

export const searchItems = (searchList, searchName) =>
  searchName
    ? searchList.filter((searchItem) =>
        searchItem.title.toLowerCase().includes(searchName.toLowerCase())
      )
    : searchList;

export const getFiltersCount = (filters) => {
  let count = 0;
  if (filters.categoryName) {
    count += 1;
  }
  if (filters.sort.by) {
    count += 1;
  }
  if (filters.searchName) {
    count += 1;
  }
  return count;
};
