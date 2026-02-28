output "state_bucket_name" {
  description = "S3 bucket for Terraform state"
  value       = aws_s3_bucket.state.id
}

output "lock_table_name" {
  description = "DynamoDB table for state locking"
  value       = aws_dynamodb_table.lock.name
}

output "iam_user_name" {
  description = "IAM user for Terraform operations"
  value       = aws_iam_user.deploy.name
}

output "iam_user_arn" {
  description = "ARN of the IAM user"
  value       = aws_iam_user.deploy.arn
}

output "iam_role_arn" {
  description = "ARN of the Terraform deploy role"
  value       = aws_iam_role.deploy.arn
}

output "iam_role_name" {
  description = "Name of the Terraform deploy role"
  value       = aws_iam_role.deploy.name
}
