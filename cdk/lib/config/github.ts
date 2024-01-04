import { env } from "process"; 

// https://eu-west-1.console.aws.amazon.com/codesuite/settings/connections?region=eu-west-1&connections-meta=eyJmIjp7InRleHQiOiIifSwicyI6e30sIm4iOjIwLCJpIjowfQ
export class GithubConfig {
    static readonly GITHUB_REPO: string = "airwalk-mj/eks-infra-single-cluster";
    static readonly GITHUB_CODESTAR_CONNECTION_ARN = "arn:aws:codestar-connections:eu-west-1:544294979223:connection/29d4d875-8eaa-4e19-ad9f-8dcb8f0cce19";
}
