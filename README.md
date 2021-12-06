# POEditor JSON import

Import translations from POeditor as json key value files.

### Why:

Having local json files of translations is better for performance than retrieving them from an API. Splitting this up for tags means you don't have to load all translations on each page. However, importing this can be a pain. Using this command you can automate this task as part of your docker build, or run manually and keep the json files in your repo.

### How to use:

1. create a poeditor-import.config.js like the sample in this repo.
2. run `npx @gravitybv/poeditor-json-import`
3. ...
4. profit!

### Config:

- token: The API key of your poeditor account. Keep this private! It is recommended to read this from a .env file in your config so it won't be part of source control.
- project: The ID of the project you will be importing translations from.
- outDir: Where the imported translations will be placed.
- concurrency: Optional. Specify the amount of concurrent requests. Will set to a default of 2 if not provided. Increasing this number might cause throttling from POEditor, causing a crash.
- sort: Optional. When set to true it will sort terms alphabetically.
- filter: Optional. Pass the filter you wish to apply. Options are : 'translated', 'untranslated', 'fuzzy', 'not_fuzzy', 'automatic', 'not_automatic', 'proofread', 'not_proofread'.
- tags: Optional. A list of the tags you wish to import. When provided it will split the tags into seperate files named after the tag. When left empty it will download all tags into one file.
- languages: Optional. A list of languages you wish to import. When provided it will split the files into seperate folders named after the translation. When left empty it will download for every language.
- transformLocaleCodes: Optional. An object where keys resemble original codes, and values the transformed values. These will be transformed in the file and folder names.

### Run from original repo:

Use command `npm run dev` to run locally for development of this repo. It will use file `poeditor-import-config.js` which you can create yourself by copying from `sample-poeditor-import.config.js`. This config file will not be synced into the source control.
