const fs = require('fs').promises;
const axios = require('axios');
const cheerio = require('cheerio');

const createGoogleMapsURL = (address, borough, zip) => {
  // Encode the address for URL
  const encodedAddress = encodeURIComponent(`${address}, ${borough} ${zip}`);
  // Return the full Google Maps URL
  return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
};

const scrapeAndUpdateFile = async () => {
  try {
    // Fetch the webpage
    const { data: html } = await axios.get(
      'https://www.foodbanknyc.org/get-help/'
    );
    const $ = cheerio.load(html);

    // Find the container of the events.
    const events = [];
    $('table')
      .first()
      .find('tr')
      .each((index, element) => {
        if (index === 0) return; // Skip the header row if there is one

        const tds = $(element).find('td');
        events.push({
          date: $(tds[0]).text().trim(),
          time: $(tds[1]).text().trim(),
          siteName: $(tds[2]).text().trim(),
          address: $(tds[3]).text().trim(),
          borough: $(tds[4]).text().trim(),
          zip: $(tds[5]).text().trim(),
        });
      });

    // Format the data into strings for each event
    const formattedEvents = events
      .map((event) => {
        const mapsURL = createGoogleMapsURL(
          event.address,
          event.borough,
          event.zip
        );
        return `${event.date} | Distribution time is between ${event.time} at ${event.siteName} | Address: ${event.address}, ${event.borough} ${event.zip} | Directions: ${mapsURL}`;
      })
      .join('\n');

    // Write the formatted string to the pantries.txt file
    await fs.writeFile('../../public/pantries.txt', formattedEvents);

    console.log('pantries.txt has been updated with all events.');
  } catch (error) {
    console.error('Error scraping events:', error);
  }
};

scrapeAndUpdateFile();
