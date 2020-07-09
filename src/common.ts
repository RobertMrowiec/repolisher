import { compareTemplates } from './features/common'
import { findExistingPRTemplate, checkPRTemplate } from './features/prTemplate'
import {
  findExistingDefaultIssueTemplate,
  checkDefaultIssueTemplate
} from './features/issueTemplate'
import { findExistingDefaultLicenseTemplate, checkLicense } from './features/license'

export {
  compareTemplates,
  findExistingPRTemplate,
  findExistingDefaultIssueTemplate,
  checkPRTemplate,
  checkDefaultIssueTemplate,
  checkLicense,
  findExistingDefaultLicenseTemplate
}
