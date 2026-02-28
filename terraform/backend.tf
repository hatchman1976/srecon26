terraform {
  backend "s3" {
    bucket         = "hatchman76-terraform-state"
    key            = "srecon26/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-state-lock"
    encrypt        = true
  }
}
