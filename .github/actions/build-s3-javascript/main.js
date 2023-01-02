const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    // get input values
    const bucketName = core.getInput('bucket-name', { required: true });
    const bucketRegion = core.getInput('bucket-region', { required: true });
    const artifactsFolder = core.getInput('artifacts-folder', { required: true });

    // Upload files to the S3
    const s3Uri = `s3://${bucketName}`;
    exec.exec(`aws s3 sync ${artifactsFolder} ${s3Uri} --region ${bucketRegion}`);

    core.notice('Hello from my Javascript action!');
}

run();
