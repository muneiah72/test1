const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `title` input defined in action metadata file
  const title = core.getInput('title', {required: true});
  console.log(`Hello ${title}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload)
  const data = JSON.parse(JSON.stringify(github.context.payload.inputs))
  console.log(`The payload title: ${data.title}`);
  console.log(`The payload reviewer: ${data.reviewer}`);
  console.log(`The payload PAT: ${data.pat}`);
  console.log(`The event payload: ${payload}`);

} catch (error) {
  core.setFailed(error.message);
}
