/**
 * How many listings to show per page
 * @constant {number}
 */
export const LISTING_PAGE_SIZE = 75;

export function resizeMasonryItem(item) {
  /* Get the grid object, its row-gap, and the size of its implicit rows */
  const grid = document.getElementsByClassName('classifieds-columns')[0];
  const rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue('grid-row-gap'),
    10,
  );
  const rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'),
    10,
  );

  const rowSpan = Math.ceil(
    (item.querySelector('.listing-content').getBoundingClientRect().height +
      rowGap) /
      (rowHeight + rowGap),
  );

  /* Set the spanning as calculated above (S) */
  // eslint-disable-next-line no-param-reassign
  item.style.gridRowEnd = `span ${rowSpan}`;
}

export function updateListings(classifiedListings) {
  const fullListings = [];

  classifiedListings.forEach((listing) => {
    if (listing.bumped_at) {
      fullListings.push(listing);
    }
  });

  return fullListings;
}

export function resizeAllMasonryItems() {
  // Get all item class objects in one list
  const allItems = document.getElementsByClassName('single-classified-listing');

  /*
   * Loop through the above list and execute the spanning function to
   * each list-item (i.e. each masonry item)
   */
  // eslint-disable-next-line vars-on-top
  for (let i = 0; i < allItems.length; i += 1) {
    resizeMasonryItem(allItems[i]);
  }
}
