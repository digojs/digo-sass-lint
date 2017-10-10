var sasslint = require("sass-lint");

module.exports = function SassLint(file, options) {
    options = Object.assign({}, options);
    var result = sasslint.lintFileText({
        text: file.content,
        format: file.ext.replace('.', ''),
        filename: file.srcPath
    }, options, options.configuration || ".sass-lint.yml");

    for (const output of result.messages) {
        const e = {
            plugin: SassLint.name,
            message: output.ruleId + ": " + output.message,
            fileName: result.filePath,
            line: output.line,
            column: output.character
        };
        if (options.level === "warning" || options.level !== "error" && output.severity <= 1) {
            file.warning(e);
        } else {
            file.error(e);
        }
    }
};
