variable "aws_region" {
  description = "AWS region for the state bucket and DynamoDB table"
  type        = string
  default     = "us-east-1"
}

variable "state_bucket_name" {
  description = "Name of the S3 bucket for Terraform state"
  type        = string
  default     = "hatchman76-terraform-state"
}

variable "lock_table_name" {
  description = "Name of the DynamoDB table for state locking"
  type        = string
  default     = "terraform-state-lock"
}

variable "iam_user_name" {
  description = "Name of the IAM user for Terraform operations"
  type        = string
  default     = "terraform-deploy"
}

variable "iam_role_name" {
  description = "Name of the IAM role for Terraform deployments"
  type        = string
  default     = "TerraformDeployRole"
}
