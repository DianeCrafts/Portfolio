function sortByStartDateDesc(items) {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.period.start);
    const dateB = new Date(b.period.start);

    return dateB - dateA; // DESC (newest first)
  });
}

module.exports = {
  sortByStartDateDesc
};