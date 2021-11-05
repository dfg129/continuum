#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { EnvironmentStack } from '../lib/environment-stack';

const app = new cdk.App();
new EnvironmentStack(app, 'EnvironmentStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
