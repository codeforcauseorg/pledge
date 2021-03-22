# Pledge

It is a platform to reimagine about places we put our efforts into as developers. In most cases, we all are attached to the goals that provide eventual satisfaction. Let's all come together and take the pledge to Code for Cause leading to a better future.

## Installation & Set Up

1. In the top-right corner of the page, click Fork. Create a local clone of your fork:

   ```sh
   git clone https://github.com/YOUR-USERNAME/pledge
   ```

2. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   cd pledge
   nvm install
   ```

3. Install the Gatsby CLI

   ```sh
   npm install -g gatsby-cli
   ```

4. Install dependencies

   ```sh
   npm install
   ```

5. Start the development server

   ```sh
   npm run develop
   ```

## Steps to take the pledge

1. Create new file under **pledge/src/data/contributors/** with name [your-username].json
2. Add this json content and edit it with your details

```
{
    "name": "Ganga Chaturvedi",
    "skills" : ["JS", "React"],
    "cause" : "empowerment",
    "image" : "Avatar2",
    "github" : "https://github.com/gangachatrvedi",
    "twitter" : "https://twitter.com/gangachatrvedi",
    "linkedin" : "https://www.linkedin.com/in/gangachatrvedi"
}
```

3. Commit and generate your awesome pull request with us at **codeforcauseorg/pledge**

Take a look [here](./hints/create_pledge.md) for detailed version.

## Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run build
   ```

1. Preview the site as it will appear once deployed

   ```sh
   npm run serve
   ```

## Contributing

Pull requests are welcome.

See the [guidelines](contributing.md) for contributing to this project.

## License

[MIT](https://choosealicense.com/licenses/mit/)
