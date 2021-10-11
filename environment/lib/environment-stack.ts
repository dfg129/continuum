import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as eks from '@aws-cdk/aws-eks';
import * as iam from '@aws-cdk/aws-iam';


export class EnvironmentStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'CafeVPC');

    const securityGroup = new ec2.SecurityGroup(this, 'security-group-id', { vpc })

  

    // const eksCluster = new eks.Cluster(this, 'devtest-eks', { 
    //   clusterName: 'devtest-eks',
    //   vpc: vpc,
    //   version: eks.KubernetesVersion.V1_21,
    //   // mastersRole: clusterAdmin,
    // });


    // const ng = eksCluster.addNodegroupCapacity('nifi', {
    //   instanceType: ec2.InstanceType.of(ec2.InstanceClass.M6GD, ec2.InstanceSize.MEDIUM),
    //   minSize: 1,
    //   maxSize: 1,
    // });

  }
}
