import yargs from "yargs";

export const commandLineSetUp = () =>
  yargs
    .env("GITHUB")
    .option("token", {
      describe: "GITHUB_TOKEN env should be set",
      demandOption: true
    })
    .options({
      repo: {
        alias: "r",
        describe: "Github repo to pull changes from",
        demandOption: true
      },
      "next-version": {
        alias: "nv",
        describe: "The next version of the software to be release",
        demandOption: true
      },
      "last-commit": {
        alias: "lc",
        describe: "The last commit hash to be considered for the changelog",
        demandOption: true
      },
      "output-pr-links": {
        alias: "opl",
        describe:
          "Adds the corresponding Github link at the end of the change message"
      },
      "prev-version": {
        alias: "pv",
        describe:
          "The prev version tag you wish to begin the log generation from"
      }
    })
    .help()
    .alias("h", "help").argv;
