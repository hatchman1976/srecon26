variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "deploy_role_arn" {
  description = "ARN of the IAM role to assume for deployments"
  type        = string
}

variable "domain_name" {
  description = "Domain name for the presentation site"
  type        = string
  default     = "srecon26.hatchman76.com"
}

variable "root_domain" {
  description = "Root domain for Route 53 hosted zone lookup"
  type        = string
  default     = "hatchman76.com"
}
