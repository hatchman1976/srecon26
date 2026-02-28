output "s3_bucket_name" {
  description = "S3 bucket for presentation content"
  value       = aws_s3_bucket.content.id
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID (for cache invalidation)"
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.site.domain_name
}

output "site_url" {
  description = "URL of the presentation"
  value       = "https://${var.domain_name}"
}
