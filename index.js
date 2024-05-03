const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `title` input defined in action metadata file
  const title = core.getInput('title', { required: true });
  console.log(`Hello ${title}!`);
  const reviewer = core.getInput('reviewer', { required: true });
  console.log(`Hello ${reviewer}!`);
  const pat = core.getInput('pat', { required: true });
  console.log(`Hello ${pat}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload)
  const data = JSON.stringify(github.context.payload.inputs)
  console.log(`The payload title: ${data.title}`);
  console.log(`The event payload: ${payload}`);

} catch (error) {
  core.setFailed(error.message);
}
