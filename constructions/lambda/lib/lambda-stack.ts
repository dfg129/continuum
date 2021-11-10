import * as cdk from '@aws-cdk/core';
import * as _lambda from '@aws-cdk/aws-lambda';
import {NodejsFunction} from '@aws-cdk/aws-lambda-nodejs';
import {Repository} from '@aws-cdk/aws-ecr';
import {DockerImageAsset, DockerImageAssetProps} from '@aws-cdk/aws-ecr-assets';
import * as ecrdeploy from 'cdk-ecr-deployment';
import * as path from 'path';



export class LambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const entryfile = path.join(__dirname, 'handlers/handler.ts');
    const docker_dir = path.join(__dirname, '..');

   console.log("----- {}", docker_dir);

    const repo = new Repository(this, 'image_repo', {});

    const image = new DockerImageAsset(this, 'image_props', {
      directory: docker_dir,
      repositoryName: 'lambdastack',
    });

    new  ecrdeploy.ECRDeployment(this, 'LambdaImage', {
      src: new ecrdeploy.DockerImageName(image.imageUri),
      dest: new ecrdeploy.DockerImageName(`${cdk.Aws.ACCOUNT_ID}.ekr.ecr.us-east-1.amazonaws.com/test:lambda`),
    })


    const lambda = new _lambda.DockerImageFunction(
          this,   
          'lambda', 
          { 
            code: _lambda.DockerImageCode.fromImageAsset(docker_dir, {
              repositoryName: 'lambdastack',
            }),
          });
    

  //   const handler = new NodejsFunction(this, 'lambda-run', {
  //     bundling: {
  //       forceDockerBundling: true,
  //       dockerImage: cdk.ContainerImage.
  //     }, 
  //     entry: entryfile,  
  //     runtime: lambda.Runtime.NODEJS_14_X,    
  //     handler: 'run', 
  //     architecture: lambda.Architecture.ARM_64,
  //   });  
  }
}
