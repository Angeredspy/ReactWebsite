const cheerio = require('cheerio');
const axios = require('axios');

const fetchFoodDistributionInfo = async () => {
  try {
    const url = 'https://www.foodbanknyc.org/get-help/';
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const foodDistributionList = [];

    // Locate the desired sections containing the food distribution dates and times
    const foodDistributionSections = $('.wpb_wrapper')
      .filter((_i, el) => $(el).text().includes('| Directions'))
      .has('ul > li');

    foodDistributionSections.each((_i, section) => {
      // Find the ul element within the current section
      const foodDistributionSection = $(section)
        .find('ul > li')
        .first()
        .parent();

      // Iterate through each list item and store the text
      foodDistributionSection.children('li').each((_j, element) => {
        const dateAndTime = $(element).text().trim();

        // Check if the list item starts with a day of the week
        if (
          /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)/.test(
            dateAndTime
          )
        ) {
          foodDistributionList.push(dateAndTime);
        }
      });
    });
return foodDistributionList;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchFoodDistributionInfo();

module.exports = {
  fetchFoodDistributionInfo,
};