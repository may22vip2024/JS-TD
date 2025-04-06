document.addEventListener("DOMContentLoaded", function () {
    var linkMappings = [
        { title: "Play Now", url: "https://www.ph345.games/?affiliateCode=googv3" },
    ];
    linkMappings.forEach(function (mapping) {
        var links = document.querySelectorAll(`a[title="${mapping.title}"]`);
        links.forEach(function (link) {
            if (mapping.url) {
                link.href = mapping.url;
            }
            link.setAttribute("rel", "noreferrer noopener");
            link.setAttribute("target", "_blank");
        });
    });
  });
