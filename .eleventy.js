module.exports = function (eleventyConfig) {
    return {
        templateFormats: [
            "md",
            "njk",
            "html",
            "png",
        ],
        passthroughFileCopy: true,
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
