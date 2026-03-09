# SREcon26 Presentation

An interactive [impress.js](https://impress.js.org/) presentation for SREcon26, exploring the impact of AI on SRE expertise — how tool commoditization, prompt-driven workflows, and the erosion of rigorous practice threaten the deep system knowledge that makes site reliability engineering effective.

**Live site:** [https://srecon26.hatchman76.com](https://srecon26.hatchman76.com)

## Author

Andrew Hatch ([@hatchman76](https://github.com/hatchman1976))

## Running Locally

Simply open `src/index.html` in a modern web browser.

For the best experience, use Chrome or Firefox in fullscreen mode (press `F11`).

## Navigation

- **Arrow keys** or **Space**: Navigate between slides
- **Page Up/Down**: Navigate between slides
- **Home**: Go to first slide
- **End**: Go to last slide
- **P**: Open presenter console (if plugin enabled)

## Project Structure

```
srecon26/
├── src/
│   ├── index.html          # Main presentation file
│   ├── favicon.ico          # Site favicon
│   ├── css/                 # Stylesheets
│   │   ├── presentation.css # Primary presentation styles and animations
│   │   ├── shrug.css
│   │   ├── flash.css
│   │   └── csshake.min.css
│   ├── js/                  # JavaScript files
│   │   ├── impress.js       # impress.js library
│   │   ├── index.js         # Custom presentation logic
│   │   └── lib/             # Helper libraries
│   ├── plugins/             # impress.js plugins
│   ├── images/              # Presentation images and emoji assets
│   └── omnigraffle/         # OmniGraffle diagram sources
├── terraform/
│   ├── bootstrap/           # One-time setup: state bucket, IAM user/role
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   └── outputs.tf
│   ├── main.tf              # S3 bucket, CloudFront, ACM cert, Route 53
│   ├── providers.tf
│   ├── backend.tf           # S3 backend for state
│   ├── variables.tf
│   ├── outputs.tf
│   └── terraform.tfvars
└── README.md
```

## AWS Infrastructure

The presentation is hosted on AWS using Terraform-managed infrastructure:

- **S3** bucket (`srecon26.hatchman76.com`) for static content, fully private
- **CloudFront** distribution with Origin Access Control (OAC), HTTPS redirect, TLS 1.2+
- **ACM** certificate with automated DNS validation
- **Route 53** A-alias record pointing to CloudFront
- **IAM** role with scoped permissions assumed by a dedicated deploy user

### Deploying Content Updates

```bash
AWS_PROFILE=hatchman76 aws s3 sync src/ s3://srecon26.hatchman76.com/

DIST_ID=$(cd terraform && AWS_PROFILE=hatchman76 terraform output -raw cloudfront_distribution_id)
AWS_PROFILE=hatchman76 aws cloudfront create-invalidation \
  --distribution-id "$DIST_ID" --paths "/*"
```

### Terraform Setup

Bootstrap (one-time, creates state bucket and IAM resources):

```bash
cd terraform/bootstrap
AWS_PROFILE=hatchman76-bootstrap terraform init && terraform apply
```

Main infrastructure:

```bash
cd terraform
AWS_PROFILE=hatchman76 terraform init && terraform apply
```

## License

Please respect the creative process and check before reproducing all or part of this presentation.

Copyright © 2026 Andrew Hatch
