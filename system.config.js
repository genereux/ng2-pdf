System.config({
    defaultJSExtensions: true,
    //map tells the System loader where to look for things
    map: {
        app: "./",
        PDFJS: '../node_modules/pdfjs-dist/build/pdf.combined.js'
    },
    //packages defines our app package
    packages: {
        app: {
            main: './app.js'
        }
    }
});