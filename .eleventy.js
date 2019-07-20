const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("paddedCatalogNumber", number => {
        if (number <= 999) {
            number = ("000" + number).slice(-3);
        }
        return number;
    });

    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('d MMMM y');
    });

    return {
        templateFormats: [
            "md",
            "njk",
            "html",
            "css",
            "png",
            "jpg",
        ],
        passthroughFileCopy: true,
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
